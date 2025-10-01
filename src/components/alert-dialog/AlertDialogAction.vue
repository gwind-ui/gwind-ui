<script setup lang="ts">
/* eslint-disable */
import { GButton } from "../button"
import { cn } from "../utils"
import { type AlertDialogActionProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<AlertDialogActionProps & { class?: HTMLAttributes["class"]; variant?: string }>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})
</script>

<template>
    <Button v-bind="delegatedProps" :class="cn(GButton, props.class)" :variant="delegatedProps.variant" size="md">
        <slot />
    </Button>
</template>
