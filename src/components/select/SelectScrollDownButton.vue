<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { ChevronDown } from "lucide-vue-next"
import { SelectScrollDownButton, type SelectScrollDownButtonProps, useForwardProps } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }>()

const forwardedProps = useForwardProps(props)
</script>

<template>
    <SelectScrollDownButton v-bind="forwardedProps" :class="cn('flex cursor-default items-center justify-center py-1', props.class)">
        <slot>
            <ChevronDown class="h-4 w-4" />
        </slot>
    </SelectScrollDownButton>
</template>
