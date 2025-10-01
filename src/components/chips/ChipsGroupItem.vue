<script setup lang="ts">
import type { ToggleGroupItemProps } from "reka-ui"
import { useForwardPropsEmits, ToggleGroupItem } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<ToggleGroupItemProps & { class?: HTMLAttributes["class"] }>()

const forwarded = useForwardPropsEmits(props)
</script>

<template>
    <ToggleGroupItem
        v-bind="forwarded"
        :class="
            cn(
                `hover:cursor-pointer rounded-sm text-black-600 flex px-3 py-1 items-center justify-center border border-black-200 bg-white text-base focus:z-10`,
                `hover:bg-lime-100`,
                `data-[state=on]:bg-lime-100 data-[state=on]:border-lime-500 data-[state=on]:text-lime-500`,
                props.class
            )
        "
    >
        <div class="h-6 w-fit min-w-[120px]">
            <slot />
        </div>
    </ToggleGroupItem>
</template>
