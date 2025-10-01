<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <li :class="cn('inline-flex items-center gap-1', props.class)">
        <slot />
    </li>
</template>
