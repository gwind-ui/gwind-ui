<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"
import { Primitive, type PrimitiveProps } from "reka-ui"

const props = withDefaults(defineProps<PrimitiveProps & { class?: HTMLAttributes["class"] }>(), {
    as: "a",
})
</script>

<template>
    <Primitive :as="as" :as-child="asChild" :class="cn('transition-colors hover:text-lime-800', props.class)">
        <slot />
    </Primitive>
</template>
