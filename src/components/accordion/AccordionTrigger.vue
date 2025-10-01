<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"
import { GIconChevronDown } from "@pegadaian/gwind-ic/src/assets/IconsSource"
import { GIcon } from "@pegadaian/gwind-ic/src/"

const accordionClasses = computed(() => ({
    "flex flex-1 items-center justify-between p-3 !text-omicron text-black-600 font-bold transition-all cursor-pointer data-[state=open]:text-lime-500 [&[data-state=open]>svg]:rotate-180": true,
}))

const chevronClasses = computed(() => ({
    "w-[30px] text-black-60 shrink-0 transition-transform duration-200": true,
}))

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <AccordionHeader class="flex">
        <AccordionTrigger v-bind="delegatedProps" :class="cn(accordionClasses, props.class)">
            <slot />
            <slot name="icon">
                <GIcon :class="cn(chevronClasses)" :icon="GIconChevronDown" class="w-6"></GIcon>
            </slot>
        </AccordionTrigger>
    </AccordionHeader>
</template>
