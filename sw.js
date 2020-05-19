importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"ff3df9c9cbc778b75dd4142f344b551c","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"de6a63b10bc6f10f20ab4f499b0c3c2e","url":"assets/javascripts/bundle.5f27aba8.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"f040b47f846ca6b2bbea92b4bd9f2783","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"df7ce8b357b1b9d73011726ae1e190b5","url":"assets/javascripts/vendor.d710d30a.min.js"},{"revision":"431d537dbf57a610d7578afd5c2128ed","url":"assets/javascripts/worker/search.27c6a5e6.min.js"},{"revision":"dd6b399b53380b29132a5eb63d5e63d7","url":"assets/stylesheets/main.18ac144a.min.css"},{"revision":"57ea7276695010e2c41d980f729fc5a7","url":"assets/stylesheets/palette.616af814.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"35795da7dc681d7f13a419c227aece09","url":"examples/anticipo/index.html"},{"revision":"9d9a46f6d70c8ddcddb75d28a1da3d07","url":"examples/boleta/index.html"},{"revision":"529c1213730095971b629b653e843b33","url":"examples/contingencia/index.html"},{"revision":"08a85bf710fda9517d23ce9f7ca6fc20","url":"examples/descuento-linea/index.html"},{"revision":"cec7e7ff1fa29a52908d0f2229ab3fc4","url":"examples/detraccion/index.html"},{"revision":"c0d1ecb1477135aea11eb896e3129e4e","url":"examples/exonerada/index.html"},{"revision":"26789a56d776ccb6e8584caf361cbb4f","url":"examples/exportacion/index.html"},{"revision":"325aafe14973cb09f9e2389155726c62","url":"examples/gratuita/index.html"},{"revision":"b696a23ef3d0d828f79b1b35102b03f2","url":"examples/icbper/index.html"},{"revision":"a0dedc7ddc83e270734ad939b25ca999","url":"examples/percepcion/index.html"},{"revision":"76b5807d7ab1fe2579c453b63a43e04c","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"a5c471ecce2e249d12a2bec6771c2279","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"81a542cb1ff93f934456865d931db240","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"6d9d4bfee03695e62057f31aed2534a6","url":"overrides/home.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"07fe107a21f4a9fdd23c7e9ffc6bd922","url":"production/index.html"},{"revision":"fb6a78069651fed5dfbddb06daa93ee4","url":"search/search_index.json"},{"revision":"ee4b05af2c2557bec34a3012ad30d31f","url":"sitemap.xml"},{"revision":"7fba25a5d3e801a869d77f04afc789ba","url":"sitemap.xml.gz"},{"revision":"c14ba0da9053dd356ac72abf36fd4e3f","url":"starter/index.html"}]);
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
