<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ref, watch } from "vue"
import { cn } from "../utils"
import { useVModel } from "@vueuse/core"

const props = defineProps<{
    defaultValue?: string | number
    startUnit?: string
    endUnit?: string
    modelValue?: string | number
    separator?: "comma" | "dot" | "space"
    seperatedEvery?: number
    class?: HTMLAttributes["class"]
}>()

const emits = defineEmits<{
    // eslint-disable-next-line no-unused-vars
    (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

const formattedValue = ref(formatWithThousandSeparator(String(modelValue.value ?? "")))

function formatWithThousandSeparator(value: string) {
    const numericValue = value.replace(/[^\d]/g, "")
    if (numericValue === "") return ""

    const groupSize = props.seperatedEvery ?? 3
    const regex = new RegExp(`\\B(?=(\\d{${groupSize}})+(?!\\d))`, "g")

    return props.separator === "space" ? numericValue.replace(regex, " ") : props.separator === "comma" ? numericValue.replace(regex, ",") : numericValue.replace(regex, ".")
}

function onInput(event: Event) {
    const target = event.target as HTMLInputElement
    // Ambil hanya angka, buang huruf, simbol, dan spasi
    const rawValue = target.value.replace(/[^\d]/g, "")

    formattedValue.value = formatWithThousandSeparator(rawValue)
    modelValue.value = rawValue // emit angka murni ke luar
}

function onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"]
    if (allowedKeys.includes(event.key)) return

    // Izinkan semua kombinasi Ctrl/Meta (Ctrl+A, Ctrl+V, Ctrl+C, dll)
    if (event.ctrlKey || event.metaKey) return

    // Jika bukan angka 0-9, cegah input
    if (!/^\d$/.test(event.key)) {
        event.preventDefault()
    }
}

function onPaste(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData("text") ?? ""
    if (!/^\d+$/.test(pastedData.replace(/[^\d]/g, ""))) {
        event.preventDefault()
    }
}

watch(
    () => modelValue.value,
    newVal => {
        const numericValue = String(newVal ?? "").replace(/[^\d]/g, "")
        formattedValue.value = formatWithThousandSeparator(numericValue)
    }
)
</script>

<template>
    <div
        :class="
            cn(
                `input-nominal flex items-center rounded-md border border-input overflow-clip`,
                `has-[.peer:focus]:border-lime-500 has-[.peer:hover]:border-lime-600 transition-all duration-100`,
                `has-[.peer:disabled:hover]:border-input`,
                props.class
            )
        "
    >
        <div v-if="startUnit" :class="cn(`start-unit w-fit h-12 flex flex-col py-3 px-5 bg-black-100 text-black-600`)">
            {{ props.startUnit }}
        </div>
        <input
            v-bind="$attrs"
            :value="formattedValue"
            @input="onInput"
            @keydown="onKeyDown"
            @paste="onPaste"
            inputmode="numeric"
            pattern="\d*"
            :class="
                cn(
                    'peer flex w-full h-12 border-input bg-background px-3 py-[11px] text-omicron ring-offset-background placeholder:text-black-50 focus-visible:outline-hidden focus-visible:border-lime-50 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500',
                    'disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent',
                    props.startUnit && `border-l`,
                    props.endUnit && `border-r`,
                    props.class
                )
            "
        />
        <div v-if="endUnit" class="end-unit w-fit h-12 py-3 px-5 bg-black-100 text-black-600">
            {{ props.endUnit }}
        </div>
    </div>
</template>
