<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"
import { type ToastVariants, toastVariants } from "."
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconCross } from "@pegadaian/gwind-ic/src/assets/IconsSource"
import { ToastProvider, ToastRoot, ToastProviderProps, ToastRootEmits, ToastRootProps, useForwardPropsEmits, ToastClose, ToastViewport, Primitive } from "reka-ui"

const props = withDefaults(
    defineProps<
        ToastProviderProps &
            ToastRootProps & {
                class?: HTMLAttributes["class"]
                variant?: Exclude<ToastVariants["variant"], "default">
                closeAble?: boolean
                closeTapOutside?: boolean
            }
    >(),
    {
        closeAble: true,
        closeTapOutside: true,
    }
)

const emits = defineEmits<ToastRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <ToastProvider>
        <teleport to="body">
            <Primitive as="BgToast" v-if="props.open" @click="() => closeTapOutside && emits('update:open', false)" :class="cn(`fixed top-0 h-full w-full bg-black-800/50 mobile:hidden`)"></Primitive>
        </teleport>
        <slot name="triggerToast" />
        <ToastRoot v-bind="forwarded" :class="cn(toastVariants({ variant }), props.class)">
            <div class="flex flex-col w-full">
                <slot />
            </div>
            <ToastClose v-if="closeAble" :class="cn(`text-black-50 flex items-start h-full hover:text-black-60 focus:outline-hidden`)">
                <GIcon :icon="GIconCross" weight="outline" class="w-[18px] text-white hover:cursor-pointer" />
            </ToastClose>
        </ToastRoot>
        <teleport to="body">
            <ToastViewport
                :class="
                    cn(
                        'fixed bottom-0 flex flex-col gap-2 w-full z-[2147483647] list-none outline-none',
                        'mobile:top-[64px] mobile:bottom-auto mobile: mobile:right-auto mobile:left-1/2 mobile:transform mobile:-translate-x-1/2 mobile:w-fit'
                    )
                "
            />
        </teleport>
    </ToastProvider>
</template>
