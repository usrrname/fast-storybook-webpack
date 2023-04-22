const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin');

const outDir = path.resolve(__dirname, './dist/cdn');

module.exports = {
  name: 'root',
  entry: {
    tooltip: path.resolve('./src/components/tooltip/define.js'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg'],
    plugins: [new ResolveTypeScriptPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: outDir,
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
