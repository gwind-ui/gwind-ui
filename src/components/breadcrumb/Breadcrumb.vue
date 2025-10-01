<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <nav aria-label="breadcrumb" :class="cn(`py-4 border-b border-b-black-200`, props.class)">
        <slot />
    </nav>
</template>
