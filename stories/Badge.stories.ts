import { GIcon } from "@pegadaian/gwind-ic/src"
import { badgeVariants } from "../src/components/badge"
import Badge from "../src/components/badge/Badge.vue"
import { GIconCross } from "@pegadaian/gwind-ic/src/assets/IconsSource"
import { ref } from "vue"

export default {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        class: {
            control: "text",
        },
        variant: {
            control: "select",
            options: ["green", "brocoli", "orange", "blue", "red", "outline"],
        },
        modelValue: {
            control: "boolean",
            description: "Controls the visibility of the badge",
        },
    },
    args: {
        variant: "green",
        modelValue: true,
        default: `Badge`,
    },
    render: (args: string) => ({
        components: { Badge, badgeVariants },
        setup() {
            return { args }
        },
        template: `
            <Badge v-bind="args" > {{args.default}} </Badge>
      `,
    }),
}

export const Green = {
    args: {
        variant: "green",
    },
}

export const Brocoli = {
    args: {
        variant: "brocoli",
    },
}

export const Orange = {
    args: {
        variant: "orange",
    },
}

export const Blue = {
    args: {
        variant: "blue",
    },
}

export const Red = {
    args: {
        variant: "red",
    },
}

export const Outline = {
    args: {
        variant: "outline",
    },
}

export const Icon = {
    args: {
        rightIcon: `
                <GIcon @click="() => (badgeOpen = !badgeOpen)" class="w-1" :icon="GIconCross" weight="fill" class="ml-3 text-black-500 w-5 cursor"></GIcon>
        `,
    },
    render: (args: { rightIcon: string }) => ({
        components: { Badge, badgeVariants, GIcon, GIconCross },
        setup() {
            const badgeOpen = ref(true)
            return { args, badgeOpen, GIconCross }
        },
        template: `
            <Badge :model-value="badgeOpen"> {{args.default}} ${args.rightIcon} </Badge>
      `,
    }),
}
