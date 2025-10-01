import RadioGroup from "../src/components/radio/RadioGroup.vue"
import RadioBox from "../src/components/radio/RadioBox.vue"

export default {
    title: "Components/Radio/RadioBox",
    component: RadioGroup,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        default: `
            <RadioBox id="r3" :value="RadioValue[0]" :label="RadioValue[0]">
                <template #iconItem> 🍌 </template>
                <template #textItem>{{ RadioValue[0] }}</template>
            </RadioBox>
            <RadioBox id="r4" :value="RadioValue[1]" :label="RadioValue[1]">
                <template #iconItem> 🥭 </template>
                <template #textItem>{{ RadioValue[1] }}</template>
            </RadioBox>
            <RadioBox :label="RadioValue[2]" id="r5" :value="RadioValue[2]">
                <template #iconItem> 🍎 </template>
                <template #textItem>
                    {{ RadioValue[2] }}
                </template>
            </RadioBox>
        `,
        disabled: false,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { RadioGroup, RadioBox },
        setup() {
            const RadioValue = ["Pisang", "Mangga", "Apel"]
            return { args, RadioValue }
        },
        template: `
      <RadioGroup v-bind="args" class="flex flex-col gap-2">
        ${args.default}
      </RadioGroup>
    `,
    }),
}
