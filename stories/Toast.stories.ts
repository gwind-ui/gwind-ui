import { GButton } from "../src/components/button"
import { ToastGroup, ToastTitle, ToastDescription } from "../src/components/toast"

export default {
    title: "Components/Toast",
    component: ToastGroup,
    subcomponents: { ToastTitle, ToastDescription },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select", options: ["default", "info", "success", "warning", "error"] },
        },
        closeAble: { control: "boolean" },
        closeTapOutside: { control: "boolean" },
    },
    args: {
        open: false,
        default: `
       <template #triggerToast>
            <GButton variant="primary" size="md" @click="() => (args.open = true)"> Open Toast </GButton>
        </template>
        <ToastTitle>Title</ToastTitle>
        <ToastDescription>Lorem Ipsum Dolor Sit Amet</ToastDescription>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { ToastGroup, ToastTitle, ToastDescription, GButton },
        setup() {
            return { args }
        },
        template: `
    <ToastGroup v-bind="args" v-model:open="args.open">
        ${args.default}
    </ToastGroup>
    `,
    }),
}
