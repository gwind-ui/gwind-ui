<script setup lang="ts">
import { provide, toRef, type HTMLAttributes } from "vue"
import { cn } from "../utils"
import { Primitive } from "reka-ui"

const props = defineProps<{
    class?: HTMLAttributes["class"]
    type?: "ordered" | "unordered"
}>()

const listType = toRef(props, "type")
provide("listType", listType)
</script>

<template>
    <Primitive :as="props.type === `ordered` ? `ol` : `ul`" :class="cn(`flex flex-col gap-4`)">
        <slot />
    </Primitive>
</template>
