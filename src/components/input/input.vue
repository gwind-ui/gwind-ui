<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"

const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    class?: HTMLAttributes["class"]
    autoCaps?: boolean
    // Optional icon props if needed
    prefixIcon?: any
    suffixIcon?: any
}>()

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

// Auto-capitalization handler
const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    let value = target.value

    if (props.autoCaps) {
        value = value.toUpperCase()
        target.value = value
    }

    emits("update:modelValue", value)
}
</script>

<template>
    <div
        class="flex items-center w-full px-3 gap-2 rounded-md border border-input bg-background ring-offset-background focus-within:border-lime-500 focus-within:ring-ring focus-within:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500 disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent"
        :class="props.class"
    >
        <!-- Prefix slot/icon -->
        <slot name="prefix">
            <component v-if="props.prefixIcon" :is="props.prefixIcon" class="mr-2" />
        </slot>
        <input
            v-model="modelValue"
            @input="onInput"
            class="flex-1 bg-transparent py-[11px] outline-none border-none text-omicron file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-50 placeholder:text-blcak-50"
            :class="'w-full'"
            v-bind="$attrs"
        />
        <!-- Suffix slot/icon/action -->
        <slot name="suffix">
            <component v-if="props.suffixIcon" :is="props.suffixIcon" class="ml-2" />
        </slot>
    </div>
</template>
