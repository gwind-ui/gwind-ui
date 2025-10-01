import { ChipsGroup, ChipsGroupItem } from "../src/components/chips"

export default {
    title: "Components/Chips",
    component: ChipsGroup,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "options",
            options: ["single", "multiple"],
        },
        disabled: {
            control: "boolean",
        },
        name: {
            control: "text",
        },
        orientation: {
            control: "options",
            options: ["horizontal", "vertical"],
        },
        required: {
            control: "boolean",
        },
        modelValue: { control: "object" },
        defaultValue: { control: "object" },
    },
    args: {
        type: "single",
        orientation: "horizontal",
        modelValue: {},
        disabled: false,
        name: "Example",
        required: false,
        default: `
            <ChipsGroupItem value="gadai"> Gadai </ChipsGroupItem>
            <ChipsGroupItem value="cicilan"> Cicilan </ChipsGroupItem>
            <ChipsGroupItem value="pembiayaan"> Pembiayaan </ChipsGroupItem>
            <ChipsGroupItem value="transaksi"> Transaksi </ChipsGroupItem>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { ChipsGroup, ChipsGroupItem },
        setup() {
            return { args }
        },
        template: `<ChipsGroup v-model="args.modelValue" v-bind="args">
            ${args.default}
        </ChipsGroup>`,
    }),
}
