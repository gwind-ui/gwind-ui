<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from "reka-ui"
import { useForwardPropsEmits, ToggleGroupRoot } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<ToggleGroupRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<ToggleGroupRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <ToggleGroupRoot v-bind="forwarded" :class="cn(`flex w-fit border border-black-200 rounded overflow-clip`)">
        <slot />
    </ToggleGroupRoot>
</template>
