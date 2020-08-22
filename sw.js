importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"6485b251963098eb7a84574a12ba5703","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"0f8ffe6fef665cbbc5b377905c1a6c66","url":"assets/javascripts/bundle.d5fec882.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"3b5ae300533c0d4efc89b48d08d7acf0","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"d218571e845446dd6ffb59d38957d83f","url":"assets/javascripts/vendor.d1f5a259.min.js"},{"revision":"edf300731231f38750fe1bfdc79bd74d","url":"assets/javascripts/worker/search.fae956e7.min.js"},{"revision":"5425c2027e7ad3dae844231aa718f8b8","url":"assets/stylesheets/main.b8ac9624.min.css"},{"revision":"4b82737ff7f0f3d0b6ce3dcb3dea4c7e","url":"assets/stylesheets/palette.28f3ef9a.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"547d1a857259a1a45a12ba4df655096f","url":"examples/anticipo/index.html"},{"revision":"e36241989eb88c16e294224a2ea563ea","url":"examples/boleta/index.html"},{"revision":"79736a97840deee98c075e9ae58306ec","url":"examples/contingencia/index.html"},{"revision":"20bd5d6431c240d312a2883987487b1a","url":"examples/descuento-linea/index.html"},{"revision":"81f73ed9a1884c3db81fa55935dd694e","url":"examples/detraccion/index.html"},{"revision":"19e7153a5b811a41952f1320ae7436a4","url":"examples/exonerada/index.html"},{"revision":"708a6f220de5d0cdd6e3a4485e03158e","url":"examples/exportacion/index.html"},{"revision":"c7aa642ff264bfd6d44ae3f9c5a40a5d","url":"examples/factura/index.html"},{"revision":"0f9bf49448b6279e8a6859acec960917","url":"examples/gratuita/index.html"},{"revision":"57166ba8d1b65e225ff30379df44ca15","url":"examples/icbper/index.html"},{"revision":"381901361a4816fe96dda2b417782b33","url":"examples/percepcion/index.html"},{"revision":"0b15ec0aae65b902faeb0f74837f3adf","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"51983f045b5259fcdff0d352779d1c28","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"791c3b73338cf3b0a1c89b309539de75","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"6d9d4bfee03695e62057f31aed2534a6","url":"overrides/home.html"},{"revision":"53e83952bf9401fcfa3e29066ac79c84","url":"overrides/main.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"1d1833a8d6023d95f13262a811c18c5c","url":"packages/report/index.html"},{"revision":"6e034a11b83ce66fb5f719fc1ba4b9ab","url":"packages/sign/index.html"},{"revision":"f2c94ade2e8fa39f6d54bae3ffebc70a","url":"packages/ws/index.html"},{"revision":"1155013f2d87aa3ba4bebaa5388a7240","url":"packages/xml/index.html"},{"revision":"11d6cf02c429e8402aa1d438dac3ff6f","url":"production/index.html"},{"revision":"1e6b55ef035266326ebaad2547f44907","url":"search/search_index.json"},{"revision":"128f223eccdeccb4301392d1c15b4491","url":"sitemap.xml"},{"revision":"d944c2d4b7f037312b25013b00bd7470","url":"sitemap.xml.gz"},{"revision":"3dd9431a8b53b13f5087b6db17ff20c3","url":"starter/index.html"},{"revision":"792a11972d7b218d4ab6a47ace4eaeec","url":"usage/index.html"}]);
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
