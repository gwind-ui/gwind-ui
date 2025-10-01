<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { defineProps } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <div class="drawer-content p-4" :class="cn('bg-transparent', props.class)">
        <slot />
    </div>
</template>

<style scoped>
.drawer-content {
    transition: transform 0.3s ease;
}
</style>
