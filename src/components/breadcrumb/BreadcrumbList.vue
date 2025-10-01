<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <ol :class="cn('flex flex-wrap items-center gap-1 break-words !text-sigma text-lime-500 sm:gap-2', props.class)">
        <slot />
    </ol>
</template>
