const path = require('path');
/** @type { import('resolve-typescript-plugin') } */
const ResolveTypescriptPlugin = require('resolve-typescript-plugin');

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
module.exports = {
  module: {
    parser: {
      javascript: {
        commonjsMagicComments: true,
      },
    },
  },
  logLevel: 'debug',
  stories: ['../src/**/*.stories.@(js|jsx|ts)', '../src/**/*.mdx'],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-highlight'
  ],
  features: {
    babelModeV7: true,
    previewMdx2: true,
  },
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: { 
      lazyCompilation: true 
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async config => {
    config.performance = {
      ...(config.performance ?? {}),
      hints: false,
    };
    config.module.rules = [
      {
          test: /.storybook\/preview.js/,
          resolve: { fullySpecified: false },
        },
      {
          test: /\.ts$/,
          loader: "ts-loader",
          sideEffects: true,
          options: {
              configFile: path.resolve("./tsconfig.json"),
              transpileOnly: true,
          },
      },
      {
          test: /\.html$/,
          use: "html-loader",
      },

      {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: [/node_modules/],
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
          test: /\.mdx?$/,
          /** @type {import('@mdx-js/loader').Options} */
          use: [
              'babel-loader',
              '@mdx-js/loader'
            ]
      },
      {
        test: /\.m?js$/,
        type: 'javascript/auto', 
        loader: require.resolve("source-map-loader"),
        resolve: {
            fullySpecified: false,
        },
      }
    ]
    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new ResolveTypescriptPlugin({
          includeNodeModules: true,
      }),
    ];

    return config;
  },
};