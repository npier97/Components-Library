import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { Box } from "../Layout";

const navStyles = cva(
  ["w-full", "px-6", "py-4", "bg-white", "shadow-md", "transition-all"],
  {
    variants: {
      variant: {
        solid: "bg-primary-500 text-white",
        outline: "bg-transparent border-b-2 border-primary-500",
        transparent: "bg-transparent text-black",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-4 text-base",
        lg: "px-8 py-6 text-lg",
      },
      fixed: {
        true: "fixed top-0 z-50 shadow-lg",
        false: "relative",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      fixed: false,
    },
  }
);

export type NavProps = ComponentProps<"nav"> &
  VariantProps<typeof navStyles> & {
    logo: string | React.ReactNode;
    links: { name: string; href: string }[];
  };

export const NavBar = ({
  variant,
  size,
  fixed,
  logo,
  links,
  className,
  ...props
}: NavProps) => {
  return (
    <nav
      className={cn(
        navStyles({
          variant,
          size,
          fixed,
          className,
        })
      )}
      {...props}
    >
      <Box>
        <Box className="font-bold text-xl flex justify-between">
          <Box className="inline-block pr-6">{logo}</Box>
          <Box>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base hover:text-primary-500 transition-colors pl-0 pr-6"
              >
                {link.name}
              </a>
            ))}
          </Box>
        </Box>
      </Box>
    </nav>
  );
};
