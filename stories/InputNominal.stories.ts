import GInputNominal from "../src/components/input/GInputNominal.vue"

export default {
    title: "Components/Input/Nominal",
    component: GInputNominal,
    tags: ["autodocs"],
    argTypes: {
        startUnit: {
            control: "text",
        },
        endUnit: {
            control: "text",
        },
        separator: {
            control: "options",
            options: ["comma", "dot", "space"],
        },
        seperatedEvery: {
            control: "number",
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
        separator: "dot",
        seperatedEvery: 3,
        startUnit: "Rupiah",
        endUnit: "",
        disabled: false,
        modelValue: "",
    },
}

export const Default = {}
