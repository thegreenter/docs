module.exports = {
  "globDirectory": "site/",
  "globPatterns": [
    "**/*.{html,css,ttf,woff,woff2,png,svg,js,ico,json,xml,gz}"
  ],
  // Las reglas SUNAT (~1 MB) se descargan solo al abrir su página, no se precargan.
  "globIgnores": ["sunat/reglas-validacion.json"],
  "swDest": "site/sw.js",
  "swSrc": "sw-src.js"
};