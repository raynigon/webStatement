const path = require('path')

module.exports = {
  entry: './page/assets/scripts/app.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'page')
  },
  mode: 'development',
  watch: true
}
