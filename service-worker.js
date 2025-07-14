self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('absensi-properindo-cache').then(cache => {
      return cache.addAll([
        'absensi_nip_pwa.html',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
