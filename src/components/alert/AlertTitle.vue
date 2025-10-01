<script setup lang="ts">
/* eslint-disable */
import { computed, type HTMLAttributes } from "vue"
import { cn } from "../utils"

const alertTitle = computed(() => ({
    "mb-1 text-omicron font-bold leading-none tracking-tight": true,
}))

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <h5 :class="cn(alertTitle, props.class)">
        <slot />
    </h5>
</template>
