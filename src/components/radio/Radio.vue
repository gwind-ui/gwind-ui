<script setup lang="ts">
/* eslint-disable */
import { RadioGroupIndicator, RadioGroupItem, RadioGroupItemProps, useForwardPropsEmits, RadioGroupRootProps, RadioGroupRootEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<RadioGroupItemProps & RadioGroupRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<RadioGroupRootEmits>()

const { class: _class, ...delegatedProps } = props
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <RadioGroupItem
        :class="
            cn(
                `w-5 h-5 border-2 border-black-500 rounded-full cursor-pointer hover:border-lime-500 data-[state=checked]:border-lime-500 data-[state=checked]:bg-lime-500 data-[state=unchecked]:bg-transparent data-[state=checked]:disabled:bg-black-500 data-[state=checked]:disabled:border-black-500  disabled:hover:border-black-500 disabled:bg-black-500 disabled:cursor-not-allowed transition-colors duration-100 ease-in-out`,
                props.disabled && 'bg-black-500',
                props.class
            )
        "
        v-bind="forwarded"
    >
        <RadioGroupIndicator :class="cn('flex items-center justify-center w-full h-full relative after:block after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-white')" />
    </RadioGroupItem>
</template>
