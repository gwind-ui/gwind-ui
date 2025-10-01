<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <span role="link" aria-disabled="true" aria-current="page" :class="cn('!text-sigma font-default text-black-800', props.class)">
        <slot />
    </span>
</template>
