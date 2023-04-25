import qs from "qs";
/**
 * Returns a formatted URL for a given Storybook fixture.
 *
 * @param id - the Storybook fixture ID
 * @param args - Story args
 * @returns - the local URL for the Storybook fixture iframe
 */
export function fixtureURL(id = "debug--blank", args) {
    const params = { id };
    if (args) {
        params.args = qs
            .stringify(args, {
            allowDots: true,
            delimiter: ";",
            format: "RFC1738",
            encode: false,
        })
            .replace(/=/g, ":")
            .replace(/\//g, "--");
    }
    const url = qs.stringify(params, {
        addQueryPrefix: true,
        format: "RFC1738",
        encode: false,
    });
    return url;
}
/**
 * A helper that returns a function to bind a Storybook story to a ViewTemplate.
 *
 * @param template - The ViewTemplate to render
 * @returns - a function to bind a Storybook story
 *  (args: TArgs, context: Addon_StoryContext) => StoryFnReturnType;
 */
export function renderComponent(template) {
    return function (args, { updateArgs }) {
        const storyFragment = new DocumentFragment();
        template.render({ ...args, updateArgs }, storyFragment);
        if (storyFragment.childElementCount === 1) {
            return storyFragment.firstElementChild;
        }
        return storyFragment;
    };
}
/** source: https://github.com/ni/nimble/blob/main/packages/nimble-components/src/utilities/tests/storybook.ts */
/**
 * Renders a ViewTemplate as elements in a DocumentFragment.
 * Bindings, such as event binding, will be active.
 */
export const renderViewTemplate = (viewTemplate, source) => {
    const template = document.createElement('template');
    const fragment = template.content;
    viewTemplate.render(source, fragment);
    return fragment;
};
/**
 *  Renders a FAST `html` template as a story.
 * ArgsStoryFn<TRenderer, TArgs>
 */
export const createStory = (viewTemplate) => {
    return (source) => {
        const fragment = renderViewTemplate(viewTemplate, source);
        const content = fragment.firstElementChild;
        return content;
    };
};
export function convertToMaybe(value) {
    return value ?? undefined;
}
//# sourceMappingURL=helpers.js.map