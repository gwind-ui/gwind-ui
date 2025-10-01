<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <div :class="cn('flex flex-col gap-y-4 text-left sm:text-left', props.class)">
        <slot />
    </div>
</template>
