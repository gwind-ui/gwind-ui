import { VariantProps } from 'class-variance-authority';
export { default as ToastGroup } from './ToastGroup.vue';
export { default as ToastDescription } from './ToastDescription.vue';
export { default as ToastTitle } from './ToastTitle.vue';
export declare const toastVariants: (props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ToastVariants = VariantProps<typeof toastVariants>;
