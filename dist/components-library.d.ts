import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { DetailedHTMLProps } from 'react';
import { ElementType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Box: ForwardRefExoticComponent<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>>;

export declare type BoxProps = ComponentProps<"div">;

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;

export declare type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

declare const inputStyles: (props?: ClassProp | undefined) => string;

export declare const NavBar: ({ variant, size, fixed, logo, links, className, ...props }: NavProps) => JSX_2.Element;

export declare type NavProps = ComponentProps<"nav"> & VariantProps<typeof navStyles> & {
    logo: string | React.ReactNode;
    links: {
        name: string;
        href: string;
    }[];
};

declare const navStyles: (props?: ({
    variant?: "solid" | "outline" | "transparent" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    fixed?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Stack: ({ className, ...props }: StackProps) => JSX_2.Element;

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
