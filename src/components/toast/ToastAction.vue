<script setup lang="ts">
import type { ToastActionProps } from "reka-ui"
import { ToastAction } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<ToastActionProps & { class?: HTMLAttributes["class"] }>()
</script>

<template>
    <ToastAction v-bind="props" :class="cn(props.class)">
        <slot />
    </ToastAction>
</template>
