<script setup lang="ts">
import type { ComboboxGroupProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxGroup, ComboboxLabel } from "reka-ui"
import { cn } from "../utils"

const props = defineProps<
    ComboboxGroupProps & {
        class?: HTMLAttributes["class"]
        heading?: string
    }
>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
    <ComboboxGroup data-slot="combobox-group" v-bind="delegatedProps" :class="cn('overflow-hidden p-4 pt-0 text-foreground', props.class)">
        <ComboboxLabel v-if="heading" class="px-2 py-1.5 font-regular !text-black-500 text-omega">
            {{ heading }}
        </ComboboxLabel>
        <slot />
    </ComboboxGroup>
</template>
