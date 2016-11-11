
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var postcssImport = require('postcss-import')
var customMedia = require('postcss-custom-media')
var customProperties = require('postcss-custom-properties')
var calc = require('postcss-calc')

var paths = [ '/' ]
var data = require('./src/data')

module.exports = {

  entry: {
    static: './src/index.js',
    color: './src/color.js'
  },

  output: {
    filename: '[name].js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css/,
        exclude: /colors\.css/,
        loaders: [
          'css',
          'postcss'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('static.js', paths, data)
  ],

  postcss: function() {
    return [
      postcssImport,
      customMedia,
      customProperties,
      calc
    ]
  }
}

