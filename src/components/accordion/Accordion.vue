<script setup lang="ts">
/* eslint-disable */
import { AccordionRoot, type AccordionRootEmits, type AccordionRootProps, useForwardPropsEmits } from "reka-ui"

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <AccordionRoot v-bind="forwarded" class="flex flex-col gap-3">
        <slot />
    </AccordionRoot>
</template>
