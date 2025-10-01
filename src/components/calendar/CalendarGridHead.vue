<script setup lang="ts">
/* eslint-disable */
import { CalendarGridHead, type CalendarGridHeadProps } from "reka-ui"

const props = defineProps<CalendarGridHeadProps>()
</script>

<template>
    <CalendarGridHead v-bind="props">
        <slot />
    </CalendarGridHead>
</template>
