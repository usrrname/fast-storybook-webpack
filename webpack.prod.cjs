const {merge} = require('webpack-merge');
const config = require('./webpack.common.cjs');

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 100,
      cacheGroups: {
        /*
            Create a bundled vendor.js script that has all the vendors bundled. For components to be used from CDN, the first script should be vendor.js
        */
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  }
});
