const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

let config = {
  entry: './page/assets/scripts/App.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader?url=false',{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
      }
    ]
  }
}

if (currentTask == 'dev') {
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'page')
  },
  config.devServer = {
    before: function(app, server) {
      server._watch('./page/**/*.html')
    },
    contentBase: path.join(__dirname, 'page'),
    hot: true,
    port: 8080,
    host: '0.0.0.0'
  }
  config.mode = 'development'
}

if (currentTask == 'build') {
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
  config.mode = 'production'
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true,
          chunks: "all"
        }
      }
    }
  }
  config.plugins = [new CleanWebpackPlugin()]
}

module.exports = config
