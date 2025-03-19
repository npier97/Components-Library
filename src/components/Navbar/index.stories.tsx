import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from ".";
import StorybookLogo from "../../assets/storybook.png";

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
    className: "bg-blue-500 text-white",
    outline: false,
    size: "md",
    fixed: false,
    brand: "Storybook",
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
    themeOnScroll: {
      textColor: "text-black",
      backgroundColor: "bg-white",
      shadow: "shadow-lg",
    },
  },
};

export const Outline: Story = {
  args: {
    className: "bg-white text-black",
    outline: true,
    size: "md",
    fixed: false,
    logo: <img src={StorybookLogo} alt="Logo" width="20px" />,
    brand: "Storybook",
    brandHref: "#",
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
