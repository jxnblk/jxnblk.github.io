
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

var paths = [ '/' ]
var data = require('./src/data')

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.css/, loader: 'css-loader!cssnext-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', paths, data)
  ],

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }

}

