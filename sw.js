importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"bb588365a28707d793b1d548f707cbc7","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"371ec4cd4fad09852f5a160b6f2cc6e5","url":"assets/javascripts/bundle.6ced434e.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"3b5ae300533c0d4efc89b48d08d7acf0","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"5d4a73bf2399165f03bb16eb2782854e","url":"assets/javascripts/vendor.08c56446.min.js"},{"revision":"1ae249b5cc47d48d816d304ca66f8e58","url":"assets/javascripts/worker/search.8c7e0a7e.min.js"},{"revision":"46e0692458feba9b0cb68894d253272e","url":"assets/stylesheets/main.3b61ea93.min.css"},{"revision":"d76cfc721121adc3fec462d92155746f","url":"assets/stylesheets/palette.39b8e14a.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"3da8a2b9d80cbeef267b9c6c90611f56","url":"examples/anticipo/index.html"},{"revision":"c9a7bfd09aff1500fd75fee7a77639fc","url":"examples/boleta/index.html"},{"revision":"a4bdcf09423abf36711b8a1437a07cce","url":"examples/contingencia/index.html"},{"revision":"aab0d47b4370ca12e507bb204fc6bd02","url":"examples/descuento-linea/index.html"},{"revision":"5df00e3addc7daf045f789b273a891bd","url":"examples/detraccion/index.html"},{"revision":"4126976f3d656c84616ee27854ccf4c6","url":"examples/exonerada/index.html"},{"revision":"fa42d740397665159be43baef6a4e880","url":"examples/exportacion/index.html"},{"revision":"83e38c8b61ddb3df8801d420d06bfd3d","url":"examples/factura/index.html"},{"revision":"a74039cabbe050b38d8471f56351d373","url":"examples/gratuita/index.html"},{"revision":"49364000fe7b4ebc040bdf9df5b4bdf3","url":"examples/icbper/index.html"},{"revision":"ef69fb1b5b23f685c4de99fcfb6420ed","url":"examples/mas/index.html"},{"revision":"2fb5a89211a6ada11bf33a42b54cfca9","url":"examples/percepcion/index.html"},{"revision":"a94c62936d16fe228f8d9ba28e61f4e9","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"21145eb3aee422f44aaa6f36302a6cf8","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"0ae8b8f4b6d68738bf50ab93ff5ceb02","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"5c78aa31031bf38f73fec7dd40c99d54","url":"overrides/home.html"},{"revision":"7fa8eac3b445b477749767043bb6c545","url":"overrides/main.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"f0fd9e4bb78d7beca7fa880b75b2c03c","url":"packages/report/index.html"},{"revision":"491f4e5e8ab194d5a621764f7e196a85","url":"packages/sign/index.html"},{"revision":"437b2ead67a4240189a4379d017d71c1","url":"packages/ws/index.html"},{"revision":"949d3dfcec8fd7a93ccd2be825e4493a","url":"packages/xml-parser/index.html"},{"revision":"4848be26d2f7323558bcb58eab47ea12","url":"packages/xml/index.html"},{"revision":"94d48870b577d58a0dbff4f3a2a9a59f","url":"production/index.html"},{"revision":"05f882c54a029b5508c21f87fa3ccc94","url":"search/search_index.json"},{"revision":"446ada17078ffe1d185141c3903c43d0","url":"sitemap.xml"},{"revision":"3da1e7113ddbff377fdb6c2b1e4288d2","url":"sitemap.xml.gz"},{"revision":"207957531e616465939bb4be7100ab65","url":"starter/index.html"},{"revision":"0e4f2775f7d82a02248c8e033ca07b45","url":"usage/index.html"}]);
workbox.googleAnalytics.initialize();

workbox.core.clientsClaim();
workbox.core.skipWaiting();

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /^https:\/\/gitpod\.io([/|\w|\s|-])*\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'gitpod-images',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 10,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        purgeOnQuotaError: true,
      }),
    ],
  })
);
