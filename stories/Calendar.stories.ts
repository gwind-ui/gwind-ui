import { ref } from "vue"
import Calendar from "../src/components/calendar/Calendar.vue"
import Drawer from "../src/components/drawer/Drawer.vue"
import Button from "../src/components/button/button.vue"

export default {
    title: "Components/DatePicker/Calendar Only",
    component: Calendar,
    tags: ["autodocs"],
    argTypes: {
        min: {
            control: "text",
        },
        max: {
            control: "text",
        },
        yearClass: {
            control: "text",
        },
        yearClassContent: {
            control: "text",
        },
    },
}

export const Desktop = {}

export const Mobile = {
    render: (args: string) => ({
        components: { Drawer, Calendar, Button },
        setup() {
            const show = ref(false)
            const modelCalendar = ref("")

            function onPick() {
                show.value = false
            }

            return { args, show, modelCalendar, onPick }
        },
        template: `
      <Button @click="show = true">Open Mobile Calendar</Button>
      <div class="mt-2">Tanggal dipilih: {{ modelCalendar }}</div>

      <Drawer
        v-model="show"
        label="Pilih Tanggal"
        position="bottom"
      >
        <Calendar
          class="!w-full !p-0 border-0"
          yearClass="!shadow-none !w-full border-x-0"
          yearClassContent="gap-x-8"
          v-model="modelCalendar"
          @update:modelValue="onPick"
          :min="args.min"
          :max="args.max"
        />
      </Drawer>
    `,
    }),

    parameters: {
        docs: {
            source: {
                code: `

<script setup lang="ts">
    const show = ref(false)
    const modelCalendar = ref("")
    function onPick() {
        show.value = false
    }
</script>

<template>
    <Button @click="show = true">Open Mobile Calendar</Button>
    <div class="mt-2">Tanggal dipilih: {{ modelCalendar }}</div>
    
    <Drawer
        v-model="show"
        label="Pilih Tanggal"
        position="bottom"
      >
        <Calendar
          class="!w-full !p-0 border-0"
          yearClass="!shadow-none !w-full border-x-0"
          yearClassContent="gap-x-8"
          v-model="modelCalendar"
          @update:modelValue="onPick"
          :min="args.min"
          :max="args.max"
        />
      </Drawer>
</template>
        `.trim(),
            },
        },
    },
}
