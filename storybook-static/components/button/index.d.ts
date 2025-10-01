import { VariantProps } from 'class-variance-authority';
export { default as GButton } from './button.vue';
export declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "outline" | "icon" | "primary" | "destructive" | "combobox" | "secondary" | "ghost" | "ghost-fab" | "neutral" | "tertiary" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | "fab" | null | undefined;
    state?: "disabled" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
