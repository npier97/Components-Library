import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from ".";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navigation",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    fixed: false,
    logo: "Storybook",
    links: [
      {
        name: "Home",
        href: "#",
      },
      {
        name: "About",
        href: "#",
      },
    ],
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
    fixed: false,
    logo: "Storybook",
    links: [
      {
        name: "Home",
        href: "#",
      },
      {
        name: "About",
        href: "#",
      },
    ],
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    size: "md",
    fixed: true,
    logo: "Storybook",
    links: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About",
        href: "/",
      },
    ],
  },
};
