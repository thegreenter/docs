importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"d944db6c2ef51a73fa9db48b5e797add","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"138439fd8c9b6d83e6f984be1da3465b","url":"assets/javascripts/bundle.fb26dd1d.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"f040b47f846ca6b2bbea92b4bd9f2783","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"18c53245cccfef0d953d69dd05f6de39","url":"assets/javascripts/vendor.a0c4167b.min.js"},{"revision":"6de68fb48da133438af717166136403f","url":"assets/javascripts/worker/search.37585f48.min.js"},{"revision":"ac5d0fd8c0a632426667b4a68708c6b5","url":"assets/stylesheets/main.4b9ffd7b.min.css"},{"revision":"6d58e8b85572b990887a578ef3e10375","url":"assets/stylesheets/palette.b79bcd20.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"6113f81e00c2e75f7e8551116edfb03b","url":"examples/anticipo/index.html"},{"revision":"a94b0018cd81473442a0351b73bc3559","url":"examples/boleta/index.html"},{"revision":"fe847b9c1a0c53c6bde6bf854e4bfb23","url":"examples/contingencia/index.html"},{"revision":"3e58611a726586f03ec09ea917cdc10b","url":"examples/descuento-linea/index.html"},{"revision":"bc11cdd430a5de156a2da2d6fb6ea05b","url":"examples/detraccion/index.html"},{"revision":"c2202be6422d2b658bc3aa5a8ce292ad","url":"examples/exonerada/index.html"},{"revision":"56ae928d21e7d892079b4d0ee80b7174","url":"examples/exportacion/index.html"},{"revision":"5555c988e3c3d444bed84049abed6294","url":"examples/gratuita/index.html"},{"revision":"03bcfb522655a154e2bbfc59ddeecf14","url":"examples/icbper/index.html"},{"revision":"5f394a157d7406548bd7f1e810646f4c","url":"examples/percepcion/index.html"},{"revision":"31f4e970f9e28607b201a4a6c78bafe8","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"95994e1ac5cf60f11163855b7e30afdc","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"55285357e1abce5722386b09bf40aef0","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"af506a73fd53b6d2b661f1438f02b5cf","url":"overrides/home.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"182f65b5bc1a5066cd7fd19dbd5c6dcd","url":"production/index.html"},{"revision":"fb6a78069651fed5dfbddb06daa93ee4","url":"search/search_index.json"},{"revision":"f232ed78872ff663cd1e4d0feedb7c95","url":"sitemap.xml"},{"revision":"2a805f5cac0159cffba2e688e7e07cde","url":"sitemap.xml.gz"},{"revision":"cc11b3e55badee2a97bee8d187780310","url":"starter/index.html"}]);
workbox.googleAnalytics.initialize();

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
