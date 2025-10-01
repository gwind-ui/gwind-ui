import Datepicker from "../src/components/datepicker/Datepicker.vue"

export default {
    title: "Components/DatePicker/Default",
    component: Datepicker,
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
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
        min: {
            control: "text",
        },
        max: {
            control: "text",
        },
        disableTeleport: {
            control: "boolean",
        },
        disabled: {
            control: "boolean",
        },
    },
    args: {
        placeholder: "Pilih tanggal",
        calendarPositionY: "bottom",
        calendarPosition: "left",
        disabled: false,
        disableTeleport: false,
    },
}

export const Default = {}
