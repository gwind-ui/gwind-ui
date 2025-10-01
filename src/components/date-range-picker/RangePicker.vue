<script setup lang="ts">
/* eslint-disable */
import { ref, watch, computed } from "vue"
import Datepicker from "../datepicker/Datepicker.vue"
import { GLabel } from "../label/"

const props = defineProps<{
    startlabel?: string
    endlabel?: string
    start?: string
    end?: string
    min?: string
    max?: string
    startPlaceholder?: string
    endPlaceholder?: string
    calendarPosition?: "left" | "center" | "right"
    calendarPositionY?: "top" | "bottom" | "auto"
    sparator?: string
    disabled?: boolean
    sparatorClass?: string
}>()

const start = ref(props.start ?? "")
const end = ref(props.end ?? "")

const emit = defineEmits<{
    (e: "update:start", value: string): void
    (e: "update:end", value: string): void
}>()

const sparator = computed(() => props.sparator ?? "-")

// Untuk Datepicker start: min dari props, max = end atau max dari props (ambil yang lebih kecil)
const computedMaxStart = computed(() => {
    if (props.max && end.value) {
        return new Date(props.max) < new Date(end.value) ? props.max : end.value
    }
    return end.value || props.max || undefined
})

// Untuk Datepicker end: min = start atau min dari props (ambil yang lebih besar), max dari props
const computedMinEnd = computed(() => {
    if (props.min && start.value) {
        return new Date(props.min) > new Date(start.value) ? props.min : start.value
    }
    return start.value || props.min || undefined
})

function onStartPick(val: string) {
    start.value = val
    // Reset end jika end < start
    if (end.value && new Date(val) > new Date(end.value)) {
        end.value = ""
        emit("update:end", "")
    }
    emit("update:start", val)
}
function onEndPick(val: string) {
    end.value = val
    // Reset start jika start > end
    if (start.value && new Date(val) < new Date(start.value)) {
        start.value = ""
        emit("update:start", "")
    }
    emit("update:end", val)
}

watch(
    () => props.start,
    val => {
        start.value = val ?? ""
    }
)
watch(
    () => props.end,
    val => {
        end.value = val ?? ""
    }
)
</script>

<template>
    <div class="flex gap-2 w-full items-center">
        <div class="flex flex-col gap-1">
            <GLabel>{{ startlabel }}</GLabel>
            <Datepicker
                v-model="start"
                :placeholder="startPlaceholder"
                :calendarPosition="calendarPosition"
                :calendarPositionY="calendarPositionY"
                @update:modelValue="onStartPick"
                :max="computedMaxStart"
                :min="min"
                class="cursor-pointer w-full"
                :disabled="disabled"
            />
        </div>
        <span class="px-2 text-black-400" :class="sparatorClass">{{ sparator }}</span>
        <div class="flex flex-col gap-1">
            <GLabel>{{ endlabel }}</GLabel>
            <Datepicker
                v-model="end"
                :placeholder="endPlaceholder"
                :calendarPosition="calendarPosition"
                :calendarPositionY="calendarPositionY"
                @update:modelValue="onEndPick"
                :min="computedMinEnd"
                :max="max"
                class="cursor-pointer w-full"
                :disabled="disabled"
            />
        </div>
    </div>
</template>
