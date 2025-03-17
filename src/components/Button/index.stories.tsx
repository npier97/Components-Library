import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Layout/Box";
import { Button, ButtonProps } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
    className: "",
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
    size: "md",
    colorscheme: "primary",
    className: "",
  },
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
    size: "md",
    colorscheme: "primary",
    className: "",
  },
};

export const Statuses: StoryObj<typeof Button> = {
  render: (args: ButtonProps) => (
    <Box className="flex flex-col">
      <Button {...args} variant="solid" colorscheme="primary" className="my-2">
        Primary
      </Button>
      <Button
        {...args}
        variant="solid"
        colorscheme="secondary"
        className="my-2"
      >
        Secondary
      </Button>
      <Button {...args} variant="solid" colorscheme="success" className="my-2">
        Success
      </Button>
      <Button {...args} variant="solid" colorscheme="warning" className="my-2">
        Warning
      </Button>
      <Button {...args} variant="solid" colorscheme="danger" className="my-2">
        Danger
      </Button>
    </Box>
  ),
};
