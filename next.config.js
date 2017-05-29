exports.exportPathMap = () => ({
  '/': { page: '/' },
  '/add': { page: '/add' },
  '/edit': { page: '/edit' }
})

if (!process.env.NEXT_DEV) {
  exports.assetPrefix = '/todolist'
}
