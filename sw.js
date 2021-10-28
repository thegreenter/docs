importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"06dc8bc75c82d8973eb44f01da97110d","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"3e6994aa76fdc6bc74cce2e64fcdb451","url":"assets/javascripts/bundle.1e84347e.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"ab916ff325d03857de3249bf547a8eac","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"8b3fd2734cab51a6222afc5436da4c5d","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"738f73e5f25695fc23f67d1e957c6f80","url":"assets/javascripts/workers/search.8397ff9e.min.js"},{"revision":"d817219505c87d17d868b27535e3770b","url":"assets/stylesheets/main.cdeb8541.min.css"},{"revision":"9c0875a9040d67c282a73239c7adf8ee","url":"assets/stylesheets/palette.3f5d1f46.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"69f099f1bf6bedc7ea6074a893a50a98","url":"examples/anticipo/index.html"},{"revision":"c56db0db8cca6f90bbe6e48587801836","url":"examples/boleta/index.html"},{"revision":"5cb36dbfc750079d27419fd7dd1eb54a","url":"examples/contingencia/index.html"},{"revision":"f82a64f74f1042733c47418932d9e0ba","url":"examples/descuento-linea/index.html"},{"revision":"ed62d68dc7ebc8dc812a7c05981c745a","url":"examples/detraccion/index.html"},{"revision":"e2f29b7026f3c18d766482e419758d80","url":"examples/exonerada/index.html"},{"revision":"f5aa770f048c5fb72b3602c440571b9c","url":"examples/exportacion/index.html"},{"revision":"48ba2bf4e03a8c44a62cdb6941fcf8fc","url":"examples/forma-pago/index.html"},{"revision":"65e7085f8080b4701455668144028439","url":"examples/gratuita/index.html"},{"revision":"8ec5968f285c9ff1ecd0e86c5a9fe60d","url":"examples/icbper/index.html"},{"revision":"47ad1f415ca9a742079a796092f474e2","url":"examples/mas/index.html"},{"revision":"b5c01460d5b102de84f07b8e406d0dde","url":"examples/percepcion/index.html"},{"revision":"4c2110abdcb5f493651f733f92f81f05","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"0be1efac5b8d40ea8e1141f9404b6d34","url":"index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"91ac8a3e42cb4ddebfb774b93959ad00","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"5c78aa31031bf38f73fec7dd40c99d54","url":"overrides/home.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"bad47b1b22f92d64b159ab91b54a0e94","url":"packages/report/index.html"},{"revision":"009fcebaa78c86f8830c432e20e86691","url":"packages/sign/index.html"},{"revision":"700209c5575f33e5b53f236c4f41c77e","url":"packages/ws/index.html"},{"revision":"687094ec9841d9ad77bd6fcbbd43aa73","url":"packages/xml-parser/index.html"},{"revision":"58269a9e6627a2218229c631d94fdd8d","url":"packages/xml/index.html"},{"revision":"645de872ecfeacbd8799f46a49268984","url":"production/index.html"},{"revision":"925488701aa0a3d04950040c7948f21a","url":"search/search_index.json"},{"revision":"96f4d0578d70b70361b7cab8e3bec725","url":"sitemap.xml"},{"revision":"533dee573f1b6107dae5f78c39c22ed4","url":"sitemap.xml.gz"},{"revision":"e3ab666793d09f8983126872c2a476e1","url":"starter/index.html"},{"revision":"076236db3ea66416ce7e6a3e45fc0b6d","url":"usage/index.html"}]);
workbox.googleAnalytics.initialize();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

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
