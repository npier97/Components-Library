import { Meta, StoryObj } from "@storybook/react";
import { ModalWithState } from "./ModalWithState";

const meta: Meta<typeof ModalWithState> = {
  title: "Examples/Modal",
  component: ModalWithState,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ModalWithState>;

export const Modal: Story = {};
