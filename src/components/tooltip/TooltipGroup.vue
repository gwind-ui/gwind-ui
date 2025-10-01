<script setup lang="ts">
/* eslint-disable */
import type { TooltipProviderProps, TooltipPortalProps, TooltipRootProps, TooltipContentProps, TooltipTriggerProps, TooltipArrowProps, TooltipRootEmits, TooltipContentEmits } from "reka-ui"
import { TooltipProvider, TooltipRoot, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<TooltipProviderProps & TooltipPortalProps & TooltipRootProps & TooltipContentProps & TooltipTriggerProps & TooltipArrowProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<TooltipRootEmits & TooltipContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <TooltipProvider v-bind="forwarded">
        <TooltipRoot v-bind="forwarded">
            <slot />
        </TooltipRoot>
    </TooltipProvider>
</template>
