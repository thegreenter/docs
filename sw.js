importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"7fc8c4d028a1cfa3e996e00190ea9ee5","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"d58072229da30355a265fd7eecdde12b","url":"assets/javascripts/bundle.220ee61c.min.js"},{"revision":"1a64840641c8d52b800388a538b4ca35","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"72621c38dc5df3cb135d3446772d22f6","url":"assets/javascripts/lunr/min/lunr.hy.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"52e5ec6c79e8607d8a4d287cffd5d0b3","url":"assets/javascripts/lunr/min/lunr.kn.min.js"},{"revision":"785bb0c4e6c0fb12917b39c2b7f99a0a","url":"assets/javascripts/lunr/min/lunr.ko.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"2a9731e42ec88940a7d57282ff20b304","url":"assets/javascripts/lunr/min/lunr.sa.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"cdcbc4445530bf338f7410008621c5a3","url":"assets/javascripts/lunr/min/lunr.ta.min.js"},{"revision":"5ea846981ba3c69844166791e58b3205","url":"assets/javascripts/lunr/min/lunr.te.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"c389a3f75a63e2f82583e2299e71d24c","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"bba0d876ec8dcca1f4effced534f58f7","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"33c8ecaa3c6e3c21a091a9f407ed5241","url":"assets/javascripts/workers/search.74e28a9f.min.js"},{"revision":"47b79901170cf1700b5aba722261df3b","url":"assets/stylesheets/main.eebd395e.min.css"},{"revision":"6ca1901b85a02afb10c56be1eb0631ba","url":"assets/stylesheets/palette.ecc896b0.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"f8c04f9a6cebd00763499bd9156e2654","url":"examples/anticipo/index.html"},{"revision":"b0259443c8a8fa5e0dcef852412ee4f8","url":"examples/boleta/index.html"},{"revision":"beb34366fd7026ec7dc5a63dce0b41ef","url":"examples/contingencia/index.html"},{"revision":"ebe6f7b2912497e530b3c6e3696105b9","url":"examples/descuento-linea/index.html"},{"revision":"f12f4e8ee90a6ff7a05f9cd19e09c2f4","url":"examples/detraccion/index.html"},{"revision":"6c89ec59f37bb3090328d1eb68c76c7c","url":"examples/exonerada/index.html"},{"revision":"4b4d877d76cc2fefc4d6b75f3ea21642","url":"examples/exportacion/index.html"},{"revision":"bfbc0b93660cc6320bfa40d106b7dc55","url":"examples/forma-pago/index.html"},{"revision":"a33068f8069afcf533cdb1ce5a60dc58","url":"examples/gratuita/index.html"},{"revision":"f143775b7f062f74a73f1ef3d2bd6566","url":"examples/icbper/index.html"},{"revision":"28b06118cb8bf62f2ea8541f7a178e70","url":"examples/mas/index.html"},{"revision":"1accb2fbfba2dc46b6090b53f54b3779","url":"examples/percepcion/index.html"},{"revision":"36d73c9fc175d87e7a3e7624c5a883ea","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"84a48110717af3a654b56a411dffc38c","url":"index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"4c0d37b0f41339b38d7e9ef4a2f3c67f","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"8cde4df163a52967e343874d05ef7d95","url":"overrides/home.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"b1a75295125e7aecafd2abde4895dc06","url":"packages/report/index.html"},{"revision":"904de7680fa85354846fd5667c616e13","url":"packages/sign/index.html"},{"revision":"68a831c21a296125888c103f123fb753","url":"packages/ws/index.html"},{"revision":"7a214cb3b75fb4f5fc6b5ed1a7a3cf1b","url":"packages/xml-parser/index.html"},{"revision":"1f72e0e4bf898f09654d9d6608349dcb","url":"packages/xml/index.html"},{"revision":"b97d1447569d14e6a6b1dda37283cfeb","url":"production/index.html"},{"revision":"792a5e094470ec3d46efb785fbe1fa79","url":"search/search_index.json"},{"revision":"52c77b9e56361003db2c081ecd201c44","url":"sitemap.xml"},{"revision":"26521cdf2bfa6e59f60cf6fce13bf939","url":"sitemap.xml.gz"},{"revision":"133316501e1d70bf40f5efc2169ae397","url":"starter/index.html"},{"revision":"7f9bb56e2726f51585506335d7dedb03","url":"usage/index.html"}]);
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
