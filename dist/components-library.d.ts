import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { DetailedHTMLProps } from 'react';
import { ElementType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Box: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare type BoxProps = ComponentProps<"div">;

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | "secondary" | "success" | "warning" | "danger" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;

export declare type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles> & {
    label?: string;
    name: string;
};

declare const inputStyles: (props?: ClassProp | undefined) => string;

export declare const Modal: ForwardRefExoticComponent<Omit<ModalProps, "ref"> & RefAttributes<HTMLDivElement>>;

declare const modalContainerStyles: (props?: ClassProp | undefined) => string;

export declare type ModalProps = ComponentProps<"div"> & VariantProps<typeof modalContainerStyles> & {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    contentClassName?: string;
};

export declare const Navbar: ({ outline, size, fixed, themeOnScroll, logo, brand, brandHref, links, className, ...props }: NavProps) => JSX.Element;

export declare type NavProps = ComponentProps<"nav"> & VariantProps<typeof navStyles> & {
    logo: string | React.ReactNode;
    brand?: string;
    brandHref?: string;
    links: {
        name: string;
        href: string;
    }[];
    themeOnScroll?: {
        textColor?: string;
        backgroundColor?: string;
        shadow?: string;
    };
};

declare const navStyles: (props?: ({
    outline?: boolean | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    fixed?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Stack: ({ className, ...props }: StackProps) => JSX.Element;

export declare type StackProps = BoxProps;

declare const Text_2: ForwardRefExoticComponent<Omit<TextProps, "ref"> & RefAttributes<HTMLElement>>;
export { Text_2 as Text }

export declare type TextProps = {
    as?: ElementType;
} & ComponentProps<"p"> & VariantProps<typeof textStyles>;

declare const textStyles: (props?: ({
    emphasis?: "low" | null | undefined;
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "black" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
    italic?: boolean | null | undefined;
    underline?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export { }
