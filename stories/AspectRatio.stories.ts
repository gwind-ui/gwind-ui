import AspectRatio from "../src/components/aspect-ratio/AspectRatio.vue"

export default {
    title: "Components/AspectRatio",
    component: AspectRatio,
    tags: ["autodocs"],
    argTypes: {
        ratio: {
            control: "number",
            description: "Aspect ratio of the container, e.g., 16/9 for wides",
        },
    },
    args: {
        ratio: 16 / 9,
    },
}

export const Default = {
    render: (args: string) => ({
        components: {
            AspectRatio,
        },
        setup() {
            return { args }
        },
        template: `
        <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
            <AspectRatio :ratio="args.ratio">
            <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
            >
            </AspectRatio>
        </div>
        `,
    }),
}
