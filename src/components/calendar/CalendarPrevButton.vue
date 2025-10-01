<script setup lang="ts">
/* eslint-disable */
import { buttonVariants } from "../button"
import { cn } from "../utils"
import { ChevronLeft } from "lucide-vue-next"
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarPrev :class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-full', props.class)" v-bind="forwardedProps">
        <slot>
            <ChevronLeft class="h-4 w-4" />
        </slot>
    </CalendarPrev>
</template>
