# fast-storybook-webpack

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/fast-storybook-webpack)

A reproduction of attempts to upgrade FAST foundation's project setup of `@storybook/html` from 6.5.9 to 7.0 using the framework-flavor `@storybook/html-webpack5`

Related OSS issues:

- https://github.com/microsoft/fast/issues/6698
- https://github.com/storybookjs/storybook/issues/22219

The `package.json` and webpack file configs mirror the existing setup I have at TR.

## Scripts

`npm run sb` to start storybook
`npm run build:sb` to build storybook
`npm run dev` to locally bundle esm/cjs components
`npm run build` to build esm/cjs components bundles
