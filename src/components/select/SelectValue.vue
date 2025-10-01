<script setup lang="ts">
/* eslint-disable */
import { SelectValue, type SelectValueProps } from "reka-ui"

const props = defineProps<SelectValueProps>()
</script>

<template>
    <SelectValue v-bind="props">
        <slot />
    </SelectValue>
</template>
