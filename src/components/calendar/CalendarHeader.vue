<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarHeader, type CalendarHeaderProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarHeaderProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarHeader :class="cn('relative flex w-full items-center justify-between pt-1', props.class)" v-bind="forwardedProps">
        <slot />
    </CalendarHeader>
</template>
