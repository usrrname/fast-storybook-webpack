import { ValuesOf } from "@microsoft/fast-foundation";
import { Button } from "./button.js";
/**
 * Button type values.
 *
 * @public
 */
export declare const ButtonType: {
    readonly submit: "submit";
    readonly reset: "reset";
    readonly button: "button";
};
/**
* Type for button type values.
*
* @public
*/
export declare type ButtonType = ValuesOf<typeof ButtonType>;
declare const _default: typeof Button;
export default _default;
