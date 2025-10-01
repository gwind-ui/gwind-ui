<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"
import { Primitive, type PrimitiveProps } from "reka-ui"
import { type ButtonVariants, buttonVariants } from "."

interface Props extends PrimitiveProps {
    variant?: ButtonVariants["variant"]
    size?: ButtonVariants["size"]
    class?: HTMLAttributes["class"]
    asChild?: boolean
    disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    as: "button",
    disabled: false,
})

const { variant, size, disabled, asChild } = props
</script>

<template>
    <Primitive v-ripple data-slot="button" :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size, state: disabled ? 'disabled' : undefined }), props.class)" :disabled="disabled">
        <slot />
    </Primitive>
</template>
