import input from "../src/components/input/input.vue"

export default {
    title: "Components/Input/Text",
    component: input,
    tags: ["autodocs"],
    argTypes: {
        autoCaps: {
            control: "boolean",
        },
        modelValue: {
            control: "text",
        },
        defaultValue: {
            control: "text",
        },
        placeholder: {
            control: "text",
        },
        disabled: {
            control: "boolean",
        },
    },
    args: {
        placeholder: "Masukkan teks disini",
        disabled: false,
        autoCaps: true,
        modelValue: "",
    },
}

export const Default = {}
