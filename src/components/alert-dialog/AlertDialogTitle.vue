<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { AlertDialogTitle, type AlertDialogTitleProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<AlertDialogTitleProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <AlertDialogTitle v-bind="delegatedProps" :class="cn('text-omicron font-bold', props.class)">
        <slot />
    </AlertDialogTitle>
</template>
