import { buttonTemplate } from "@microsoft/fast-foundation";
import { Button } from "./button.js";

export default Button.define({
  name: 'fast-button',
  template: buttonTemplate(),
  shadowOptions: {
    delegatesFocus: true,
  },
})