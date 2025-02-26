import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "focus:outline-blue-500",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof inputStyles> & {
    label?: string;
    name: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, className, ...props }, ref) => {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          type="text"
          id={name}
          name={name}
          autoComplete="off"
          className={cn(inputStyles({ className }))}
          {...props}
        />
      </>
    );
  }
);
