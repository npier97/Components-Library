import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me",
  },
};
