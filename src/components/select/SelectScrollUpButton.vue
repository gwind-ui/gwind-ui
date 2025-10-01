<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { ChevronUp } from "lucide-vue-next"
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <SelectScrollUpButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
        <slot>
            <ChevronUp class="h-4 w-4" />
        </slot>
    </SelectScrollUpButton>
</template>
