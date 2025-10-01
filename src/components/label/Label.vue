<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { Label, type LabelProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<LabelProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <Label v-bind="delegatedProps" :class="cn('text-omicron font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-black-80/50', props.class)">
        <slot />
    </Label>
</template>
