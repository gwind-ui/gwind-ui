<script setup lang="ts">
/* eslint-disable */
import { AvatarImage, type AvatarImageProps } from "reka-ui"

const props = defineProps<AvatarImageProps>()
</script>

<template>
    <AvatarImage v-bind="props" class="h-full w-full object-cover" />
</template>
