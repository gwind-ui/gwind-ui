<script lang="ts" setup>
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { defineProps, defineEmits } from "vue"
import { cn } from "../utils"

import { GLabel } from "../label"
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconCross } from "@pegadaian/gwind-ic/src/assets/IconsSource"

const props = defineProps<{
    class?: HTMLAttributes["class"]
    label?: string
}>()

const emits = defineEmits<{
    (e: "close"): void
}>()

const close = () => {
    emits("close")
}
</script>

<template>
    <div class="drawer-header" :class="cn('flex justify-between border-b-black-200 border-b-1 p-4 items-center', props.class)">
        <GLabel class="text-lambda font-bold">{{ label }}</GLabel>
        <GIcon :icon="GIconCross" class="w-6 cursor-pointer" @click="close" />
    </div>
</template>

<style scoped>
.drawer-content {
    transition: transform 0.3s ease;
}
</style>
