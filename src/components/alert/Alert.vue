<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"
import { type AlertVariants, alertVariants } from "."
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconCross } from "@pegadaian/gwind-ic/src/assets/IconsSource"

const props = defineProps<{
    class?: HTMLAttributes["class"]
    variant?: Exclude<AlertVariants["variant"], "default">
}>()
</script>

<template>
    <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
        <button className="absolute top-4 right-4 text-black-50 hover:text-black-60 focus:outline-hidden" aria-label="Close">
            <GIcon :icon="GIconCross" weight="outline" class="w-[18px] text-black-80 hover:cursor-pointer text-black-600"></GIcon>
        </button>
        <slot />
    </div>
</template>
