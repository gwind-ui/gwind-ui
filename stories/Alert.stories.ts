import { Alert, AlertDescription, AlertTitle } from "../src/components/alert"

export default {
    title: "Components/Alert",
    component: Alert,
    tags: ["autodocs"],
    argTypes: {
        class: {
            control: "text",
        },
        variant: {
            control: "select",
            options: ["default", "error", "success", "warning", "info"],
        },
    },
    args: {
        variant: "default",
        default: `
             <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        `,
    },
    render: (args: { default: string }) => ({
        components: { Alert, AlertDescription, AlertTitle },
        setup() {
            return { args }
        },
        template: `
        <Alert v-bind="args">
           ${args.default}
        </Alert>
      `,
    }),
}

export const Default = {
    args: {
        variant: "default",
    },
}

export const Error = {
    args: {
        variant: "error",
    },
}

export const Success = {
    args: {
        variant: "success",
    },
}

export const Warning = {
    args: {
        variant: "warning",
    },
}

export const Info = {
    args: {
        variant: "info",
    },
}
