import { ref } from "vue"
import DateRangePicker from "../src/components/date-range-picker/DateRangePicker.vue"

export default {
    title: "Components/DatePicker/DatePickerWithOption",
    component: DateRangePicker,
    tags: ["autodocs"],
    argTypes: {
        startPlaceholder: {
            control: "text",
        },
        endPlaceholder: {
            control: "text",
        },
        sparator: {
            control: "text",
        },
        options: {
            control: "object",
        },
        start: { control: "text" },
        end: { control: "text" },
        max: {
            control: "text",
        },
        min: {
            control: "text",
        },
    },
    args: {
        startPlaceholder: "Pilih tanggal",
        endPlaceholder: "Pilih tanggal",
        sparator: "s.d",
        start: "startModel",
        end: "endModel",
    },
}

export const Default = {
    render: (args: string) => ({
        components: { DateRangePicker },
        setup() {
            const startDate = ref("")
            const endDate = ref("")
            return { args, startDate, endDate }
        },
        template: `
      <DateRangePicker 
        v-bind="args" 
        v-model:start="startDate"
        v-model:end="endDate"
      />
    `,
    }),
}
