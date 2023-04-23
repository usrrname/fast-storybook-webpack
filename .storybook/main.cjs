const path = require('path');

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|mdx)"],
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
    ]
    return config;
  },
};