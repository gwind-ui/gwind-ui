import Label from "../src/components/label/Label.vue"

export default {
    title: "Components/Label",
    component: Label,
    tags: ["autodocs"],
    argTypes: {
        default: {
            control: "text",
        },
    },
    args: {
        default: "Label",
    },
    render: (args: string) => ({
        components: { Label },
        setup() {
            return { args }
        },
        template: `
      <GLabel v-bind="args">
        {{ args.default }}
      </GLabel>
    `,
    }),
}

export const Default = {
    args: {
        default: "Label",
    },
}
