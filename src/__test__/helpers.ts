import { html, FASTElement, ViewTemplate } from "@microsoft/fast-element";
import type {
  AnnotatedStoryFn,
  Args,
  ComponentAnnotations,
  StoryAnnotations,
  Renderer,
} from "@storybook/types";
import qs from "qs";
import type { HtmlRenderer, StoryObj as SbStoryObj } from '@storybook/html'
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
  component: typeof FASTElement | HtmlRenderer['component'];
  storyResult: FASTElement | Element | DocumentFragment | HtmlRenderer['storyResult'];
  canvasElement: Renderer['canvasElement'] | HTMLCanvasElement;
};

/**
 * Metadata to configure the stories for a component.
 */
export type Meta<TArgs = Args> = ComponentAnnotations<
  FASTFramework,
  Omit<TArgs, keyof FASTElement>
>;

/**
 * Story function that represents a CSFv3 component example.
 */
export declare type StoryObj<TArgs = Args> = StoryAnnotations<FASTFramework, TArgs> & SbStoryObj;

/**
 * Story function that represents a CSFv2 component example.
 */
export declare type StoryFn<TArgs = Args> = AnnotatedStoryFn<FASTFramework, TArgs>;

/**
 * Story function that represents a CSFv2 component example.
 *
 * NOTE that in Storybook 7.0, this type will be renamed to `StoryFn` and replaced by the current `StoryObj` type.
 */
export declare type Story<TArgs = Args> = StoryObj<TArgs>;

/**
 * Combined Storybook story args.
 */
export type StoryArgs<TArgs = Args> = Partial<Omit<TArgs, keyof FASTElement>>;

// source: https://github.com/ni/nimble/blob/main/packages/nimble-components/src/utilities/tests/storybook.ts

/**
 * Renders a ViewTemplate as elements in a DocumentFragment.
 * Bindings, such as event binding, will be active.
 */
export const renderViewTemplate = <TSource>(
  viewTemplate: ViewTemplate<TSource>,
  source: TSource
): DocumentFragment => {
  const template = document.createElement('template');
  const fragment = template.content;
  viewTemplate.render(source, fragment);
  return fragment;
};

/**
 *  Renders a FAST `html` template as a story.
 */
export const createStory = <TSource>(
  viewTemplate: ViewTemplate<TSource>
): ((source: TSource) => Element) => {
  return (source: TSource): Element => {
    const wrappedViewTemplate = html<TSource>`
            <div class="code-hide-top-container">${viewTemplate}</div>
        `;
    const fragment = renderViewTemplate(wrappedViewTemplate, source);
    const content = fragment.firstElementChild!;
    return content;
  };
};