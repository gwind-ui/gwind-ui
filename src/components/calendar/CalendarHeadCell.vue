<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarHeadCell :class="cn('w-10 !text-sigma font-regular text-black-600', props.class)" v-bind="forwardedProps">
        <slot />
    </CalendarHeadCell>
</template>
