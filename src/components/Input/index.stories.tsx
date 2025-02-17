import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    label: "Some text",
    name: "text",
    type: "text",
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    name: "number",
    type: "number",
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    name: "date",
    type: "date",
    placeholder: "Date",
  },
};
