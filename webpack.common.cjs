const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin');

const outDir = path.resolve(__dirname, './dist/cdn');

module.exports = {
  name: 'root',
  entry: {
    button: path.resolve('./src/components/button/define.js'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg'],
    plugins: [new ResolveTypeScriptPlugin()],
  },
  module: {
    rules: [
      {
          test: /.ts$/,
          use: [
              {
                  loader: "ts-loader",
              },
          ],
      },
      {
          test: /\.(scss|css)$/,
          use: [
              {
                  loader: 'css-loader',
              },
              {
                  loader: 'sass-loader',
                  options: {
                      webpackImporter: false,
                      sassOptions: {
                          includePaths: ['node_modules'],
                      },
                  }
              },
          ],
      },
      {
          test: /\.svg$/,
          loader: "raw-loader",
          exclude: /node_modules/,
      },
      {
          test: /.mdx?$/,
          use: [
            'babel-loader',
            '@mdx-js/loader'
          ]
      }
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
