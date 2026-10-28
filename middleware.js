/* ============================================================================
   ACCESO AL TRAINING · sin base de datos (28-10-2026)
   ----------------------------------------------------------------------------
   Quien cierra al alumno entra en /alta, pone la contraseña de altas y el email
   del alumno, y recibe un enlace /access?t=… para mandárselo. Al abrirlo, el
   navegador guarda una cookie firmada (1 año) y /training queda abierto.

   Variables de entorno (Vercel → Settings → Environment Variables):
     ACCESS_SECRET    clave con la que se firman enlaces y cookies (cambiarla
                      echa a TODOS los alumnos)
     ADMIN_PASSWORD   contraseña de la página /alta
     BLOCKED_EMAILS   emails sin acceso, separados por comas (quitar un acceso
                      = añadirlo aquí y volver a desplegar)
   ========================================================================== */

export const config = {
  matcher: ['/training', '/training.html', '/training-content.js', '/assets/docs/:path*', '/access', '/api/issue'],
};

const COOKIE = 'ts_access';
const LINK_DAYS = 14;      // el enlace caduca si no se abre en 14 días
const SESSION_DAYS = 365;  // la cookie dura un año

const enc = new TextEncoder();
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64url = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

async function key() {
  const secret = process.env.ACCESS_SECRET;
  if (!secret) throw new Error('ACCESS_SECRET missing');
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

async function sign(payload) {
  const body = b64url(enc.encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign('HMAC', await key(), enc.encode(body));
  return body + '.' + b64url(sig);
}

async function verify(token, type) {
  if (!token || token.indexOf('.') < 0) return null;
  const [body, sig] = token.split('.');
  try {
    const ok = await crypto.subtle.verify('HMAC', await key(), fromB64url(sig), enc.encode(body));
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(fromB64url(body)));
    if (p.t !== type || !p.x || p.x < Date.now()) return null;
    if (blocked().includes(String(p.e).toLowerCase())) return null;
    return p;
  } catch (e) {
    return null;
  }
}

const blocked = () => (process.env.BLOCKED_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);

function cookieOf(req, name) {
  const m = (req.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? m[1] : null;
}

function safeEqual(a, b) {
  a = String(a || ''); b = String(b || '');
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}

const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

const NO_ACCESS = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>TradeStart · Members only</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0b0c;color:#f4f4f5;font-family:Inter,system-ui,-apple-system,sans-serif;padding:24px}main{max-width:440px;text-align:center}h1{font-size:28px;margin:0 0 12px}p{color:#a1a1aa;line-height:1.6;margin:0 0 24px}a{display:inline-block;background:#2563eb;color:#fff;text-decoration:none;font-weight:600;padding:14px 22px;border-radius:10px}</style></head>
<body><main><h1>This training is for members</h1><p>Your access link is personal. If you already joined, open the link you received from our team. If it expired or you lost it, message us and we'll send you a new one.</p><a href="/">Back to TradeStart</a></main></body></html>`;

export default async function middleware(req) {
  const url = new URL(req.url);

  // Emitir un enlace (lo llama la página /alta)
  if (url.pathname === '/api/issue') {
    if (req.method !== 'POST') return json({ error: 'POST only' }, 405);
    let b = {};
    try { b = await req.json(); } catch (e) {}
    if (!process.env.ADMIN_PASSWORD || !safeEqual(b.password, process.env.ADMIN_PASSWORD)) return json({ error: 'Wrong password' }, 401);
    const email = String(b.email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Invalid email' }, 400);
    if (blocked().includes(email)) return json({ error: 'This email is blocked' }, 403);
    const token = await sign({ t: 'link', e: email, c: String(b.closer || '').slice(0, 60), i: Date.now(), x: Date.now() + LINK_DAYS * 864e5 });
    return json({ link: url.origin + '/access?t=' + token, expiresInDays: LINK_DAYS });
  }

  // El alumno abre su enlace → cookie de sesión → al training
  if (url.pathname === '/access') {
    const p = await verify(url.searchParams.get('t'), 'link');
    if (!p) return new Response(NO_ACCESS, { status: 403, headers: { 'content-type': 'text/html; charset=utf-8' } });
    const session = await sign({ t: 's', e: p.e, c: p.c, x: Date.now() + SESSION_DAYS * 864e5 });
    return new Response(null, {
      status: 302,
      headers: {
        location: '/training',
        'set-cookie': `${COOKIE}=${session}; Path=/; Max-Age=${SESSION_DAYS * 86400}; HttpOnly; Secure; SameSite=Lax`,
        'cache-control': 'no-store',
      },
    });
  }

  // Todo lo demás del matcher es contenido del curso: hace falta la cookie
  if (await verify(cookieOf(req, COOKIE), 's')) {
    return new Response(null, { headers: { 'x-middleware-next': '1' } });
  }
  if (url.pathname === '/training' || url.pathname === '/training.html') {
    return new Response(NO_ACCESS, { status: 403, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
  }
  return new Response('Members only', { status: 403, headers: { 'cache-control': 'no-store' } });
}
