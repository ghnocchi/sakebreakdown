self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('sake-store').then((cache) => cache.addAll([
      '/sakebreakdown/',
      '/sakebreakdown/index.html',
      '/sakebreakdown/vue.js',
      '/sakebreakdown/index.js',
      '/sakebreakdown/app.js',
      '/sakebreakdown/style.css',
      '/sakebreakdown/normalize.css',
      '/sakebreakdown/icon/alc_beer.png',
      '/sakebreakdown/icon/alc_wine.png',
      '/sakebreakdown/icon/alc_whiskey.png',
      '/sakebreakdown/icon/alc_chuhi.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
