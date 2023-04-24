import { FASTElement, ViewTemplate } from "@microsoft/fast-element";
import type { AnnotatedStoryFn, Args, ComponentAnnotations, StoryAnnotations, Renderer } from "@storybook/types";
import type { HtmlRenderer, StoryObj as SbStoryObj } from '@storybook/html';
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
    component: typeof FASTElement | HtmlRenderer['component'];
    storyResult: FASTElement | Element | DocumentFragment | HtmlRenderer['storyResult'];
    canvasElement: Renderer['canvasElement'] | HTMLCanvasElement;
};
/**
 * Metadata to configure the stories for a component.
 */
export declare type Meta<TArgs = Args> = ComponentAnnotations<FASTFramework, Omit<TArgs, keyof FASTElement>>;
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
export declare type StoryArgs<TArgs = Args> = Partial<Omit<TArgs, keyof FASTElement>>;
/**
 * Renders a ViewTemplate as elements in a DocumentFragment.
 * Bindings, such as event binding, will be active.
 */
export declare const renderViewTemplate: <TSource>(viewTemplate: ViewTemplate<TSource, any>, source: TSource) => DocumentFragment;
/**
 *  Renders a FAST `html` template as a story.
 */
export declare const createStory: <TSource>(viewTemplate: ViewTemplate<TSource, any>) => (source: TSource) => Element;
