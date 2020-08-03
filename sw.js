importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"dd3b7dfad7d9afac82b417f62a433936","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"cdc110f8c359de61b51db921e4aae0bd","url":"assets/javascripts/bundle.806ca5c4.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"3b5ae300533c0d4efc89b48d08d7acf0","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"7a9abf3ce1c7084e43cac6f1d23357cd","url":"assets/javascripts/vendor.592d4e23.min.js"},{"revision":"be6a5c4a7b50a68712ab9e3bff152eca","url":"assets/javascripts/worker/search.01088dc6.min.js"},{"revision":"67fd7d4397317e32681803f17ba89fa9","url":"assets/stylesheets/main.25b81cc6.min.css"},{"revision":"93134460c38b89f18a2ed08f5757d026","url":"assets/stylesheets/palette.80a78273.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"cca8fb59409465984e8995a15389f9ab","url":"examples/anticipo/index.html"},{"revision":"bf052e46c716c7e28d6f54b0760c34f5","url":"examples/boleta/index.html"},{"revision":"74a652d6c0b273332176ebb0c3cdb1e1","url":"examples/contingencia/index.html"},{"revision":"5cee90015662486c43aeb1da3e4112d0","url":"examples/descuento-linea/index.html"},{"revision":"4eaa080e0a0aba78fa7192d0f0ce0683","url":"examples/detraccion/index.html"},{"revision":"df1742d6182f4ec54f7945bb298fb1a6","url":"examples/exonerada/index.html"},{"revision":"1d715706897fb7b444650b22de44ca25","url":"examples/exportacion/index.html"},{"revision":"71642fe810772861a1b4efe16307f4b2","url":"examples/gratuita/index.html"},{"revision":"1037f3a2c42e3f833813b00ae42d4d62","url":"examples/icbper/index.html"},{"revision":"e28184969d0c667994792675cfd51af3","url":"examples/percepcion/index.html"},{"revision":"aaec149de28e5a8685647944d020706e","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"55bd854999f02696230684f8a68efeb8","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"f3445d6157ddac2b9728f81c4428b50f","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"6d9d4bfee03695e62057f31aed2534a6","url":"overrides/home.html"},{"revision":"0c4aac8283acf90cf29c3e94079cb2d6","url":"overrides/main.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"e74f7c0336c9c70d494b70d5aac4dc82","url":"production/index.html"},{"revision":"1b98d622cd6416f9e7c246eab7990c8e","url":"search/search_index.json"},{"revision":"bbca68506894992d1277439ba96b72b2","url":"sitemap.xml"},{"revision":"254523a7700740f1122abbc1b0942f1a","url":"sitemap.xml.gz"},{"revision":"eefb38640c38358df209cfec6a9837c8","url":"starter/index.html"}]);
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
