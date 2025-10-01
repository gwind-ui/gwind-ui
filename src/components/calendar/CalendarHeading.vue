<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarHeading, type CalendarHeadingProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<CalendarHeadingProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <CalendarHeading v-slot="{ headingValue }: { headingValue: string }" :class="cn('!text-lambda font-bold text-lime-500', props.class)" v-bind="forwardedProps">
        {{ headingValue }}
    </CalendarHeading>
</template>
