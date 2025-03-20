import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useEffect, useRef } from "react";

const modalContainerStyles = cva([
  "fixed",
  "md:absolute",
  "md:-translate-y-1/2",
  "flex",
  "items-center",
  "justify-center",
  "bg-blend-darken",
  "z-40",
]);

const modalContentStyles = cva([
  "bg-white",
  "rounded-lg",
  "p-4",
  "max-w-lg",
  "transition-all",
  "duration-200",
  "shadow-2xl",
]);

export type ModalProps = ComponentProps<"div"> &
  VariantProps<typeof modalContainerStyles> & {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    contentClassName?: string;
  };

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({
    isOpen,
    onClose,
    title,
    children,
    contentClassName,
    className,
    ...props
  }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        ref={modalRef}
        className={cn(modalContainerStyles({ className }))}
        {...props}
        role="dialog"
        aria-modal="true"
      >
        <div className={cn(modalContentStyles(), contentClassName)}>
          <div>{children}</div>
        </div>
      </div>
    );
  }
);
