import RadioGroup from "../src/components/radio/RadioGroup.vue"
import Radio from "../src/components/radio/Radio.vue"

export default {
    title: "Components/Radio/Default",
    component: RadioGroup,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        disabled: false,
        default: `
            <div v-for="(item, i) in RadioValue" :key="i">
            <Radio :id="'r' + (i+1)"  :value="item"/>
            {{ item }}
        </div>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { RadioGroup, Radio },
        setup() {
            const RadioValue = ["Pisang", "Mangga", "Apel"]
            return { args, RadioValue }
        },
        template: `
      <RadioGroup v-bind="args">
        ${args.default}
      </RadioGroup>
    `,
    }),
}
