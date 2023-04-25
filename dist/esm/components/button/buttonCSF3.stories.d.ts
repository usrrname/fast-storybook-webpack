import { ViewTemplate } from "@microsoft/fast-element";
import type { Button } from "./button.js";
import type { Meta } from "@storybook/html";
import { StoryArgs } from "../../__test__/helpers.js";
interface ButtonArgs {
    autofocus: boolean;
    disabled: boolean;
    formnovalidate: boolean;
    storyContent: string | ViewTemplate;
}
declare const metadata: Meta<ButtonArgs>;
export default metadata;
export declare const CSF3Story: {
    name: string;
    render: (source: StoryArgs<Button>) => Element;
};
