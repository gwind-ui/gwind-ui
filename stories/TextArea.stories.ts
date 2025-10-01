import TextArea from "../src/components/textarea/Textarea.vue"

export default {
    title: "Components/Input/TextArea",
    component: TextArea,
    tags: ["autodocs"],
    argTypes: {
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
        hasMaxLength: {
            control: "boolean",
        },
        maxLength: {
            control: "number",
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
