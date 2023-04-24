import { html } from "@microsoft/fast-element";
import type { Button } from "./button.js";
import type { Meta } from "@storybook/html";
import { createStory } from "../../__test__/helpers.js";

const storyTemplate = html<Button>`<fast-button id="${x => x.id}" autofocus="${x => x.autofocus}"></fast-button>`

const metadata: Meta<Button> = {
  title: 'Button',
  parameters: {
    docs: {
      description: {

      }
    },
    actions: {
      handles: ['click']
    }
  },
  argTypes: {

  },
  render: createStory(storyTemplate),
  args: {

  }
};

export default metadata;
