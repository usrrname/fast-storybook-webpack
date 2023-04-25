import { ViewTemplate } from "@microsoft/fast-element";
import type { Meta } from "@storybook/html";
import { StoryObj } from "../../__test__/helpers.js";
interface ButtonArgs {
    autofocus: boolean;
    disabled: boolean;
    formnovalidate: boolean;
    storyContent: string | ViewTemplate;
}
declare const metadata: Meta<ButtonArgs>;
export default metadata;
declare type Story = StoryObj<ButtonArgs>;
export declare const CSF3Story: Story;
