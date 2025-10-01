import { Avatar, AvatarFallback, AvatarImage } from "../src/components/avatar"

export default {
    title: "Components/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["base", "sm", "lg"],
        },
        shape: {
            control: "select",
            options: ["circle", "square"],
        },
        src: {
            control: "text",
            description: "URL of the image to display in the avatar",
        },
    },
}

export const Default = {
    args: {
        size: "sm",
        shape: "circle",
        src: "https://github.com/unovue.png",
    },
    render: (args: string) => ({
        components: {
            Avatar,
            AvatarFallback,
            AvatarImage,
        },
        setup() {
            return { args }
        },
        template: `
        <Avatar v-bind="args">
            <AvatarImage :src="args.src" alt="@unovue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        `,
    }),
    parameters: {
        docs: {
            source: {
                code: `
<template>
    <Avatar>
        <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
</template>
        `.trim(),
            },
        },
    },
}
