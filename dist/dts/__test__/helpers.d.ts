import type { AnnotatedStoryFn, Args, ComponentAnnotations, StoryAnnotations, Renderer } from "@storybook/types";
import type { HtmlRenderer, StoryContext } from '@storybook/html';
import type { FASTElement, ViewTemplate } from "@microsoft/fast-element";
import type { Maybe } from "./global.js";
/**
 * Returns a formatted URL for a given Storybook fixture.
 *
 * @param id - the Storybook fixture ID
 * @param args - Story args
 * @returns - the local URL for the Storybook fixture iframe
 */
export declare function fixtureURL(id?: string, args?: Record<string, any>): string;
/**
 * A helper that returns a function to bind a Storybook story to a ViewTemplate.
 */
export declare type FASTFramework = {
    component: typeof FASTElement | HtmlRenderer['component'] | ViewTemplate<any, any>;
    storyResult: FASTElement | Element | DocumentFragment | HtmlRenderer['storyResult'];
    canvasElement: Renderer['canvasElement'] | HTMLCanvasElement;
    T?: any;
};
/**
 * Metadata to configure the stories for a component.
 */
export declare type Meta<TArgs = Args> = ComponentAnnotations<FASTFramework, Omit<TArgs, keyof FASTElement>>;
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
export declare type StoryArgs<TArgs = Args> = Partial<Omit<TArgs, keyof FASTElement>> & Args;
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
export declare function renderComponent<TArgs = Args>(template: ViewTemplate): (args: TArgs, context: StoryContext) => Element | DocumentFragment | null;
/** source: https://github.com/ni/nimble/blob/main/packages/nimble-components/src/utilities/tests/storybook.ts */
/**
 * Renders a ViewTemplate as elements in a DocumentFragment.
 * Bindings, such as event binding, will be active.
 */
export declare const renderViewTemplate: <TArgs>(viewTemplate: ViewTemplate<TArgs, any>, source: TArgs) => DocumentFragment;
/**
 *  Renders a FAST `html` template as a story.
 * ArgsStoryFn<TRenderer, TArgs>
 */
export declare const createStory: <TSource = StoryArgs<Args>>(viewTemplate: ViewTemplate<TSource, any>) => (source: TSource) => Element;
export declare function convertToMaybe<T extends unknown>(value: T): Maybe<T>;
