import assert from 'node:assert/strict';
import test from 'node:test';
import worker, { secure } from './index.mjs';

function environment(overrides = {}) {
  return {
    ASSETS: {
      fetch(request) {
        return new Response(new URL(request.url).pathname, {
          headers: { 'cache-control': 'public, max-age=60' },
        });
      },
    },
    ...overrides,
  };
}

test('redirects www to the canonical apex domain', async () => {
  const response = await worker.fetch(
    new Request('https://www.ineedbarcode.com/artikel/apa-itu-barcode?x=1'),
    environment(),
  );
  assert.equal(response.status, 308);
  assert.equal(response.headers.get('location'), 'https://ineedbarcode.com/artikel/apa-itu-barcode?x=1');
});

test('serves assets through the ASSETS binding with security headers', async () => {
  const response = await worker.fetch(new Request('https://ineedbarcode.com/en/'), environment());
  assert.equal(await response.text(), '/en/');
  assert.equal(response.headers.get('x-ineedbarcode-runtime'), 'worker');
  assert.equal(response.headers.get('x-frame-options'), 'DENY');
  assert.equal(response.headers.get('cache-control'), 'public, max-age=60');
});

test('returns visitor country from Cloudflare request metadata', async () => {
  const request = new Request('https://ineedbarcode.com/api/geo', {
    headers: { 'cf-ipcountry': 'ID' },
  });
  const response = await worker.fetch(request, environment());
  assert.deepEqual(await response.json(), { country: 'ID' });
  assert.equal(response.headers.get('cache-control'), 'private, no-store');
});

test('keeps stats disabled until Upstash secrets are configured', async () => {
  const response = await worker.fetch(
    new Request('https://ineedbarcode.com/api/stats?slug=apa-itu-barcode'),
    environment(),
  );
  assert.deepEqual(await response.json(), { enabled: false });
});

test('rejects unknown API routes instead of serving static content', async () => {
  const response = await worker.fetch(new Request('https://ineedbarcode.com/api/missing'), environment());
  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: 'Not found' });
});

test('secure preserves the original body and cache policy', async () => {
  const response = secure(new Response('ok', { headers: { 'cache-control': 'public, max-age=60' } }));
  assert.equal(await response.text(), 'ok');
  assert.equal(response.headers.get('cache-control'), 'public, max-age=60');
  assert.equal(response.headers.get('strict-transport-security'), 'max-age=63072000; includeSubDomains; preload');
});

