<script setup lang="ts">
import { HoverCardTrigger } from "reka-ui"
import type { HoverCardTriggerProps } from "reka-ui"
import { HTMLAttributes } from "vue"

const props = defineProps<HoverCardTriggerProps & { class?: HTMLAttributes["class"] }>()
</script>

<template>
    <HoverCardTrigger v-bind="props" class="relative inline-block">
        <slot />
    </HoverCardTrigger>
</template>
