<script setup lang="ts">
import type { ToggleEmits, ToggleProps } from "reka-ui"
import { useForwardPropsEmits, Toggle } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<ToggleProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<ToggleEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <Toggle
        v-bind="forwarded"
        :class="
            cn(
                `hover:cursor-pointer text-black-600 flex py-2 px-2 items-center justify-center rounded bg-white border border-black-200`,
                `hover:bg-lime-100`,
                `data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500`,
                props.class
            )
        "
    >
        <div class="h-6 w-6">
            <slot />
        </div>
    </Toggle>
</template>
