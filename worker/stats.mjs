import { Redis } from '@upstash/redis/cloudflare';

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ACTIONS = new Set(['view', 'like', 'unlike', 'share']);
const EMPTY = Object.freeze({ views: 0, likes: 0, shares: 0 });
const POPULAR_KEY = 'inb:articles:views';

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'private, no-store',
  'x-content-type-options': 'nosniff',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function client(env) {
  if (!env.UPSTASH_REDIS_REST_URL || !env.UPSTASH_REDIS_REST_TOKEN) return null;
  return new Redis({
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
  });
}

function counts(value) {
  const row = value || EMPTY;
  return {
    views: Math.max(0, Number(row.views) || 0),
    likes: Math.max(0, Number(row.likes) || 0),
    shares: Math.max(0, Number(row.shares) || 0),
  };
}

async function fingerprint(request) {
  const source = [
    request.headers.get('cf-connecting-ip') || 'unknown',
    request.headers.get('user-agent') || 'unknown',
  ].join('|');
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(source));
  return Array.from(
    new Uint8Array(digest).slice(0, 12),
    (byte) => byte.toString(16).padStart(2, '0'),
  ).join('');
}

async function readMany(redis, slugs) {
  const rows = await Promise.all(slugs.map((slug) => redis.hgetall(`inb:article:${slug}`)));
  return Object.fromEntries(slugs.map((slug, index) => [slug, counts(rows[index])]));
}

async function get(request, redis) {
  const url = new URL(request.url);
  const popular = Math.min(20, Math.max(0, Number(url.searchParams.get('popular')) || 0));
  if (popular) {
    const slugs = await redis.zrange(POPULAR_KEY, 0, popular - 1, { rev: true });
    return json({ enabled: true, popular: slugs });
  }

  const slugs = [...new Set(
    (url.searchParams.get('slugs') || url.searchParams.get('slug') || '')
      .split(',')
      .filter((slug) => SLUG.test(slug)),
  )].slice(0, 20);
  return json({ enabled: true, stats: await readMany(redis, slugs) });
}

async function post(request, redis) {
  if (request.headers.get('sec-fetch-site') === 'cross-site') return json({ error: 'Forbidden' }, 403);
  if (Number(request.headers.get('content-length') || 0) > 1024) return json({ error: 'Invalid JSON' }, 400);

  let input;
  try {
    input = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const slug = String(input?.slug || '');
  const action = String(input?.action || '');
  if (!SLUG.test(slug) || !ACTIONS.has(action)) return json({ error: 'Invalid request' }, 400);

  const field = action === 'view' ? 'views' : action === 'share' ? 'shares' : 'likes';
  const delta = action === 'unlike' ? -1 : 1;
  const ttl = action === 'view' ? 21600 : action === 'share' ? 60 : 2;
  const visitor = await fingerprint(request);
  const accepted = await redis.set(`inb:guard:${action}:${slug}:${visitor}`, '1', { nx: true, ex: ttl });

  if (accepted) {
    const script = `
      local value = redis.call('HINCRBY', KEYS[1], ARGV[1], ARGV[2])
      if value < 0 then
        redis.call('HSET', KEYS[1], ARGV[1], 0)
        value = 0
      end
      if ARGV[1] == 'views' and tonumber(ARGV[2]) > 0 then
        redis.call('ZINCRBY', KEYS[2], ARGV[2], ARGV[3])
      end
      return value
    `;
    await redis.eval(script, [`inb:article:${slug}`, POPULAR_KEY], [field, delta, slug]);
  }

  return json({ enabled: true, ...counts(await redis.hgetall(`inb:article:${slug}`)) });
}

export async function handleStats(request, env) {
  const redis = client(env);
  if (!redis) return json({ enabled: false });

  try {
    if (request.method === 'GET') return get(request, redis);
    if (request.method === 'POST') return post(request, redis);
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: { allow: 'GET, POST, OPTIONS' } });
    }
    return json({ error: 'Method not allowed' }, 405);
  } catch (error) {
    console.error('Upstash stats request failed', error);
    return json({ enabled: false }, 503);
  }
}

