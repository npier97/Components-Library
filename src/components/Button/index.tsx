import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "rounded-md",
    "font-semibold",
    "hover:cursor-pointer",
    "focus:outline-2",
    "focus:outline-[#005fcc]",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white bg-blue-500 hover:bg-blue-400",
        secondary: "text-white bg-gray-500 hover:bg-gray-400",
        success: "text-white bg-green-500 hover:bg-green-400",
        warning: "text-black bg-yellow-500 hover:bg-yellow-400",
        danger: "text-white bg-red-500 hover:bg-red-400",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "border-blue-500 text-blue-500 bg-transparent",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-blue-500 bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorscheme: "primary",
    },
  }
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size, colorscheme, className }))}
      {...props}
    />
  )
);
