import { GIcon } from "@pegadaian/gwind-ic/src"
import { ToggleGroup, ToggleGroupItem } from "../src/components/toggle"
import { GIconEye, GIconEdit, GIconDelete } from "@pegadaian/gwind-ic/src/assets/IconsSource"

export default {
    title: "Components/Toggle/Group",
    component: ToggleGroup,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["single", "multiple"],
        },
        modelValue: {
            control: "select",
            options: ["", "left", "center", "right"],
        },
    },
    args: {
        modelValue: "",
        type: "single",
        default: `
       <ToggleGroupItem value="left">
            <GIcon :icon="iconEye" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center">
            <GIcon :icon="iconEdit" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
            <GIcon :icon="iconDelete" />
        </ToggleGroupItem>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { ToggleGroup, ToggleGroupItem, GIcon },
        setup() {
            const iconEye = GIconEye
            const iconEdit = GIconEdit
            const iconDelete = GIconDelete
            return { args, iconEye, iconEdit, iconDelete }
        },
        template: `
    <ToggleGroup v-model="args.modelValue" v-bind="args">
       ${args.default}
    </ToggleGroup>
    `,
    }),
}
