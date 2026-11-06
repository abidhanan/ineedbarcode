import { handleStats } from './stats.mjs';

const SECURITY_HEADERS = {
  'x-ineedbarcode-runtime': 'worker',
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'DENY',
  'strict-transport-security': 'max-age=63072000; includeSubDomains; preload',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(self), payment=()',
  'cross-origin-opener-policy': 'same-origin',
};

export function secure(response) {
  const secured = new Response(response.body, response);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    secured.headers.set(name, value);
  }
  return secured;
}

function canonicalRedirect(url) {
  url.protocol = 'https:';
  url.hostname = 'ineedbarcode.com';
  url.port = '';
  return Response.redirect(url, 308);
}

function geo(request) {
  return Response.json(
    { country: request.cf?.country || request.headers.get('cf-ipcountry') || '' },
    { headers: { 'cache-control': 'private, no-store' } },
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'www.ineedbarcode.com') return canonicalRedirect(url);

    let response;
    if (url.pathname === '/api/geo') {
      response = geo(request);
    } else if (url.pathname === '/api/stats') {
      response = await handleStats(request, env);
    } else if (url.pathname.startsWith('/api/')) {
      response = Response.json({ error: 'Not found' }, { status: 404 });
    } else {
      response = await env.ASSETS.fetch(request);
    }

    return secure(response);
  },
};

