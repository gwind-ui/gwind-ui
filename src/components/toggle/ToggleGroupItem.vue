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
                `hover:cursor-pointer text-black-600 flex px-2 py-2 items-center justify-center border-r border-r-black-200 last:border-r-transparent bg-white text-base focus:z-10`,
                `hover:bg-lime-100`,
                `data-[state=on]:bg-lime-100 data-[state=on]:text-lime-500`,
                props.class
            )
        "
    >
        <div class="h-6 w-fit min-w-6">
            <slot />
        </div>
    </ToggleGroupItem>
</template>
