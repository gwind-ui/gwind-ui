import Checkbox from "../src/components/checkbox/Checkbox.vue"

export default {
    title: "Components/Check/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        defaultValue: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
        name: {
            control: "text",
        },
        value: {
            control: "text",
        },
        required: {
            control: "boolean",
        },
        label: {
            control: "text",
        },
        modelValue: { control: "boolean" },
    },
    args: {
        disabled: false,
        name: "Example",
        value: "exampleValue",
        required: false,
        label: "Check me",
        modelValue: false,
    },
}

export const Default = {
    render: (args: string) => ({
        components: { Checkbox },
        setup() {
            return { args }
        },
        template: `<Checkbox v-model="args.modelValue" v-bind="args" />`,
    }),
}
