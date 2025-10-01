<script setup lang="ts">
/* eslint-disable */
import { CalendarGridBody, type CalendarGridBodyProps } from "reka-ui"

const props = defineProps<CalendarGridBodyProps>()
</script>

<template>
    <CalendarGridBody v-bind="props">
        <slot />
    </CalendarGridBody>
</template>
