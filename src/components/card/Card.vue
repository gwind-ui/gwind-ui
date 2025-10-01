<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <div :class="cn('p-4 rounded-md bg-white text-black-800 drop-shadow-1', props.class)">
        <slot />
    </div>
</template>
