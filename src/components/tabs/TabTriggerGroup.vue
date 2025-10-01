<script setup lang="ts">
/* eslint-disable */
import type { TabsListProps, TabsIndicatorProps } from "reka-ui"
import { TabsIndicator, TabsList } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<TabsListProps & TabsIndicatorProps & { class?: HTMLAttributes["class"] }>()
</script>

<template>
    <TabsList v-bind="props" :class="cn(`flex border-b border-black-200`)">
        <TabsIndicator :class="cn(`absolute px-8 left-0 h-[2px] bottom-0 w-[--reka-tabs-indicator-size] translate-x-[--reka-tabs-indicator-position] translate-y-[1px] rounded-full transition-[width,transform] duration-300`)">
            <div :class="cn(`bg-lime-500 w-full h-full`)" />
        </TabsIndicator>
        <slot />
    </TabsList>
</template>
