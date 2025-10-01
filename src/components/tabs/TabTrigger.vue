<script setup lang="ts">
import type { TabsTriggerProps } from "reka-ui"
import { TabsTrigger } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes["class"]; value: string | number }>()
</script>

<template>
    <TabsTrigger
        v-bind="props"
        :class="
            cn(
                `text-black-800 bg-white h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none  rounded-tl-md  hover:text-lime-500 data-[state=active]:text-lime-500 outline-none cursor-default outline-0 hover:cursor-pointer px-1 py-4 sm:py-3 focus-visible:shadow-black border-b-2 data-[state=active]:border-b-lime-500  border-b-transparent font-bold transition-all duration-100`
            )
        "
    >
        <slot />
    </TabsTrigger>
</template>
