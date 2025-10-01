<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"

const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    class?: HTMLAttributes["class"]
}>()

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

function formatRupiah(value: string | number): string {
    let num = String(value).replace(/\D/g, "")
    if (!num) return ""
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function onInput(e: Event) {
    const target = e.target as HTMLInputElement
    let raw = target.value.replace(/\D/g, "")
    target.value = formatRupiah(raw)
    modelValue.value = raw
    emits("update:modelValue", raw)
}
</script>

<template>
    <div
        class="parent flex items-center w-full gap-2 rounded-md border border-input bg-background ring-offset-background focus-within:border-lime-500 focus-within:ring-ring focus-within:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500 disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent"
        :class="props.class"
    >
        <div name="rupiah" class="rupiah-border text-black-600 px-3 h-[46px] flex items-center bg-black-200 rounded-l-[5px] border-r border-input">Rupiah</div>
        <input
            :value="formatRupiah(modelValue ?? '')"
            @input="onInput"
            class="flex-1 bg-transparent py-[11px] outline-none border-none text-omicron file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-50 placeholder:text-blcak-50"
            :class="'w-full'"
            type="text"
            inputmode="numeric"
            autocomplete="off"
            v-bind="$attrs"
        />
    </div>
</template>

<style scoped>
.parent:focus-within .rupiah-border {
    border-right-color: #00ab4e; /* lime-500 */
}
</style>
