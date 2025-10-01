<script setup lang="ts">
/* eslint-disable */
import { AvatarFallback, type AvatarFallbackProps } from "reka-ui"

const props = defineProps<AvatarFallbackProps>()
</script>

<template>
    <AvatarFallback v-bind="props">
        <slot />
    </AvatarFallback>
</template>
