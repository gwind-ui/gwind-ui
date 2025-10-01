<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { AccordionContent, type AccordionContentProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <AccordionContent v-bind="delegatedProps" class="overflow-hidden px-3 !text-omicron text-black-600 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div :class="cn('pb-4 pt-0', props.class)">
            <slot />
        </div>
    </AccordionContent>
</template>
