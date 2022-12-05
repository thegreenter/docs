importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"1a7d31fe6944ffb3ab7d58dbcf48d5ed","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"7945aa02f26f4be176506fd5a5311a57","url":"assets/javascripts/bundle.5a2dcb6a.min.js"},{"revision":"36215a265e6c79ebaee01cbf90f33cae","url":"assets/javascripts/extra/bundle.5f09fbc3.min.js"},{"revision":"1a64840641c8d52b800388a538b4ca35","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"a430c16e970a82bdcc4dce1d1e9cba3b","url":"assets/javascripts/lunr/min/lunr.ko.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"cdcbc4445530bf338f7410008621c5a3","url":"assets/javascripts/lunr/min/lunr.ta.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"85c8ec027bda60d283e7f02bc5737626","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"8b3fd2734cab51a6222afc5436da4c5d","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"ae16700bd8f86d454aa310c227f7feee","url":"assets/javascripts/workers/search.16e2a7d4.min.js"},{"revision":"f978e7de044e16522dc239f715bafa21","url":"assets/stylesheets/extra.0d2c79a8.min.css"},{"revision":"fef6895a7a7241e73560afcf7f3befbe","url":"assets/stylesheets/main.975780f9.min.css"},{"revision":"9c456986be06a36677d3f171ae0359ea","url":"assets/stylesheets/palette.2505c338.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"013895b3e896d1cb6360b04d2062b242","url":"examples/anticipo/index.html"},{"revision":"f2a4df88922bb1db2c8d1b5d38f03e4c","url":"examples/boleta/index.html"},{"revision":"47c4e820e4e0d8c9996a59be15049387","url":"examples/contingencia/index.html"},{"revision":"1230ae7c728383398bb0307adb1e5c97","url":"examples/descuento-linea/index.html"},{"revision":"c4bf7ef214a81618fa793d09a7a5b42a","url":"examples/detraccion/index.html"},{"revision":"32a8110ffb31fab1fe1c75efda5a76ed","url":"examples/exonerada/index.html"},{"revision":"541d0ad6269ccb3e504c9a6f645c394f","url":"examples/exportacion/index.html"},{"revision":"a688b54970cf9233a1e8fa92d094c136","url":"examples/forma-pago/index.html"},{"revision":"c0573e2f6cd405e38358ed8c22f8b312","url":"examples/gratuita/index.html"},{"revision":"c5a4648f85ff267bdaa4691f11f640a2","url":"examples/icbper/index.html"},{"revision":"2a8c6bf031611e0ea5005b23f3bccf8e","url":"examples/mas/index.html"},{"revision":"811dfdd4023f42c1d869f6a75be57a83","url":"examples/percepcion/index.html"},{"revision":"d7e27489c9861c34aa4a76f054971f86","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"04ccca953876e60ed24ff659f3702117","url":"index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"fd99775aabda4c8fe104e284004e7729","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"8cde4df163a52967e343874d05ef7d95","url":"overrides/home.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"731b6ded26b920910da9f91a0c6b14c1","url":"packages/report/index.html"},{"revision":"4b2c1b9dad07c31d77fd1ccfe9d104f1","url":"packages/sign/index.html"},{"revision":"c300c87a9ab0e3f698a32103502accc5","url":"packages/ws/index.html"},{"revision":"0fa94ab7ba49d72c4ba9521dd0d875a3","url":"packages/xml-parser/index.html"},{"revision":"e06635298e85e622660f2e71ef727708","url":"packages/xml/index.html"},{"revision":"131b5dc48bb5236c382249bd4a763ecb","url":"production/index.html"},{"revision":"1385d6d3df7910e27283f79b79143e8c","url":"search/search_index.json"},{"revision":"e4f2c4bebd145ec0a8381625323e9913","url":"sitemap.xml"},{"revision":"1688fa4aac70a9d58c086e18c7a479d5","url":"sitemap.xml.gz"},{"revision":"f133fdf3f782d4c97f13ff6cb29e24da","url":"starter/index.html"},{"revision":"9cb6f613d749e97979ab22a608838f15","url":"usage/index.html"}]);
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
