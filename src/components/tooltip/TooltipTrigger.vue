<script setup lang="ts">
import type { TooltipProviderProps, TooltipPortalProps, TooltipRootProps, TooltipContentProps, TooltipTriggerProps, TooltipArrowProps, TooltipRootEmits, TooltipContentEmits } from "reka-ui"
import { TooltipTrigger, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<TooltipProviderProps & TooltipPortalProps & TooltipRootProps & TooltipContentProps & TooltipTriggerProps & TooltipArrowProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<TooltipRootEmits & TooltipContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <TooltipTrigger v-bind="forwarded" :class="cn(`inline-flex w-fit items-center justify-center outline-none cursor-pointer`)">
        <slot />
    </TooltipTrigger>
</template>
