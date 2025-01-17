import type { Meta, StoryObj } from "@storybook/react";
import Text from "./index";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a test",
    as: "p",
    size: "base",
    weight: "normal",
    align: "center",
    italic: false,
    underline: false,
  },
};
