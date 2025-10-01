<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarGrid, type CalendarGridProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarGridProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarGrid :class="cn('w-full border-collapse space-y-1', props.class)" v-bind="forwardedProps">
        <slot />
    </CalendarGrid>
</template>
