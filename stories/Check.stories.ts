import Check from "../src/components/checkbox/Check.vue"

export default {
    title: "Components/Check/Check Default",
    component: Check,
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
    },
    args: {
        defaultValue: false,
        disabled: false,
        name: "Example",
        value: "exampleValue",
        required: false,
        label: "Check me",
    },
    render: (args: { label: string }) => ({
        components: { Check },
        setup() {
            const label = args.label
            return { args, label }
        },
        template: `
        <div class="flex items-center gap-2">
            <Check v-bind="args" />
            {{ args.name }}
        </div>
      `,
    }),
}

export const Default = {}
