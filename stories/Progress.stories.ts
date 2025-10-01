import Progress from "../src/components/progress/Progress.vue"

export default {
    title: "Components/Progress",
    component: Progress,
    tags: ["autodocs"],
    argTypes: {
        default: {
            control: "text",
        },
    },
    args: {
        max: 100,
        modelValue: 50,
    },
}

export const Default = {}
