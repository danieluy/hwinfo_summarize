const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/js/app.js'),
    info: path.join(__dirname, '/src/js/info.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build/'),
  }
}