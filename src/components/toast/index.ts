import { cva, type VariantProps } from "class-variance-authority"
export { default as ToastGroup } from "./ToastGroup.vue"
export { default as ToastDescription } from "./ToastDescription.vue"
export { default as ToastTitle } from "./ToastTitle.vue"

export const toastVariants = cva(`rounded-t-md mobile:rounded-md relative flex flex-row gap-2 w-full text-white p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground`, {
    variants: {
        variant: {
            default: "bg-lime-500",
            error: "bg-red-500",
            success: "bg-lime-500",
            warning: "bg-orange-500",
            info: "bg-blue-500",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export type ToastVariants = VariantProps<typeof toastVariants>
