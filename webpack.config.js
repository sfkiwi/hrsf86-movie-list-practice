var path = require('path');
var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [ new webpack.ProvidePlugin({
    $ : "jquery",
    Backbone : "backbone",
    _ : "underscore"
  })],
  module : {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html?/,
        include: SRC_DIR,
        loader: 'html-loader'
      }
    ]
  },
};