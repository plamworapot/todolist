module.exports = {
  staticFileGlobs: [
    'out/static/**/*',
    'out/_next/**/*'
  ],
  stripPrefix: 'out/',
  replacePrefix: '/todolist/',
  verbose: true,
  importScripts: [
    'static/service-worker-precache-index.js'
  ],
  runtimeCaching: [{
    urlPattern: /(.*)/,
    handler: 'fastest'
  }]
}
