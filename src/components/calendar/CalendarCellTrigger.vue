<script setup lang="ts">
/* eslint-disable */
import { buttonVariants } from "../button"
import { cn } from "../utils"
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarCellTrigger
        :class="
            cn(
                buttonVariants({ variant: 'ghost' }),
                'h-10 w-10 p-0 font-regular rounded-full hover:bg-lime-500 hover:text-white',
                '[&[data-today]:not([data-selected])]:bg-lime-100 [&[data-today]:not([data-selected])]:text-lime-500',
                // Selected
                'data-selected:bg-lime-500 data-selected:text-primary-foreground data-selected:opacity-100 data-selected:hover:bg-lime-500 data-selected:hover:text-primary-foreground data-selected:focus:bg-lime-500 data-selected:focus:text-primary-foreground',
                // Disabled
                'data-disabled:text-black-500 data-disabled:opacity-100 data-disabled:hover:bg-transparent data-disabled:hover:text-black-600',
                // Unavailable
                'data-unavailable:text-destructive-foreground data-unavailable:line-through',
                // Outside months
                'data-outside-view:text-black-500 data-[outside-view]:hover:bg-gray-200 [&[data-outside-view][data-selected]]:text-white',
                props.class
            )
        "
        v-bind="forwardedProps"
    >
        <slot />
    </CalendarCellTrigger>
</template>
