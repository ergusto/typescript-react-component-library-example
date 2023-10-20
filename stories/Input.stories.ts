// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../src/components/Input";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
