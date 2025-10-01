<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { AlertDialogContent, type AlertDialogContentEmits, type AlertDialogContentProps, AlertDialogOverlay, AlertDialogPortal, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes } from "vue"

const props = defineProps<AlertDialogContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<AlertDialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <AlertDialogPortal>
        <AlertDialogOverlay class="fixed inset-0 z-50 bg-black-800/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <transition name="fade-scale">
            <AlertDialogContent
                v-bind="forwarded"
                :class="
                    cn(
                        'rounded-md fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 bg-background p-4 drop-shadow-1 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                        props.class
                    )
                "
            >
                <slot />
            </AlertDialogContent>
        </transition>
    </AlertDialogPortal>
</template>

<script lang="ts">
import { DefineComponent, defineComponent } from "vue"

export default defineComponent({
    name: "AlertDialogContent",
}) as DefineComponent
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition:
        opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>
