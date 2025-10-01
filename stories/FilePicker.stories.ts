import FilePicker from "../src/components/file-picker/FilePicker.vue"

export default {
    title: "Components/FilePicker",
    component: FilePicker,
    tags: ["autodocs"],
    argTypes: {
        file: {
            control: "object",
        },
        imageOnly: {
            control: "boolean",
        },
        errorText: {
            control: "text",
        },
        uniqueKey: {
            control: "text",
        },
        helperText: {
            control: "text",
        },
        showFileURL: {
            control: "boolean",
        },
        small: {
            control: "boolean",
        },
    },
    args: {
        imageOnly: true,
        errorText: "File terlalu besar, maksimal 1MB.",
        helperText: "Maksimal ukuran file 1MB.",
        showFileURL: undefined,
        small: false,
    },
}

export const Default = {}
