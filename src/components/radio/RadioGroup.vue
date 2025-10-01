<script setup lang="ts">
/* eslint-disable */
import { RadioGroupRoot, RadioGroupRootEmits, RadioGroupRootProps, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<
    RadioGroupRootProps & {
        class?: HTMLAttributes["class"]
        label: string
    }
>()

// Just remove class from props, no need for computed
const { class: _class, ...delegatedProps } = props

const emits = defineEmits<RadioGroupRootEmits>()
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <RadioGroupRoot v-bind="props" :class="cn(`flex flex-col gap-2.5`, props.class)">
        <slot />
    </RadioGroupRoot>
</template>
