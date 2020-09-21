importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"a07ed1609fd7b86e0fa453db689a81cc","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"101befc742e281cb0b2b979c0ce3f32b","url":"assets/javascripts/bundle.6627ddf3.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"3b5ae300533c0d4efc89b48d08d7acf0","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"e54c665d600b132c20653586c2ee620c","url":"assets/javascripts/vendor.2d1db4bd.min.js"},{"revision":"1753ca61d8ba257e493d0bc3350a086a","url":"assets/javascripts/worker/search.5eca75d3.min.js"},{"revision":"50f96a36c50d640b99342a9214ccbc31","url":"assets/stylesheets/main.077507d7.min.css"},{"revision":"1183a9e63cf130ca44276e6b8b0ff336","url":"assets/stylesheets/palette.ff0a5ce4.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"ed27e12246da7e87d9580bf68147b49c","url":"examples/anticipo/index.html"},{"revision":"65f6cd7a0a0d6d83397a378a16645219","url":"examples/boleta/index.html"},{"revision":"44c07289710b474fe158a9b1636ab57b","url":"examples/contingencia/index.html"},{"revision":"cd9112b0c63985303853e9acee944eeb","url":"examples/descuento-linea/index.html"},{"revision":"2af6324e9665b73bd9f2161aa310fa38","url":"examples/detraccion/index.html"},{"revision":"bcc079cf9357ee9f0f9ca15dfac40ef9","url":"examples/exonerada/index.html"},{"revision":"b343e630c24536e73d6bfa40725f829c","url":"examples/exportacion/index.html"},{"revision":"604cfb5c55bddfe301c8f0679138a85a","url":"examples/factura/index.html"},{"revision":"deb39a54daea16de3e06fdd319713010","url":"examples/gratuita/index.html"},{"revision":"72ad173d7cfd7f8f7172d175f01fdad1","url":"examples/icbper/index.html"},{"revision":"abc0feaef286c951b135199bce07bd80","url":"examples/mas/index.html"},{"revision":"e454ff3dbf5b4de7cfbb494d609510a4","url":"examples/percepcion/index.html"},{"revision":"39c086bd59937e4dad73139d226def7c","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"5343b11d7a2009a38e95d35bf100a72f","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"79b59e7729b8fb7a24e4bb5c25baba59","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"5c78aa31031bf38f73fec7dd40c99d54","url":"overrides/home.html"},{"revision":"7fa8eac3b445b477749767043bb6c545","url":"overrides/main.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"f776589363ad20490b9f50c395c69c32","url":"packages/report/index.html"},{"revision":"db9fa02d82f3c78441a7d334c794eaa3","url":"packages/sign/index.html"},{"revision":"d67505f52e33bad06fb002f70b874f84","url":"packages/ws/index.html"},{"revision":"7e50044b091c9664c10b2d271279eb66","url":"packages/xml-parser/index.html"},{"revision":"85c0f162b90292d2d0e60e0ae7614ae1","url":"packages/xml/index.html"},{"revision":"3dafeeb623227054b9127d9809ff8d90","url":"production/index.html"},{"revision":"d1faa5553f0edecc63416d31e24d7a13","url":"search/search_index.json"},{"revision":"2cb5940781c3b9466b55c17ed82db029","url":"sitemap.xml"},{"revision":"89b550692e61477c81fc593b3828612c","url":"sitemap.xml.gz"},{"revision":"3b6fa150a6ca4074d003326c0ede2b99","url":"starter/index.html"},{"revision":"e8fe6ac9b7fe0db2f74cb64589d18f50","url":"usage/index.html"}]);
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
