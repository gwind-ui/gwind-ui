<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { AccordionItem, type AccordionItemProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <AccordionItem v-bind="forwardedProps" :class="cn('rounded-md bg-white border border-black-200 flex flex-col', props.class)">
        <slot />
    </AccordionItem>
</template>
