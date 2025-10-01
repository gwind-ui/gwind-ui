import { GIcon } from "@pegadaian/gwind-ic/src"
import Toggle from "../src/components/toggle/Toggle.vue"
import { GIconDelete } from "@pegadaian/gwind-ic/src/assets/IconsSource"

export default {
    title: "Components/Toggle/Single",
    component: Toggle,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        modelValue: false,
        default: `
       <GIcon :icon="icon"></GIcon>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { Toggle, GIcon, GIconDelete },
        setup() {
            const icon = GIconDelete
            return { args, icon }
        },
        template: `
    <Toggle v-model="args.modelValue" >
       ${args.default}
    </Toggle>
    `,
    }),
}
