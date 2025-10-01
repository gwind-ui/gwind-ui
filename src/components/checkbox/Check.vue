<script setup lang="ts">
/* eslint-disable */
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import { cn } from "../utils"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconCheck } from "@pegadaian/gwind-ic/src/assets/IconsSource"

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <CheckboxRoot
        v-bind="forwarded"
        :class="
            cn(
                'peer h-5 w-5 shrink-0 rounded-sm border-2 border-secondary hover:border-lime-500 hover:border-2 hover:cursor-pointer hover:cursor-pointerring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=checked]:text-primary-foreground data-[state=checked]:border-lime-500 data-[state=checked]:bg-lime-500',
                `disabled:cursor-not-allowed disabled:opacity-500 disabled:border-secondary disabled:data-[state=checked]:bg-black-400 disabled:data-[state=checked]:border-black-400`,
                props.class
            )
        "
    >
        <CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
            <slot>
                <GIcon :icon="GIconCheck" weight="outline" class="w-6 text-white"></GIcon>
            </slot>
        </CheckboxIndicator>
    </CheckboxRoot>
</template>
