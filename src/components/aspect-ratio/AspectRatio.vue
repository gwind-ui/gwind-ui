<script setup lang="ts">
/* eslint-disable */
import { AspectRatio, type AspectRatioProps } from "reka-ui"

const props = defineProps<AspectRatioProps>()
</script>

<template>
    <AspectRatio v-bind="props">
        <slot />
    </AspectRatio>
</template>
