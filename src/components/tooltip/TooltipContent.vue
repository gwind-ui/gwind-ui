<script setup lang="ts">
/* eslint-disable */
import type { TooltipProviderProps, TooltipPortalProps, TooltipRootProps, TooltipContentProps, TooltipTriggerProps, TooltipArrowProps, TooltipRootEmits, TooltipContentEmits } from "reka-ui"
import { TooltipPortal, TooltipContent, TooltipArrow, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<TooltipProviderProps & TooltipPortalProps & TooltipRootProps & TooltipContentProps & TooltipTriggerProps & TooltipArrowProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<TooltipRootEmits & TooltipContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <TooltipPortal v-bind="forwarded">
        <TooltipContent
            :class="cn(`max-w-[360px] drop-shadow-1 text-black-800 text-sigma rounded-[12px] bg-white p-4`, forwarded.side === `top` || forwarded.side === `bottom` ? `translate-x-24` : `translate-x-0`, props.class)"
            v-bind="forwarded"
            :side="forwarded.side ? forwarded.side : `bottom`"
        >
            <slot />

            <TooltipArrow :class="cn('fill-white w-6 h-[9px]', forwarded.side === 'top' ? '-translate-x-24' : forwarded.side === 'bottom' ? 'translate-x-24' : 'translate-x-0')" v-bind="forwarded" />
        </TooltipContent>
    </TooltipPortal>
</template>
