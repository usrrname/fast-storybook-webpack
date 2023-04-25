import type {
  AnnotatedStoryFn,
  Args,
  ComponentAnnotations,
  StoryAnnotations,
  Renderer
} from "@storybook/types";
import qs from "qs";
import type { HtmlRenderer, StoryContext } from '@storybook/html'
import type { FASTElement, ViewTemplate } from "@microsoft/fast-element";
import type { Maybe } from "./global.js";
/**
 * Returns a formatted URL for a given Storybook fixture.
 *
 * @param id - the Storybook fixture ID
 * @param args - Story args
 * @returns - the local URL for the Storybook fixture iframe
 */
export function fixtureURL(
  id: string = "debug--blank",
  args?: Record<string, any>
): string {
  const params: Record<string, any> = { id };
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
 */
export type FASTFramework = {
  component: typeof FASTElement | HtmlRenderer['component'] | ViewTemplate<any, any>;
  storyResult: FASTElement | Element | DocumentFragment | HtmlRenderer['storyResult'];
  canvasElement: Renderer['canvasElement'] | HTMLCanvasElement;
  T?: any;
};

/**
 * Metadata to configure the stories for a component.
 */
export type Meta<TArgs = Args> = ComponentAnnotations<
  FASTFramework,
  Omit<TArgs, keyof FASTElement>
>

/**
 * Story function that represents a CSFv3 component example.
 */
export declare type StoryObj<TArgs = Args> = StoryAnnotations<FASTFramework, TArgs>;

/**
 * Story function that represents a CSFv2 component example.
 */
export declare type StoryFn<TArgs = Args> = AnnotatedStoryFn<FASTFramework, TArgs>;

/**
 * Combined Storybook story args.
 */
export type StoryArgs<TArgs = Args> = Partial<Omit<TArgs, keyof FASTElement>> & Args;
/**
 * Story function that represents a CSFv2 component example.
 *
 * NOTE that in Storybook 7.0, this type will be renamed to `StoryFn` and replaced by the current `StoryObj` type.
 */
export declare type Story<TArgs = Args> = StoryFn<StoryArgs<TArgs>>;

/**
 * A helper that returns a function to bind a Storybook story to a ViewTemplate.
 *
 * @param template - The ViewTemplate to render
 * @returns - a function to bind a Storybook story
 *  (args: TArgs, context: Addon_StoryContext) => StoryFnReturnType;
 */
export function renderComponent<TArgs = Args>(
  template: ViewTemplate
): (args: TArgs, context: StoryContext) => Element | DocumentFragment | null {
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
export const renderViewTemplate = <TArgs>(
  viewTemplate: ViewTemplate<TArgs>,
  source: TArgs
): DocumentFragment => {
  const template = document.createElement('template');

  const fragment = template.content;
  viewTemplate.render(source, fragment);
  return fragment;
};

/**
 *  Renders a FAST `html` template as a story.
 * ArgsStoryFn<TRenderer, TArgs>
 */
export const createStory = <TSource = StoryArgs>(
  viewTemplate: ViewTemplate<TSource>
): ((source: TSource) => Element) => {
  return (source: TSource): Element => {
    const fragment = renderViewTemplate(viewTemplate, source);
    const content = fragment.firstElementChild!;
    return content;
  };
};

export function convertToMaybe<T extends unknown>(value: T): Maybe<T> {
  return value ?? undefined;
}