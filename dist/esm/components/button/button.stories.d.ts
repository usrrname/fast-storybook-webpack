/// <reference types="@storybook/types" />
import { ViewTemplate } from "@microsoft/fast-element";
import type { Meta } from "@storybook/html";
interface ButtonArgs {
    autofocus: boolean;
    disabled: boolean;
    formnovalidate: boolean;
    storyContent: string | ViewTemplate;
}
declare const metadata: Meta<ButtonArgs>;
export default metadata;
export declare const Overview: (args: import("@storybook/types").Args, context: import("@storybook/html").StoryContext<import("@storybook/types").StrictArgs>) => Element | DocumentFragment | null;
