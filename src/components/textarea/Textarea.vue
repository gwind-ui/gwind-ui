<script setup lang="ts">
import { ref, useAttrs, type HTMLAttributes } from "vue"
import { cn } from "../utils"
import { useVModel } from "@vueuse/core"
/* eslint-disable */
const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    class?: HTMLAttributes["class"]
    hasMaxLength?: boolean
}>()

const attrs = useAttrs()

const emits = defineEmits<{
    (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

const textareaRef = ref<HTMLTextAreaElement | null>(null)

function autoResize() {
    const el = textareaRef.value
    if (!el) return

    el.style.height = "auto"

    const maxHeight = parseFloat(getComputedStyle(el).maxHeight)

    const newHeight = Math.min(el.scrollHeight, maxHeight)
    el.style.height = `${newHeight}px`

    el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden"
}
</script>

<template>
    <div class="relative h-fit">
        <textarea
            ref="textareaRef"
            @input="autoResize"
            v-model="modelValue"
            v-bind="attrs"
            :class="
                cn(
                    'peer flex box-border w-full resize-none overflow-clip min-h-20 max-h-[122px] rounded-md border border-input bg-background p-3 text-omicron ring-offset-background placeholder:text-blcak-50 focus-visible:border-lime-500 focus-visible:outline-hidden transition-all duration-100 focus:border-lime-500 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500',
                    `disabled:cursor-not-allowed disabled:bg-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent `,
                    props.hasMaxLength && `pb-8`,
                    props.class
                )
            "
        />
        <div
            v-if="hasMaxLength"
            :class="
                cn(
                    'absolute flex justify-end bottom-0 right-0 w-full border-b border-x border-b-input border-x-input px-3 pb-3 pt-1 rounded-b-md bg-white text-black-500 !text-omega transition-all duration-100',
                    `peer-hover:border-b-lime-500 peer-hover:border-x-lime-500 peer-focus-visible:border-lime-500 peer-focus:border-lime-500 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2`,
                    `peer-disabled:cursor-not-allowed peer-disabled:bg-black-200 peer-disabled:focus:border-transparent peer-disabled:border-b-transparent peer-disabled:border-x-transparent`
                )
            "
        >
            {{ props.modelValue?.toString().length + "/" + attrs.maxlength }}
        </div>
    </div>
</template>
