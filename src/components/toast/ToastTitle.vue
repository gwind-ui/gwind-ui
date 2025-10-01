<script setup lang="ts">
/* eslint-disable */
import { computed, type HTMLAttributes } from "vue"
import { cn } from "../utils"
import { ToastTitle } from "reka-ui"

const toastTitle = computed(() => ({
    "mb-1 text-omicron font-bold leading-none tracking-tight": true,
}))

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <ToastTitle :class="cn(toastTitle, props.class)">
        <slot />
    </ToastTitle>
</template>
