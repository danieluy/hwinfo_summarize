const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/js/main.js'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/build/'),
  }
}