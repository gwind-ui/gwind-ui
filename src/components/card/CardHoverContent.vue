<script setup lang="ts">
import { HoverCardArrow, HoverCardContent, HoverCardPortal } from "reka-ui"
import type { HoverCardContentProps, HoverCardPortalProps, HoverCardArrowProps } from "reka-ui"
import { cn } from "../utils"
import { HTMLAttributes } from "vue"

const props = defineProps<HoverCardContentProps & HoverCardPortalProps & HoverCardArrowProps & { class?: HTMLAttributes["class"] }>()
</script>

<template>
    <HoverCardPortal v-bind="props">
        <transition name="fade-scale">
            <HoverCardContent v-bind="props" :side-offset="4" :class="cn(`bg-white p-4 drop-shadow-1 rounded-lg`, props.class)">
                <slot />
                <HoverCardArrow rounded class="fill-white w-6 h-[9px]" :width="12" :height="6" />
            </HoverCardContent>
        </transition>
    </HoverCardPortal>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: opacity 0.3s cubic-bezier(0.2, 0, 0.2, 1);
}
.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
}
.fade-scale-enter-to,
.fade-scale-leave-from {
    opacity: 1;
}
</style>
