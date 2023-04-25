/// <reference types="@storybook/types" />
declare const _default: {
    title: string;
    args: {
        autofocus: boolean;
        disabled: boolean;
        formnovalidate: boolean;
        storyContent: string;
    };
    argTypes: {
        autofocus: {
            control: string;
        };
        disabled: {
            control: string;
        };
        formaction: {
            control: string;
        };
        formenctype: {
            control: string;
        };
        formId: {
            control: string;
        };
        formmethod: {
            control: string;
        };
        formnovalidate: {
            control: string;
        };
        formtarget: {
            control: string;
        };
        inputValue: {
            table: {
                disable: boolean;
            };
        };
        name: {
            control: string;
        };
        type: {
            control: string;
            options: ("button" | "reset" | "submit")[];
        };
        value: {
            control: string;
        };
        ariaAtomic: {
            control: string;
        };
        ariaBusy: {
            control: string;
        };
        ariaControls: {
            control: string;
        };
        ariaCurrent: {
            control: string;
        };
        ariaDescribedby: {
            control: string;
        };
        ariaDetails: {
            control: string;
        };
        ariaDisabled: {
            control: string;
        };
        ariaErrormessage: {
            control: string;
        };
        ariaExpanded: {
            control: string;
        };
        ariaFlowto: {
            control: string;
        };
        ariaHaspopup: {
            control: string;
        };
        ariaHidden: {
            control: string;
        };
        ariaInvalid: {
            control: string;
        };
        ariaKeyshortcuts: {
            control: string;
        };
        ariaLabel: {
            control: string;
        };
        ariaLabelledby: {
            control: string;
        };
        ariaLive: {
            control: string;
        };
        ariaOwns: {
            control: string;
        };
        ariaPressed: {
            control: string;
        };
        ariaRelevant: {
            control: string;
        };
        ariaRoledescription: {
            control: string;
        };
        storyContent: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const BasicButton: (args: import("@storybook/types").Args, context: import("@storybook/html").StoryContext<import("@storybook/types").StrictArgs>) => Element | DocumentFragment | null;
