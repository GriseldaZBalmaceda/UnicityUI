import type { Meta, StoryObj } from "@storybook/react";
import UnicityButton from "./Button";
const meta: Meta<typeof UnicityButton> = {
  title: "RadixUI/Modal",
  component: UnicityButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj<typeof UnicityButton>;

//👇 Throws a type error it the args don't match the component props
export const Button: Story = {
  args: {
    label: "Press Me",
  },
};
