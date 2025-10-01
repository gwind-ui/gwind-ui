<script setup lang="ts">
import type { SwitchRootProps, SwitchRootEmits } from "reka-ui"
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<SwitchRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <SwitchRoot v-bind="forwarded" :class="cn(`w-10 h-[14px] cursor-pointer bg-black-400 flex items-center shadow-sm rounded-full data-[state=checked]:bg-lime-200 disabled:cursor-not-allowed`, props.class)">
        <SwitchThumb :class="cn(`w-5 h-5 bg-white drop-shadow-1 rounded-full transition-all duration-100 translate-x-0 data-[state=checked]:bg-lime-500 data-[state=checked]:translate-x-[110%]`)" />
    </SwitchRoot>
</template>
