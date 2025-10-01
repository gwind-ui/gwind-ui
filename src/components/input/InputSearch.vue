<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"
import { useVModel } from "@vueuse/core"
/* eslint-disable */
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
</script>

<template>
    <div
        :class="
            cn(
                'flex flex-row gap-2 overflow-clip w-full pl-4 rounded-md border border-black-100 bg-black-100 p-3 text-omicron ring-offset-background file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-500 placeholder:text-black-500 has-[input:focus]:border-lime-500 focus-visible:border-lime-500 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500',
                `disabled:cursor-not-allowed disabled:bg-black-200 disabled:border-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent `,
                props.class
            )
        "
    >
        <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.3645 14.608H16.1986L20.6753 19.1033C21.1082 19.5359 21.1082 20.2429 20.6753 20.6755C20.2424 21.1082 19.535 21.1082 19.1021 20.6755L14.6148 16.1909V15.3572L14.3298 15.0618C12.8516 16.328 10.835 16.9823 8.69161 16.6235C5.75639 16.1275 3.41244 13.6794 3.05345 10.7248C2.50442 6.26128 6.26319 2.50471 10.7294 3.05342C13.6857 3.41219 16.1352 5.75477 16.6315 8.68827C16.9905 10.8304 16.3359 12.8458 15.0688 14.3231L15.3645 14.608ZM5.11233 9.85956C5.11233 12.487 7.23456 14.608 9.86359 14.608C12.4926 14.608 14.6148 12.487 14.6148 9.85956C14.6148 7.23207 12.4926 5.11109 9.86359 5.11109C7.23456 5.11109 5.11233 7.23207 5.11233 9.85956Z"
                fill="#58585B"
            />
        </svg>
        <input v-bind="$attrs" class="w-full" v-model="modelValue" :class="cn(`focus-visible:outline-hidden`)" />
    </div>
</template>
