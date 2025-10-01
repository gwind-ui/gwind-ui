<script setup lang="ts">
/* eslint-disable */
import { computed, type HTMLAttributes } from "vue"
import { cn } from "../utils"
import { ToastDescription } from "reka-ui"

const toastDescription = computed(() => ({
    "text-sigma font-regular [&_p]:leading-relaxed": true,
}))

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <ToastDescription :class="cn(toastDescription, props.class)">
        <slot />
    </ToastDescription>
</template>
