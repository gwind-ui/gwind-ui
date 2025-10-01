<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"
import { type BadgeVariants, badgeVariants } from "."

const props = withDefaults(
    defineProps<{
        variant?: BadgeVariants["variant"]
        class?: HTMLAttributes["class"]
        modelValue?: boolean
    }>(),
    {
        modelValue: true,
    }
)
</script>

<template>
    <div :class="cn(badgeVariants({ variant: props.variant }), !props.modelValue && 'hidden', props.class)">
        <slot />
        <div :class="cn(`additional-item cursor-pointer ml-3`, !$slots.rightIcon && `hidden`)">
            <slot name="rightIcon" />
        </div>
    </div>
</template>
