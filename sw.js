importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"9f46acc035a53b69e4279b1b2131e6ea","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"f42445e9523ea42c330bbe55a9315f09","url":"assets/javascripts/bundle.d6c3db9e.min.js"},{"revision":"1a64840641c8d52b800388a538b4ca35","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"a430c16e970a82bdcc4dce1d1e9cba3b","url":"assets/javascripts/lunr/min/lunr.ko.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"cdcbc4445530bf338f7410008621c5a3","url":"assets/javascripts/lunr/min/lunr.ta.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"85c8ec027bda60d283e7f02bc5737626","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"8b3fd2734cab51a6222afc5436da4c5d","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"ae16700bd8f86d454aa310c227f7feee","url":"assets/javascripts/workers/search.16e2a7d4.min.js"},{"revision":"5e2d7fbc7e3ed01b63acce099c8337ab","url":"assets/stylesheets/main.20d9efc8.min.css"},{"revision":"466d4794bf69aaf69a0da593cde3bcfb","url":"assets/stylesheets/palette.815d1a91.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"8e5160772ec94d77615c94af22bb3815","url":"examples/anticipo/index.html"},{"revision":"679bd9bd9d1c17e029badb3ade07322a","url":"examples/boleta/index.html"},{"revision":"5d9ae9b96b4accefb4f49a666643d68f","url":"examples/contingencia/index.html"},{"revision":"4e4b6408465e0058c97a542c80485b33","url":"examples/descuento-linea/index.html"},{"revision":"2094135e4adf596f0d2ca80d3850270a","url":"examples/detraccion/index.html"},{"revision":"35bd9d92e4e871e9bbefff5a70a97110","url":"examples/exonerada/index.html"},{"revision":"524e66913d3ef822dc651f93d1f8d1f0","url":"examples/exportacion/index.html"},{"revision":"b34aa3c0d079e0f19ee255e62bc6ebb7","url":"examples/forma-pago/index.html"},{"revision":"855c32a72f49b1b774b460bbe0b9b63f","url":"examples/gratuita/index.html"},{"revision":"bc4edc11ee3c2c75f19d873fd93897b1","url":"examples/icbper/index.html"},{"revision":"8ef4e40557470d141a96dd12210778ca","url":"examples/mas/index.html"},{"revision":"14652ac74e61d2c0969d207d0e2c9d63","url":"examples/percepcion/index.html"},{"revision":"ade26df56fed61b4349269342a25f3e9","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"a8a4db73a19355de554f49e216c52f1a","url":"index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"b0bdef375f3a42be9de64e60f12452f0","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"8cde4df163a52967e343874d05ef7d95","url":"overrides/home.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"5d3fcf4523eee2d815897c594a7c52b6","url":"packages/report/index.html"},{"revision":"4953f44c882256ccbc322e861b7c3e46","url":"packages/sign/index.html"},{"revision":"6a52ce5e7add77dc5ac3d17d7a333f51","url":"packages/ws/index.html"},{"revision":"abc2596fb50f3787ee3d42f6ab751db3","url":"packages/xml-parser/index.html"},{"revision":"cffacfcbf6c705dc462671de0f6295c7","url":"packages/xml/index.html"},{"revision":"4bb81ae1a5dd1893cb2175b1b1600e16","url":"production/index.html"},{"revision":"1385d6d3df7910e27283f79b79143e8c","url":"search/search_index.json"},{"revision":"7efd5d230bbe800f906d52bce19d02cc","url":"sitemap.xml"},{"revision":"0842179954766426a0ac81d763140a0e","url":"sitemap.xml.gz"},{"revision":"6dde7b40dcd0c01b40d303be30056fef","url":"starter/index.html"},{"revision":"39dd14acc9f245b0ddf5c2dc5f0e41cb","url":"usage/index.html"}]);
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
