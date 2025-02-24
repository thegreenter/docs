importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"df7eeead4620dbe2ea4b84a847541d6a","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"d9ca27602e5ecc3aeebe6eae7780e9b6","url":"assets/javascripts/bundle.f1b6f286.min.js"},{"revision":"1a64840641c8d52b800388a538b4ca35","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e16237c91ffdd50e5caf2cda98ce763d","url":"assets/javascripts/lunr/min/lunr.el.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"652294dbd7c18736f8bab6165da5c868","url":"assets/javascripts/lunr/min/lunr.he.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"72621c38dc5df3cb135d3446772d22f6","url":"assets/javascripts/lunr/min/lunr.hy.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"52e5ec6c79e8607d8a4d287cffd5d0b3","url":"assets/javascripts/lunr/min/lunr.kn.min.js"},{"revision":"785bb0c4e6c0fb12917b39c2b7f99a0a","url":"assets/javascripts/lunr/min/lunr.ko.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"2a9731e42ec88940a7d57282ff20b304","url":"assets/javascripts/lunr/min/lunr.sa.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"cdcbc4445530bf338f7410008621c5a3","url":"assets/javascripts/lunr/min/lunr.ta.min.js"},{"revision":"5ea846981ba3c69844166791e58b3205","url":"assets/javascripts/lunr/min/lunr.te.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"c389a3f75a63e2f82583e2299e71d24c","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"bba0d876ec8dcca1f4effced534f58f7","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"29d2e6c2ff5a3e787e4474c5230cf6db","url":"assets/javascripts/workers/search.f8cc74c7.min.js"},{"revision":"deafd158abf73723c3b775a19347ed6d","url":"assets/stylesheets/main.8608ea7d.min.css"},{"revision":"f6d6db7a586f485ee80d761450d9c595","url":"assets/stylesheets/palette.06af60db.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"d15e26eb1a013379c6ca8c217fc5f80c","url":"examples/anticipo/index.html"},{"revision":"7cc2fb35b8abd36d650aafc24973d0eb","url":"examples/boleta/index.html"},{"revision":"734ab3acec960bb580fa503c7b8450c5","url":"examples/contingencia/index.html"},{"revision":"9e8d68b78b5965afd38a0c997b91919e","url":"examples/descuento-linea/index.html"},{"revision":"fa9a6e779f1c6c0816473671cc501263","url":"examples/detraccion/index.html"},{"revision":"9974159f4495d9ed2b722f7049e44dab","url":"examples/exonerada/index.html"},{"revision":"6ed18ecd7f1d5ada47133f5f32a5ee54","url":"examples/exportacion/index.html"},{"revision":"61e41a3b090e1bdf0e1ecd3c51ac0914","url":"examples/forma-pago/index.html"},{"revision":"bffb9f83eda702443911efa91d7a8cbf","url":"examples/gratuita/index.html"},{"revision":"3ae5c209b0881c07ab5e14c6ea2aff7c","url":"examples/icbper/index.html"},{"revision":"80059846e6389124ab0faf99c149a21a","url":"examples/mas/index.html"},{"revision":"68b6606cace3e7d33b7ceab60366cff7","url":"examples/percepcion/index.html"},{"revision":"85a7d1c710595f78e5ba8a4481c35dda","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"9498ec402b0778a749d83c5177690b26","url":"index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"613880b7ff1643845f6642a9557e9b22","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"ef9e98da3a44fe9cb608c43f875da293","url":"overrides/home.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"ead7daac9c1430b8ac03b533d6f157e5","url":"packages/report/index.html"},{"revision":"7213baa3053d613433dcd062338ae7ef","url":"packages/sign/index.html"},{"revision":"b261f469929b10a3c90627f1e4692854","url":"packages/ws/index.html"},{"revision":"a2941345155718a0fca566e54d5f4aee","url":"packages/xml-parser/index.html"},{"revision":"50a74994f9df3af5fc20989f5cb94ac7","url":"packages/xml/index.html"},{"revision":"f60d6db3c14a1f685476e532f1252215","url":"production/index.html"},{"revision":"d0b328882fe7f100092c8360b277a4da","url":"search/search_index.json"},{"revision":"d080ca53a41b8ce9049e3cc3c3c3b0c3","url":"sitemap.xml"},{"revision":"688ce8217e2e906a8a47fbd25b4ea943","url":"sitemap.xml.gz"},{"revision":"f3518331c5e1d1351fcd5018cf15e801","url":"starter/index.html"},{"revision":"265be6cef1b77ac4070388bfe1fb5703","url":"usage/index.html"}]);
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
