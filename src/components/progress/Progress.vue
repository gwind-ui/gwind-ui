<script setup lang="ts">
import { ProgressIndicator, ProgressRoot, type ProgressIndicatorProps, type ProgressRootEmits, type ProgressRootProps, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<
    ProgressRootProps &
        ProgressIndicatorProps & {
            class?: HTMLAttributes["class"]
        }
>()
const emits = defineEmits<ProgressRootEmits>()

// forward semua props + emits
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <ProgressRoot
        v-model="forwarded.modelValue"
        :max="forwarded.max"
        :getValueLabel="forwarded.getValueLabel"
        :getValueText="forwarded.getValueText"
        :class="cn(`relative overflow-hidden bg-black-200 h-[10px] rounded-full w-full sm:h-5`, props.class)"
    >
        <ProgressIndicator
            :class="cn(`bg-lime-500 rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`)"
            :style="`transform: translateX(-${100 - (Number(forwarded.modelValue) / Number(forwarded.max)) * 100}%)`"
        />
    </ProgressRoot>
</template>
