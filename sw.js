importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"244c79a7e87fcec845bae4fe5386156d","url":"sitemap.xml.gz"},{"revision":"1f55c757d5a11c2380868aa43f95c6e3","url":"sitemap.xml"},{"revision":"ad289c153392b1bdccaa67ab54d5064b","url":"index.html"},{"revision":"08a8e53b066a1b73d2626127557938f4","url":"404.html"},{"revision":"caabe663dd13c0f67f6ef2a5dd3b3755","url":"usage/index.html"},{"revision":"af53ddcea36b75677bb336d3f78c0bb8","url":"sunat/reglas.js"},{"revision":"aebbf54695610af08c5264bd0a86e69f","url":"sunat/reglas.css"},{"revision":"f77f29b763716de5250965b730ea0e2c","url":"sunat/reglas-validacion/index.html"},{"revision":"2b97da11e80c6574e419127603b88d20","url":"starter/index.html"},{"revision":"ed7a7086fab3a57395ba28a1d6ff2f15","url":"search/search_index.json"},{"revision":"36af23eccb0cc0d78eee2205c46a32fa","url":"production/index.html"},{"revision":"ad13b26913b68f356a36942915233fae","url":"packages/xml-parser/index.html"},{"revision":"e0daf1776db2767d441d16e9ba66995e","url":"packages/xml/index.html"},{"revision":"4cca2bd1e1826285eb4356bb33df4bf2","url":"packages/ws/index.html"},{"revision":"539138e63fbe1a7ba3da35e46eee29ec","url":"packages/sign/index.html"},{"revision":"ecd6466cd3b1cbfed6907c4c968090db","url":"packages/report/index.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"ef9e98da3a44fe9cb608c43f875da293","url":"overrides/home.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"d40ae0b932abd483f45ab046de93c3cb","url":"migrate2.1/index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"0d09d3abef23636b17bb3b9510defcb1","url":"faq/index.html"},{"revision":"9468ffc3949d91e28f622345255ab67a","url":"examples/percepcion/index.html"},{"revision":"ff94b11166e2ce8afb5a8f47880da542","url":"examples/mas/index.html"},{"revision":"7121541167ba8091ce313439a8fe73e7","url":"examples/icbper/index.html"},{"revision":"d722e514ee5e139671ba509b0b1d2f23","url":"examples/gratuita/index.html"},{"revision":"67f09d3c4a668df293682820a5b5c28c","url":"examples/forma-pago/index.html"},{"revision":"0b378ab0fd1bf19e02e40986bc2c86af","url":"examples/exportacion/index.html"},{"revision":"ed7ca776d327464418145af9dfe91448","url":"examples/exonerada/index.html"},{"revision":"bf80e6674add93cb9bacc80d969d33a6","url":"examples/detraccion/index.html"},{"revision":"3efaa43b289a1ee6dc9d12e7db999f60","url":"examples/descuento-linea/index.html"},{"revision":"b3d7f4c3439084d7efee9b757bda340e","url":"examples/contingencia/index.html"},{"revision":"5e2fb9425b800fc0ad623ec90c7bc372","url":"examples/boleta/index.html"},{"revision":"25f013af17414cf75b305446a24f37f1","url":"examples/anticipo/index.html"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"ea36c9b423c93d92c2cb2fd2d14fe53e","url":"assets/stylesheets/palette.fb2fffe2.min.css"},{"revision":"1dd57edc780eb2585f367920c9a66ba1","url":"assets/stylesheets/main.57a0d79d.min.css"},{"revision":"8cf966b8557173340d658a2d31df4164","url":"assets/javascripts/bundle.a5f9d56c.min.js"},{"revision":"7fe69d0ee2364040dceda44ca0216c97","url":"assets/javascripts/workers/search.a7633da7.min.js"},{"revision":"bba0d876ec8dcca1f4effced534f58f7","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"c389a3f75a63e2f82583e2299e71d24c","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"5ea846981ba3c69844166791e58b3205","url":"assets/javascripts/lunr/min/lunr.te.min.js"},{"revision":"cdcbc4445530bf338f7410008621c5a3","url":"assets/javascripts/lunr/min/lunr.ta.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2a9731e42ec88940a7d57282ff20b304","url":"assets/javascripts/lunr/min/lunr.sa.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"785bb0c4e6c0fb12917b39c2b7f99a0a","url":"assets/javascripts/lunr/min/lunr.ko.min.js"},{"revision":"52e5ec6c79e8607d8a4d287cffd5d0b3","url":"assets/javascripts/lunr/min/lunr.kn.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"72621c38dc5df3cb135d3446772d22f6","url":"assets/javascripts/lunr/min/lunr.hy.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"652294dbd7c18736f8bab6165da5c868","url":"assets/javascripts/lunr/min/lunr.he.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"e16237c91ffdd50e5caf2cda98ce763d","url":"assets/javascripts/lunr/min/lunr.el.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"1a64840641c8d52b800388a538b4ca35","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"}]);
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
