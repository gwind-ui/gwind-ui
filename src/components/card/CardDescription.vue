<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <p :class="cn('!text-omicron text-black-500', props.class)">
        <slot />
    </p>
</template>
