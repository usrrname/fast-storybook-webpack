const path = require('path');
/** @type { import('resolve-typescript-plugin') } */
const ResolveTypescriptPlugin = require('resolve-typescript-plugin');

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
module.exports = {
  logLevel: 'debug',
  stories: ["../src/**/*.stories.@(js|ts|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
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
      fsCache: true,
      lazyCompilation: true },
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
        test: /\.ts$/,
        loader: "ts-loader",
        sideEffects: true,
        options: {
            configFile: path.resolve("./tsconfig.json"),
            transpileOnly: true,
        },
    },
    {
      test: /\.m?js$/,
      enforce: "pre",
      loader: require.resolve("source-map-loader"),
      resolve: {
          fullySpecified: false,
      },
    },
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