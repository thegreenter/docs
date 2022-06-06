importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"2c9c967b739e99ed37530db5b4168baf","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"499f04f37e6aa43be7e864313ee9ba1b","url":"assets/javascripts/bundle.7f366e99.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"987fe4e02a319b28840a259930c38e2d","url":"assets/javascripts/lunr/min/lunr.hi.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"74bd1a28d804d58de3ab6ffb536e7f0a","url":"assets/javascripts/lunr/min/lunr.th.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"ab916ff325d03857de3249bf547a8eac","url":"assets/javascripts/lunr/min/lunr.zh.min.js"},{"revision":"982caada2fd97756b05b2cd1b8bf5f8a","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"8b3fd2734cab51a6222afc5436da4c5d","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"ba15be9d99c7bbea98805ed5e0ab1e4c","url":"assets/javascripts/workers/search.b028fd86.min.js"},{"revision":"a0b7d31fd895797fba5c0a64f868dce9","url":"assets/stylesheets/main.5d38496d.min.css"},{"revision":"947aadee90c7e70d275f430450248ac9","url":"assets/stylesheets/palette.cbb835fc.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"5c36487439898875f970b7ef8d9d199d","url":"examples/anticipo/index.html"},{"revision":"02fd946633205e983e019badebb01417","url":"examples/boleta/index.html"},{"revision":"d68c423f3047fb550f0d58d199a55a69","url":"examples/contingencia/index.html"},{"revision":"f567d487a56ca94cdf8418a13e384b69","url":"examples/descuento-linea/index.html"},{"revision":"b404703997de5d4b66ecc86a7ff3a8b9","url":"examples/detraccion/index.html"},{"revision":"7684051fc07660288aaa7bccd7ccd1be","url":"examples/exonerada/index.html"},{"revision":"e9d79d6f9f03b1ec2478710b63fe25dc","url":"examples/exportacion/index.html"},{"revision":"cc7a9aaed28501195991e5450fd2d2a9","url":"examples/forma-pago/index.html"},{"revision":"2c054d4ca6abee40d5da913bcab87ea4","url":"examples/gratuita/index.html"},{"revision":"5b62e10549abbdc78c2a8559d9dd41ae","url":"examples/icbper/index.html"},{"revision":"7e24fea17f079698ec51edf9e13e756a","url":"examples/mas/index.html"},{"revision":"8a72a906bf1be6f5d9761a55a250875e","url":"examples/percepcion/index.html"},{"revision":"6a742ceb5243e1951c853bed450764d7","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"8e78a60c824904beb879e8f1c709ea5e","url":"index.html"},{"revision":"3d8105953a08b874f8734626fd0104c0","url":"js/app.js"},{"revision":"c4d6c8b605adc1c01b5db1f9c74180a5","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"cad2d3d9870a5a4a0b19c6d78c7c8921","url":"overrides/home.html"},{"revision":"52eccf12eae401df6f40b3c42f33f1f9","url":"overrides/main.html"},{"revision":"01026f05871de4b2991eb62084ff5d46","url":"overrides/partials/source.html"},{"revision":"3ce3b293a0718f16da4ae8cbd1f7ae16","url":"packages/report/index.html"},{"revision":"6dff243137d983ad2d332f81277f6098","url":"packages/sign/index.html"},{"revision":"eac664467b65fdcb6e222d074f5119f8","url":"packages/ws/index.html"},{"revision":"004259ff50f9f0cf5e62ae8fda84f6c6","url":"packages/xml-parser/index.html"},{"revision":"a88a05a81b0d487fe704b7798188ef21","url":"packages/xml/index.html"},{"revision":"90a49b8e40cedbf8dc5bfe767f448d07","url":"production/index.html"},{"revision":"1385d6d3df7910e27283f79b79143e8c","url":"search/search_index.json"},{"revision":"b3486f9957d796e0d4593cad59657d41","url":"sitemap.xml"},{"revision":"9faeabb927643538a1fe432b370c30cd","url":"sitemap.xml.gz"},{"revision":"b6d31eb2dea927c001d5b961db527611","url":"starter/index.html"},{"revision":"28b24ebbcc4bded784272915a9cb2b1d","url":"usage/index.html"}]);
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
