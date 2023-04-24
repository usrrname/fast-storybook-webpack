
import { StorybookConfig } from '@storybook/html-webpack5';

const config: StorybookConfig = {
  logLevel: 'debug',
  docs: {
    autodocs: true,
    defaultName: 'Overview',
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      builder: { lazyCompilation: true },
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    '@storybook/addon-a11y',
    "@storybook/addon-actions",
    '@storybook/addon-backgrounds',
    '@storybook/addon-interactions',
    '@storybook/addon-highlight'
  ],
  stories: ["../src/**/*.stories.@(ts|js|jsx|mdx)", '../src/**/*.doc.mdx'],
  core: {
    disableTelemetry: true,
  },
  babel: (config) => {
    return { ...config };
  },
  webpackFinal: async (config: any) => {
    config.module.rules = [
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
        use: [
          'babel-loader',
          '@mdx-js/loader'
        ]
      }
    ];

    return config;
  },
};
export default config;