import Carousel from "../src/components/carousel/Carousel.vue"

export default {
    title: "Components/Carousel",
    component: Carousel,
    tags: ["autodocs"],
    argsTypes: {
        slides: {
            control: "object",
        },
        header: {
            control: "object",
        },
        subHeader: {
            control: "object",
        },
        variant: {
            control: "select",
            options: ["arrow", "indicator", "both"],
        },
        autoplay: {
            control: "boolean",
        },
        interval: {
            control: "number",
        },
    },
    args: {
        slides: [
            { src: "https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8", alt: "Slide 1" },
            { src: "https://images.unsplash.com/photo-1753545057755-aa9a7673b78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", alt: "Slide 2" },
            { src: "https://images.unsplash.com/photo-1749302860502-35be67c058c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", alt: "Slide 3" },
        ],
    },
}

export const Default = {
    args: {
        autoplay: true,
        interval: 3000,
        variant: "both",
        header: ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"],
        subHeader: ["Sub Header 1", "Sub Header 2", "Sub Header 3", "Sub Header 4", "Sub Header 5"],
    },

    render: (args: string) => ({
        components: { Carousel },
        setup() {
            return { args }
        },
        template: `
        <Carousel v-bind="args" class="rounded-md" :slides="args.slides" v-slot="{ slide }">
            <img class="w-full h-[392px] object-cover" :src="slide.src" :alt="slide.alt" class="-z-10" />
        </Carousel>
        `,
    }),
    parameters: {
        docs: {
            source: {
                code: `

<script setup lang="ts">
    const header = ["Header 1","Header 2","Header 3","Header 4","Header 5"];

    const slides = [
        {
            "src": "https://images.unsplash.com/photo-1752643719497-b91314d6d253?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
            "alt": "Slide 1"
        },
        {
            "src": "https://images.unsplash.com/photo-1753545057755-aa9a7673b78f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
            "alt": "Slide 2"
        },
        {
            "src": "https://images.unsplash.com/photo-1749302860502-35be67c058c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
            "alt": "Slide 3"
        }
    ];

    const subHeader = ["Sub Header 1","Sub Header 2","Sub Header 3","Sub Header 4","Sub Header 5"];
</script>

<template>
    <Carousel v-bind="args" class="rounded-md" :slides="args.slides" v-slot="{ slide }">
        <img class="w-full h-[392px] object-cover" :src="slide.src" :alt="slide.alt" class="-z-10" />
    </Carousel>
</template>
        `.trim(),
            },
        },
    },
}
