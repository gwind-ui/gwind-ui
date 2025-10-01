import InputSearch from "../src/components/input/InputSearch.vue"

export default {
    title: "Components/Input/Search",
    component: InputSearch,
    tags: ["autodocs"],
    argTypes: {
        modelValue: {
            control: "text",
        },
        defaultValue: {
            control: "text",
        },
    },
    args: {
        placeholder: "Cari nama nasabah",
        modelValue: "",
    },
}

export const Default = {}
