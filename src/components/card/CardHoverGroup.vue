<script setup lang="ts">
import { HoverCardRoot, useForwardPropsEmits } from "reka-ui"
import type { HoverCardRootProps, HoverCardRootEmits } from "reka-ui"
import { HTMLAttributes } from "vue"

const props = defineProps<HoverCardRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<HoverCardRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <HoverCardRoot v-bind="forwarded">
        <slot />
    </HoverCardRoot>
</template>
