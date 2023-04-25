# fast-storybook-webpack

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/fast-storybook-webpack)

Attempted migration of `@storybook/html` to storybook 7.0 with the following FAST packages:

This reproduction uses:
- webpack 5
- Typescript 4.8
- `@storybook/html5-webpack`
- `@microsoft/fast-element@2.0.0-beta.23`
- `@microsoft/fast-foundation@3.0.0-alpha.27`
- `@microsoft/fast-react-wrapper@1.0.0-alpha.7`


`npm run dev` to locally bundle esm/cjs components

`npm run build` to build esm/cjs components bundles

`npm run start` to see component loaded in static page

`npm run start:sb` to start storybook

`npm run build:sb` to build storybook

----------


## Related OSS issues:
- https://github.com/storybookjs/storybook/issues/22219
- https://github.com/microsoft/fast/issues/6698