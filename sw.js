self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/sakebreakdown/',
      '/sakebreakdown/index.html',
      '/sakebreakdown/vue.js',
      '/sakebreakdown/index.js',
      '/sakebreakdown/app.js',
      '/sakebreakdown/style.css',
      '/sakebreakdown/images/fox1.jpg',
      '/sakebreakdown/images/fox2.jpg',
      '/sakebreakdown/images/fox3.jpg',
      '/sakebreakdown/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
