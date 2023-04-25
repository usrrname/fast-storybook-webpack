const { merge } = require('webpack-merge');
const Common = require('./webpack.common.cjs')

module.exports = merge(Common, {
  mode: 'development',
  devServer: {
    open: true,
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].js',
  },
});
