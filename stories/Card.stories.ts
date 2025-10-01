import Button from "../src/components/button/button.vue"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../src/components/card"

export default {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    args: {
        default: `
               <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent class="grid grid-cols-3 gap-4 text-omega">
                    This Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardContent>
                <CardFooter>
                    <Button>Footer Button</Button>
                </CardFooter>
        `,
    },
    render: (args: { default: string }) => ({
        components: {
            Card,
            CardContent,
            CardDescription,
            CardFooter,
            CardHeader,
            Button,
        },
        setup() {
            return { args }
        },
        template: `
        <Card class="flex flex-col gap-y-4 h-fit">
            ${args.default}
        </Card>
        `,
    }),
}

export const Default = {}
