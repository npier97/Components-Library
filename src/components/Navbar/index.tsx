import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, useEffect, useState } from "react";
import { Box } from "../Layout";
import { Brand } from "./Brand";

const navStyles = cva(["w-full", "px-6", "py-4", "transition-all"], {
  variants: {
    outline: {
      true: "border-b-2",
      false: "border-none",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-4 text-base",
      lg: "px-8 py-6 text-lg",
    },
    fixed: {
      true: "fixed top-0 z-50",
      false: "relative",
    },
  },
  defaultVariants: {
    outline: false,
    size: "md",
    fixed: false,
  },
});

export type NavProps = ComponentProps<"nav"> &
  VariantProps<typeof navStyles> & {
    logo: string | React.ReactNode;
    brand?: string;
    links: { name: string; href: string }[];
    themeOnScroll?: {
      textColor?: string;
      backgroundColor?: string;
      shadow?: string;
    };
  };

export const Navbar = ({
  outline,
  size,
  fixed,
  themeOnScroll,
  logo,
  brand,
  links,
  className,
  ...props
}: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!themeOnScroll) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [themeOnScroll]);

  return (
    <nav
      className={cn(
        navStyles({
          outline,
          size,
          fixed,
          className,
        }),
        "transition-all duration-300 ease-in-out",
        isScrolled &&
          `${themeOnScroll?.textColor} ${themeOnScroll?.backgroundColor} ${themeOnScroll?.shadow}`
      )}
      {...props}
    >
      <Box className="font-bold text-xl flex justify-between items-center">
        <Brand logo={logo} brand={brand} />
        <Box>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              //TODO: add dynamic hover for the link later
              //TODO: change padding-right of last item to 0
              className="text-base transition-colors pl-0 pr-6"
            >
              {link.name}
            </a>
          ))}
        </Box>
      </Box>
    </nav>
  );
};
