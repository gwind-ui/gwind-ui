import { cva, type VariantProps } from "class-variance-authority"
export { default as Alert } from "./Alert.vue"
export { default as AlertDescription } from "./AlertDescription.vue"
export { default as AlertTitle } from "./AlertTitle.vue"

export const alertVariants = cva("relative text-black-800 w-full rounded-lg border p-4 [&>svg~*]:pl-10 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "border-lime-500 bg-lime-500 text-white",
            error: "border-red-500 bg-red-100",
            success: "border-lime-500 bg-lime-100",
            warning: "border-orange-500 bg-orange-100",
            info: "border-blue-500 bg-blue-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export type AlertVariants = VariantProps<typeof alertVariants>
