importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"cbf9a3cbbd39c2b9c14cd528ec87d3a5","url":"404.html"},{"revision":"370ef648333a78cf59e253f1322c6fdc","url":"assets/images/favicon.png"},{"revision":"b27bd5228f659bdd4af8c97734c79bb0","url":"assets/javascripts/bundle.7836ba4d.min.js"},{"revision":"5abba6edb5a7c6bb669a208bf784ca8b","url":"assets/javascripts/lunr/min/lunr.ar.min.js"},{"revision":"cb5c7deacc09fdef5ba23a484697a7c4","url":"assets/javascripts/lunr/min/lunr.da.min.js"},{"revision":"d8ad86c7d3f64f0a2f933a6af0d9bb90","url":"assets/javascripts/lunr/min/lunr.de.min.js"},{"revision":"c3dd5e22a4bbd93cea8db0a189c75507","url":"assets/javascripts/lunr/min/lunr.du.min.js"},{"revision":"e5353de9835f5a2ae223b9ca84042458","url":"assets/javascripts/lunr/min/lunr.es.min.js"},{"revision":"7e38b7aea539e5d70556e17c5eeeb27b","url":"assets/javascripts/lunr/min/lunr.fi.min.js"},{"revision":"fa552c71d8b6df7524f1faaa5ebc8501","url":"assets/javascripts/lunr/min/lunr.fr.min.js"},{"revision":"16ba822c6ba96ea3c46200b5a52e8e8f","url":"assets/javascripts/lunr/min/lunr.hu.min.js"},{"revision":"498452a1930fe4528d960aae4f716c7c","url":"assets/javascripts/lunr/min/lunr.it.min.js"},{"revision":"5623d7b1d52549da7ef6fcdff14b31f4","url":"assets/javascripts/lunr/min/lunr.ja.min.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/min/lunr.jp.min.js"},{"revision":"f58ed4a6a8909ca5e997d9c14bd564f6","url":"assets/javascripts/lunr/min/lunr.multi.min.js"},{"revision":"3461b858ef55ad5fa276854c535cbae3","url":"assets/javascripts/lunr/min/lunr.nl.min.js"},{"revision":"5bbc2f5e8186556dbc1782063cfc8ee1","url":"assets/javascripts/lunr/min/lunr.no.min.js"},{"revision":"0f5a525b2bf38d1ec11cb67356773622","url":"assets/javascripts/lunr/min/lunr.pt.min.js"},{"revision":"5b1587eb20faac2c53dd11ff84425df5","url":"assets/javascripts/lunr/min/lunr.ro.min.js"},{"revision":"b238b05d00dafa7ab40299c7b8f5f46b","url":"assets/javascripts/lunr/min/lunr.ru.min.js"},{"revision":"f58cd5cb3aceec05fa133d8e47ac8b66","url":"assets/javascripts/lunr/min/lunr.stemmer.support.min.js"},{"revision":"2c22035941f0d81181afb599dc66bf4d","url":"assets/javascripts/lunr/min/lunr.sv.min.js"},{"revision":"c64da4ee31851fbae9eecb6d3c328930","url":"assets/javascripts/lunr/min/lunr.tr.min.js"},{"revision":"6f44534ba60b0ee9efab689d05e9093d","url":"assets/javascripts/lunr/min/lunr.vi.min.js"},{"revision":"3b5ae300533c0d4efc89b48d08d7acf0","url":"assets/javascripts/lunr/tinyseg.min.js"},{"revision":"a555f8410a2e1539a8f3371ccedf9548","url":"assets/javascripts/vendor.fd16492e.min.js"},{"revision":"21c449db7971da1b4b368c60c23135b2","url":"assets/javascripts/worker/search.4ac00218.min.js"},{"revision":"bc1e2fca175fc3fa0785d7c67e61ca90","url":"assets/stylesheets/main.6910b76c.min.css"},{"revision":"463a81ab01e8499b52de9e019ecf107f","url":"assets/stylesheets/palette.196e0c26.min.css"},{"revision":"c1de4129b37aea8df280097eb84429b6","url":"css/codehilite.css"},{"revision":"e57b9bf3752eb3a24087885b74773aee","url":"css/dark_theme.css"},{"revision":"8e9f2483940cf1e64a09c6b58a176a1d","url":"examples/anticipo/index.html"},{"revision":"78c8e379bae41f2501edb9342a08990c","url":"examples/boleta/index.html"},{"revision":"5d100c0d37e382354fff74c66726a065","url":"examples/contingencia/index.html"},{"revision":"e991dab13ce90aa69e41781ad93492cd","url":"examples/descuento-linea/index.html"},{"revision":"ea42824fb21f9188ef19b68b299caeae","url":"examples/detraccion/index.html"},{"revision":"e57eabe354ab01c37eb6ba385a564be2","url":"examples/exonerada/index.html"},{"revision":"63b5398ce068f374981168c57c3fe5ed","url":"examples/exportacion/index.html"},{"revision":"b68c1866ac0631545a68a10390534748","url":"examples/factura/index.html"},{"revision":"7047f35433a02426a14d7e93a2f9fa9b","url":"examples/gratuita/index.html"},{"revision":"d57ee035beba9494e3cc45b64a1c6f5c","url":"examples/icbper/index.html"},{"revision":"2f9660b175304c31ca3835554a946581","url":"examples/mas/index.html"},{"revision":"912428ebd0cddcb5ce51e90591d3ef61","url":"examples/percepcion/index.html"},{"revision":"b4ecf2746b5627d60d1225050e7e8343","url":"faq/index.html"},{"revision":"f1cc3c9f952f25c124be6bef9e1e74f5","url":"img/android-chrome-192x192.png"},{"revision":"7b5571187ec5239813d3bbf6735e2586","url":"img/android-chrome-512x512.png"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/favicon.ico"},{"revision":"1aa32e82296f50040dd0b5b999ae0247","url":"img/greenter_badge.svg"},{"revision":"b288304ce62e9aa07fb6e82a6dace0f9","url":"img/greenter-cover.png"},{"revision":"e97a3bc8509842dcfa87a465177ba2bd","url":"img/greenter-factura-pdf.png"},{"revision":"8871ed94a0e65bee8d251bf75ab9f367","url":"img/greenter-icon-white.svg"},{"revision":"7e45f7157c118aae64c94f037e4c1f0d","url":"img/greenter.ico"},{"revision":"380bd05600536fb4039f8df369ec633d","url":"img/illustration.svg"},{"revision":"50a2cec561727867e49256f002af6a42","url":"img/logo.svg"},{"revision":"1aee0a9add87117b906ddb6a54c2002e","url":"img/not-found.png"},{"revision":"ff70d70bec4663ca1c51bbee4348ed5e","url":"index.html"},{"revision":"e84ae6eb5c5718d2627698e6d4110fb8","url":"js/app.js"},{"revision":"1e49be99a14c62f8a79c76f8651349a6","url":"migrate2.1/index.html"},{"revision":"31d4e343a1142f6b341304ef8ff8e863","url":"overrides/404.html"},{"revision":"5c78aa31031bf38f73fec7dd40c99d54","url":"overrides/home.html"},{"revision":"7fa8eac3b445b477749767043bb6c545","url":"overrides/main.html"},{"revision":"a87d46a09eb942f985c23d6fa635284e","url":"overrides/partials/source.html"},{"revision":"56fc92446330406ce24c1a998d341e9a","url":"packages/report/index.html"},{"revision":"1bc48b7092a5fbde6cb6cd51b187d119","url":"packages/sign/index.html"},{"revision":"2e6c4c8b79a8da2bb411cc1182c0647a","url":"packages/ws/index.html"},{"revision":"f73fcbecb68a5e77c362672d674e3982","url":"packages/xml-parser/index.html"},{"revision":"09e2b7b142886a85befb2d08cef611ec","url":"packages/xml/index.html"},{"revision":"eb5a5a90e59d8a509d38edce5829a473","url":"production/index.html"},{"revision":"655742343ce0907c85bfd0189e211479","url":"search/search_index.json"},{"revision":"676eb3f0406813a359a7fd64e48f2f90","url":"sitemap.xml"},{"revision":"da08c40856bc4b903489d037d674e08f","url":"sitemap.xml.gz"},{"revision":"a4a52dc9f3b1c68570ec22c33df69afd","url":"starter/index.html"},{"revision":"751994c14cd8995f2ff5df61827b3c14","url":"usage/index.html"}]);
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
