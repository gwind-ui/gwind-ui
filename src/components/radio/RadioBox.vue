<script setup lang="ts">
/* eslint-disable */
import { RadioGroupItem, RadioGroupRootEmits, RadioGroupRootProps, useForwardPropsEmits, type RadioGroupItemProps } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { GRadio } from "."
import { cn } from "../utils"

const props = defineProps<
    RadioGroupItemProps &
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
    <RadioGroupItem
        v-bind="forwarded"
        :class="
            cn(
                'p-3 border  rounded-md flex items-center gap-2 border-black-200 hover:cursor-pointer hover:border-lime-500 data-[state=checked]:border-lime-500 data-[state=checked]:bg-lime-100 data-[state=checked]:text-lime-500 disabled:text-black-500',
                `data-[state=checked]:disabled:bg-transparent data-[state=checked]:disabled:border-black-200 data-[state=checked]:disabled:text-black-500 disabled:cursor-not-allowed disabled:hover:border-black-200`,
                props.class
            )
        "
    >
        <GRadio v-bind="forwarded" />
        <label :class="cn(`cursor-pointer`, forwarded.disabled && `cursor-not-allowed`)">{{ props.label }}</label>
    </RadioGroupItem>
</template>
