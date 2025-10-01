<script setup lang="ts">
/* eslint-disable */
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import { GCheck } from "./index"
import { CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] } & { label: string }>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <CheckboxRoot
        :class="
            cn(
                'p-3 border rounded-md flex items-center gap-2 hover:cursor-pointer hover:border-lime-500',
                forwarded.modelValue ? 'border-lime-500 bg-lime-100 text-lime-500' : 'border-black-200 bg-white text-black-800',
                `disabled:hover:border-black-200 disabled:hover:cursor-not-allowed disabled:data-[state=checked]:border-black-200 disabled:data-[state=checked]:bg-white
            `
            )
        "
        v-bind="forwarded"
    >
        <GCheck v-bind="props" />
        <label :class="cn(`hover:cursor-pointer`, forwarded.disabled && `text-black-500 hover:cursor-not-allowed`)" :for="forwarded.id">{{ forwarded.label }}</label>
    </CheckboxRoot>
</template>
