const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', function() {
      fse.copySync('./containcovid/images','./dist/images');
      fse.copySync('./containcovid/languageFiles','./dist/languageFiles');
      fse.copySync('./containcovid/templates','./dist/templates');
    })
  }
}

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false',{loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
}

let pages = fse.readdirSync('./containcovid').filter(function(file) {
  return file.endsWith('.html')
}).map(function(page) {
  return new HtmlWebpackPlugin({
    filename: page,
    template: `./containcovid/${page}`
  })
})

let config = {
  entry: './containcovid/assets/scripts/App.js',
  plugins: pages,
  module: {
    rules: [
      cssConfig
    ]
  }
}

if (currentTask == 'dev') {
  cssConfig.use.unshift('style-loader')
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'containcovid')
  },
  config.devServer = {
    before: function(app, server) {
      server._watch('./containcovid/**/*.html')
    },
    contentBase: path.join(__dirname, 'containcovid'),
    hot: true,
    port: 8081,
    host: '0.0.0.0'
  }
  config.mode = 'development'
}

if (currentTask == 'build') {
  cssConfig.use.unshift(MiniCssExtractPlugin.loader)
  postCSSPlugins.push(require('cssnano'))
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
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
    new RunAfterCompile(),
  )
}

module.exports = config
