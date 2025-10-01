<script setup lang="ts">
import type { TagsInputItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"

import { reactiveOmit } from "@vueuse/core"
import { TagsInputItem, useForwardProps } from "reka-ui"
import { cn } from "../utils"

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <TagsInputItem
        v-bind="forwardedProps"
        :class="cn('flex px-2 py-[3px] gap-1 items-center rounded-sm bg-black-100 data-[state=active]:ring-ring data-[state=active]:ring-1 data-[state=active]:ring-offset-1 ring-offset-background', props.class)"
    >
        <slot />
    </TagsInputItem>
</template>
