<script lang="ts" setup>
/* eslint-disable */
import { defineProps, defineEmits } from "vue"

const props = defineProps<{ isVisible: boolean }>()

const emits = defineEmits<{ (e: "close"): void }>()

const handleOverlayClick = () => {
    emits("close")
}
</script>

<template>
    <div v-if="props.isVisible" class="fixed inset-0 z-40 bg-black-800 opacity-50" @click="handleOverlayClick"></div>
</template>

<style scoped>
/* Add any specific styles for the overlay here */
</style>
