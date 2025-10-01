import { cva, type VariantProps } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva("!text-omega font-bold w-fit inline-flex items-center rounded-md px-2.5 py-1 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            green: "!text-omega border-transparent bg-lime-100 text-lime-500",
            brocoli: "t!ext-omega border-transparent bg-broccoli-100 text-broccoli-500",
            orange: "!text-omega border-transparent bg-orange-100 text-orange-500",
            blue: "!text-omega border-transparent bg-blue-100 text-blue-500",
            red: "t!ext-omega border-transparent bg-red-100 text-red-500",
            outline: "!text-omega text-foreground",
        },
    },
    defaultVariants: {
        variant: "green",
    },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
