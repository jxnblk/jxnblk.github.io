
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

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css/,
        exclude: /colors\.css/,
        loaders: ['css-loader', 'cssnext-loader']
      },
      { test: /\.json$/, loaders: [ 'json' ] }
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

