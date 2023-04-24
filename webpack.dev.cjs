const { merge } = require('webpack-merge');
const config = require('./webpack.common.cjs');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].js',
  },
});
