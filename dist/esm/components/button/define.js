import { buttonTemplate } from "@microsoft/fast-foundation";
import { Button } from "./button.js";
import { css } from "@microsoft/fast-element";
const styles = css `
    :host(button){
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    :host(button:hover) {
      border-color: #646cff;
      cursor: pointer;
    }
    :host(button:focus),
    :host(button:focus-visible) {
      outline: 4px auto -webkit-focus-ring-color;
    }

    .control:focus-visible {
        border-color: inherit;
        box-shadow: 0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px)
            var(--focus-stroke-outer) inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="content"]),
    ::slotted([slot="end"]),
    .content {
        display: flex;
    }

    .control.icon-only {
        line-height: 0;
        padding: 0;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }
`;
/**
 * Button type values.
 *
 * @public
 */
export const ButtonType = {
    submit: "submit",
    reset: "reset",
    button: "button",
};
export default Button.define({
    name: 'fast-button',
    template: buttonTemplate(),
    styles: styles,
    shadowOptions: {
        delegatesFocus: true,
    },
});
//# sourceMappingURL=define.js.map