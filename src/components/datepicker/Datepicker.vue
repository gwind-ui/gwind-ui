<script setup lang="ts">
/* eslint-disable */
import { ref, watch, computed, nextTick, onMounted, onBeforeUnmount } from "vue"
import Calendar from "../calendar/Calendar.vue"
import Drawer from "../drawer/Drawer.vue"

const props = defineProps<{
    modelValue?: string
    placeholder?: string
    calendarPosition?: "left" | "center" | "right"
    calendarPositionY?: "top" | "bottom" | "auto"
    min?: string
    max?: string
    disableTeleport?: boolean
    disabled?: boolean
}>()

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void
}>()

const show = ref(false)
const model = ref(props.modelValue ?? "")
const inputRef = ref<HTMLInputElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const calendarRef = ref<HTMLElement | null>(null)
const calendarStyle = ref<Record<string, string>>({})
const inputValue = ref(props.modelValue ?? "")

// Tambahkan reactive isMobile
const isMobile = ref(false)

function formatDate(dateStr: string) {
    if (!dateStr) return ""
    const [year, month, day] = dateStr.split("-")
    return `${day}/${month}/${year}`
}

const displayValue = computed(() => {
    return model.value ? formatDate(model.value) : ""
})

function onPick(val: string) {
    model.value = val
    emit("update:modelValue", val)
    show.value = false
}

function toggleShow() {
    show.value = !show.value
    if (show.value) {
        nextTick(() => {
            updateCalendarPosition()
        })
    }
}

function updateCalendarPosition() {
    if (!wrapperRef.value || !calendarRef.value) return
    const rect = wrapperRef.value.getBoundingClientRect()
    const calendarWidth = rect.width
    const calendarHeight = calendarRef.value.offsetHeight || 320

    // Default position: bottom
    let top = rect.bottom
    let left = rect.left

    // Horizontal alignment
    if (props.calendarPosition === "center") {
        left = rect.left + rect.width / 2 - calendarWidth / 2
    } else if (props.calendarPosition === "right") {
        left = rect.right - calendarWidth
    }

    // Vertical alignment
    let positionY = props.calendarPositionY ?? "bottom"
    if (positionY === "auto") {
        const spaceBelow = window.innerHeight - rect.bottom
        const spaceAbove = rect.top
        if (spaceBelow < calendarHeight && spaceAbove > calendarHeight) {
            positionY = "top"
        } else {
            positionY = "bottom"
        }
    }
    if (positionY === "top") {
        top = rect.top - calendarHeight
    }

    calendarStyle.value = {
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        width: `${calendarWidth}px`,
        zIndex: "9999",
    }
}

// Sinkronisasi inputValue dengan modelValue dari parent
watch(
    () => props.modelValue,
    val => {
        if (val !== inputValue.value) {
            inputValue.value = val ?? ""
        }
        model.value = val ?? ""
    }
)

// Emit perubahan inputValue ke parent
watch(inputValue, val => {
    emit("update:modelValue", val)
})

// Update posisi kalender saat show berubah
watch(show, val => {
    if (val) nextTick(updateCalendarPosition)
})

function checkMobile() {
    isMobile.value = window.innerWidth < 640
}

onMounted(() => {
    inputValue.value = props.modelValue ?? ""
    window.addEventListener("scroll", updateCalendarPosition, true)
    window.addEventListener("resize", updateCalendarPosition)
    window.addEventListener("resize", checkMobile)
    checkMobile()
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", updateCalendarPosition, true)
    window.removeEventListener("resize", updateCalendarPosition)
    window.removeEventListener("resize", checkMobile)
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s;
}
.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>

<template>
    <div class="relative w-full" ref="wrapperRef">
        <input
            class="pr-10 cursor-pointer flex w-full rounded-md border border-input bg-background px-3 py-[11px] text-omicron ring-offset-background file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-50 placeholder:text-blcak-50 focus-visible:outline-hidden focus-visible:border-lime-50 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500 disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent"
            ref="inputRef"
            type="text"
            :value="displayValue"
            @click="toggleShow"
            readonly
            :placeholder="placeholder"
            :disabled="disabled"
        />
        <teleport to="body">
            <!-- Desktop Calendar -->
            <div v-if="show && !isMobile" class="z-[9999] fixed" :style="calendarStyle" @mousedown.stop @click.stop ref="calendarRef">
                <Calendar v-model="model" @update:modelValue="onPick" :min="min" :max="max" class="shadow-lg bg-white" />
            </div>
            <!-- Mobile Drawer Calendar (overlay sudah otomatis di Drawer) -->
            <Drawer v-model="show" label="Pilih Tanggal" v-if="isMobile" position="bottom">
                <Calendar class="!w-full !p-0 border-0" yearClass="!shadow-none !w-full border-x-0" yearClassContent="gap-x-8" v-model="model" @update:modelValue="onPick" :min="min" :max="max" />
            </Drawer>
        </teleport>
    </div>
</template>
