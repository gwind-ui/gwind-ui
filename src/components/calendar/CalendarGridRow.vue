<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarGridRow, type CalendarGridRowProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarGridRowProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarGridRow :class="cn('flex gap-2', props.class)" v-bind="forwardedProps">
        <slot />
    </CalendarGridRow>
</template>
