import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "This is a test modal",
    children: "Hello World",
    onClose: () => console.log("closed"),
    isOpen: true,
  },
};
