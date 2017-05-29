const express = require('express')
const app = express()
const port = +process.env.PORT || 3002
const outDir = require('path').join(__dirname, 'out')
if (!require('fs').existsSync(outDir)) {
  console.error('Error: "out" folder not found.')
  console.error('Please run "yarn run build" before running this script.')
  console.error()
  process.exit(1)
}
app.use(require('compression')())
app.use('/todolist', express.static(outDir))
app.get('/', function (req, res) {
  res.redirect('/todolist/')
})
app.listen(port, function () {
  console.log('Now listening on port: ' + this.address().port)
})
