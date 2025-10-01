import { ref } from "vue"
import RangePicker from "../src/components/date-range-picker/RangePicker.vue"

export default {
    title: "Components/DatePicker/DateRangePicker",
    component: RangePicker,
    tags: ["autodocs"],
    argTypes: {
        startPlaceholder: {
            control: "text",
        },
        endPlaceholder: {
            control: "text",
        },
        startlabel: {
            control: "text",
        },
        endlabel: {
            control: "text",
        },
        sparator: {
            control: "text",
        },
        start: { control: "text" },
        end: { control: "text" },
        max: {
            control: "text",
        },
        min: {
            control: "text",
        },
        calendarPosition: {
            control: "select",
            options: ["left", "center", "right"],
        },
        calendarPositionY: {
            control: "select",
            options: ["top", "bottom", "auto"],
        },
        disabled: {
            control: "boolean",
        },
    },
    args: {
        startPlaceholder: "Pilih tanggal",
        endPlaceholder: "Pilih tanggal",
        startlabel: "Tanggal Mulai",
        endlabel: "Tanggal Selesai",
        start: "startModel",
        end: "endModel",
    },
}

export const Default = {
    render: (args: string) => ({
        components: { RangePicker },
        setup() {
            const startDate = ref("")
            const endDate = ref("")
            return { args, startDate, endDate }
        },
        template: `
      <RangePicker 
        v-bind="args" 
        v-model:start="startDate"
        v-model:end="endDate"
      />
    `,
    }),
}
