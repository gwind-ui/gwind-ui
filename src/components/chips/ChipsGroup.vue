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
    <ToggleGroupRoot v-bind="forwarded" :class="cn(`flex gap-4 w-full overflow-x-scroll no-scrollbar`)">
        <slot />
    </ToggleGroupRoot>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
