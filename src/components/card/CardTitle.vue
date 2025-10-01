<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <h3 :class="cn('!text-omicron font-bold leading-none tracking-tight', props.class)">
        <slot />
    </h3>
</template>
