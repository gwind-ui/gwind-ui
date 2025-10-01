import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "../src/components/select"

export default {
    title: "Components/Select",
    component: GSelect,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        default: `
        <GSelectTrigger>
            <GSelectValue placeholder="Pilih sesuatu..." />
        </GSelectTrigger>
        <GSelectContent>
            <GSelectItem value="1">Satu</GSelectItem>
            <GSelectItem value="2">Dua</GSelectItem>
        </GSelectContent>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue },
        setup() {
            return { args }
        },
        template: `
     <GSelect>
        ${args.default}
     </GSelect>
    `,
    }),
}
