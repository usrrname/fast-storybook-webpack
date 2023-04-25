/** @type { import('@storybook/html-webpack5').Preview } */
import { configureActions } from '@storybook/addon-actions';
import { useArgs } from "@storybook/client-api";
export const withArgs = (Story, context) => {
    const [args, updateArgs] = useArgs();
    return Story({
        id: context.id,
        component: context.component,
        args: args,
    });
};
export const decorators = [
    withArgs
];
const preview = {
    parameters: {
        viewMode: 'docs',
        showToolbar: true,
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
configureActions({
    depth: 1
});
export default preview;
//# sourceMappingURL=preview.js.map