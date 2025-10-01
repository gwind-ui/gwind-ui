<script setup lang="ts">
/* eslint-disable */
import { computed, type HTMLAttributes } from "vue"
import { cn } from "../utils"

const AlertDescription = computed(() => ({
    "text-sigma font-regular [&_p]:leading-relaxed": true,
}))

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <div :class="cn(AlertDescription, props.class)">
        <slot />
    </div>
</template>
