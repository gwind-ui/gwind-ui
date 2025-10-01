import { cva, type VariantProps } from "class-variance-authority"

export { default as GButton } from "./button.vue"

export const buttonVariants = cva("cursor-pointer font-bold inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-lime-600 active:bg-lime-700",
            primary: "bg-primary text-primary-foreground hover:bg-lime-600 active:bg-lime-700",
            destructive: "bg-red-500 text-destructive-foreground hover:bg-red-600 active:bg-red-700",
            outline: "border border-input bg-primary/0 hover:border-primary/80 active:bg-lime-100",
            combobox: "border border-input bg-white hover:border-lime-500",
            secondary: "bg-white text-lime-500 border-lime-500 border hover:text-lime-600 hover:border-lime-600 active:text-lime-600 active:border-lime-600",
            ghost: "bg-foreground/0 border-0 hover:bg-foreground/8 active:bg-foreground/20",
            "ghost-fab": "bg-foreground/5 border-0 hover:bg-foreground/15 active:bg-foreground/20",
            link: "text-omicron text-primary-on-text !py-0 !px-0 h-full hover:text-lime-500 focus:text-lime-600 active:text-lime-600",
            neutral: "bg-white text-black-600 border-black-500 border hover:text-lime-500 focus:text-lime-600 active:text-lime-600",
            tertiary: "bg-white text-lime-500 hover:text-lime-600 active:text-lime-600",
            icon: "bg-primary text-primary-foreground hover:opacity-500",
        },
        size: {
            sm: "rounded-sm h-8 w-auto px-2 !text-sigma",
            md: "rounded-md h-10 w-auto px-4 !text-omicron",
            lg: "rounded-md h-12 w-auto px-4 !text-omicron",
            xl: "rounded-lg h-14 w-auto px-4 !text-omicron",
            fab: "h-14 w-14 rounded-full overflow-hidden px-4 transition !text-omicron",
        },
        state: {
            disabled: "opacity-65 bg-black-500/65 text-white pointer-events-none",
        },
    },
    compoundVariants: [
        {
            variant: "icon",
            size: "sm",
            class: "h-6 w-6 object-cover",
        },
        {
            variant: "icon",
            size: "md",
            class: "h-6 w-6 object-cover",
        },
        {
            variant: "icon",
            size: "lg",
            class: "h-6 w-6 object-cover",
        },
        {
            variant: "icon",
            size: "xl",
            class: "h-6 w-6 object-cover",
        },
        {
            variant: "icon",
            size: "fab",
            class: "h-6 w-6 object-cover",
        },
    ],
    defaultVariants: {
        variant: "default",
        size: "md",
    },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
