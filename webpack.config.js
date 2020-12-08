const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: './page/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'page')
  },
  devServer : {
    before: function(app, server) {
      server._watch('./page/**/*.html')
    },
    contentBase: path.join(__dirname, 'page'),
    hot: true,
    port: 8080,
    host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader?url=false',{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
      }
    ]
  }
}
