<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarCell, type CalendarCellProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarCell
        :class="
            cn(
                'relative h-10 w-10 p-0 text-center !text-omicron hover:bg-lime-100 hover:rounded-full [&:has([data-selected])]:rounded-full [&:has([data-selected])]:bg-lime-500 [&:has([data-selected][data-outside-view])]:bg-lime-100 [&:has([data-selected][data-outside-view])]:rounded-full',
                props.class
            )
        "
        v-bind="forwardedProps"
    >
        <slot />
    </CalendarCell>
</template>
