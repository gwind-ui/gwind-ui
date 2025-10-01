import { ref } from "vue"
import ComboboxComponent from "../src/components/combobox/ComboboxComponent.vue"

export default {
    title: "Components/Dropdown|Combobox",
    component: ComboboxComponent,
    tags: ["autodocs"],
    argTypes: {
        optons: {
            control: "object",
        },
        placeholder: {
            control: "text",
        },
        isOpen: { control: "boolean" },
        modelValue: { control: "object" },
    },

    args: {
        options: [
            { value: "nextjs", label: "Next.js" },
            { value: "nuxt", label: "Nuxt" },
            { value: "sveltekit", label: "SvelteKit" },
            { value: "remix", label: "Remix" },
            { value: "astro", label: "Astro" },
        ],
        placeholder: "Select Framework",
        modelValue: " ",
    },
}

export const Default = {
    render: (args: string) => ({
        components: { ComboboxComponent },
        setup() {
            const modelValue = ref("") // ✅ kosong dari awal
            return { args, modelValue }
        },
        template: `
      <ComboboxComponent
        v-bind="args"
      />
    `,
    }),
}
