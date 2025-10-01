<script lang="ts" setup>
/* eslint-disable */
import { watch, defineEmits, defineProps, computed } from "vue"
import DrawerContent from "./DrawerContent.vue"
import DrawerOverlay from "./DrawerOverlay.vue"
import DrawerHeader from "./DrawerHeader.vue"

const props = defineProps<{
    modelValue: boolean
    label?: string
    position?: "top" | "bottom" | "left" | "right"
}>()

const label = props.label ?? "Drawer Header / Bottom Sheet"

const emits = defineEmits<{
    (e: "update:modelValue", value: boolean): void
}>()

const closeDrawer = () => {
    emits("update:modelValue", false)
}

// Default position: bottom
const drawerPosition = computed(() => props.position ?? "bottom")

// Sync with parent
watch(
    () => props.modelValue,
    () => {}
)
</script>

<template>
    <DrawerOverlay :isVisible="modelValue" @close="closeDrawer" />
    <transition :name="drawerPosition === 'bottom' ? 'slide-up' : drawerPosition === 'top' ? 'slide-down' : 'slide-side'">
        <div
            v-if="modelValue"
            class="fixed z-50 bg-white shadow-2xl"
            :class="{
                'inset-x-0 bottom-0 max-h-[80vh] rounded-t-2xl': drawerPosition === 'bottom',
                'inset-x-0 top-0 max-h-[80vh] rounded-b-lg': drawerPosition === 'top',
                'inset-y-0 left-0 rounded-r-2xl w-[320px]': drawerPosition === 'left',
                'inset-y-0 right-0 rounded-l-2xl w-[320px]': drawerPosition === 'right',
            }"
            style="min-height: 320px"
        >
            <DrawerHeader :isVisible="modelValue" @close="closeDrawer" :label="label" />
            <DrawerContent>
                <slot />
            </DrawerContent>
        </div>
    </transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s;
}
.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s;
}
.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-side-enter-active,
.slide-side-leave-active {
    transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s;
}
.slide-side-enter-from,
.slide-side-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-side-enter-to,
.slide-side-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>
