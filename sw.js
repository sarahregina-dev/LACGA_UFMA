/*
  SERVICE WORKER – deixa o site instalável e abrindo sem internet.

  - Página e lista de artigos: busca sempre a versão nova na internet; sem internet, usa a cópia salva.
  - Fontes, imagens e PDFs: mostra a cópia salva na hora e atualiza em segundo plano.

  Se trocar fontes, ícones ou imagens e eles não atualizarem no celular, aumente o número da VERSAO.
*/
const VERSAO = 'lacga-v4';

const ESSENCIAIS = [
  './',
  'index.html',
  'artigos/artigos.js',
  'eventos/eventos.js',
  'seletivo.html',
  'seletivo/seletivo.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'imgs/logo-web-96.png',
  'imgs/logo-web1-480.png',
  'fonts/Inter_24pt-Regular.woff2',
  'fonts/Inter_24pt-Medium.woff2',
  'fonts/Inter_24pt-SemiBold.woff2',
  'fonts/Syne-Bold.woff2',
  'fonts/Syne-ExtraBold.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ESSENCIAIS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== VERSAO).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;

  const sempreNovo = req.mode === 'navigate' || url.pathname.endsWith('.js') || url.pathname.endsWith('.webmanifest');
  e.respondWith(sempreNovo ? redePrimeiro(req) : cachePrimeiro(e, req));
});

async function redePrimeiro(req) {
  const cache = await caches.open(VERSAO);
  try {
    const resp = await fetch(req);
    if (resp.status === 200) cache.put(req, resp.clone());
    return resp;
  } catch {
    return (await cache.match(req, { ignoreSearch: true }))
      || (req.mode === 'navigate' && await cache.match('index.html'))
      || Response.error();
  }
}

async function cachePrimeiro(e, req) {
  const cache = await caches.open(VERSAO);
  const salvo = await cache.match(req);
  const novo = fetch(req).then(resp => {
    if (resp.status === 200) cache.put(req, resp.clone());
    return resp;
  }).catch(() => salvo || Response.error());
  if (salvo) { e.waitUntil(novo); return salvo; }
  return novo;
}
