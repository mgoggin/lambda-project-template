'use strict';

const path = require('path');
const builtins = require('builtins');

module.exports = {
  mode: 'production',
  externals: builtins('8.10.0'),
  entry: {
    lambda: ['./src/index'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['env'],
        },
      },
    ],
  },
};
