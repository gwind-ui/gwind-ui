<script setup lang="ts">
import type { ComboboxContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ComboboxContent, ComboboxPortal, useForwardPropsEmits } from "reka-ui"
import { cn } from "../utils"
import { ref, onMounted, watch } from "vue"

const props = withDefaults(defineProps<ComboboxContentProps & { class?: HTMLAttributes["class"]; open?: boolean }>(), {
    position: "popper",
    align: "center",
    sideOffset: 0,
})
// const emits = defineEmits<ComboboxContentEmits>()
const emits = defineEmits(["open", "close"])

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const anchorWidth = ref(0)
onMounted(() => {
    const anchor = document.querySelector('[data-slot="combobox-anchor"]') as HTMLElement | null
    anchorWidth.value = anchor?.offsetWidth ?? 0
})

// Deteksi perubahan state open dari ComboboxContent
watch(
    () => props.open,
    val => {
        if (val) emits("open", undefined)
        else emits("close", undefined)
    }
)
</script>

<template>
    <ComboboxPortal>
        <ComboboxContent
            data-slot="combobox-list"
            v-bind="forwarded"
            :style="{ minWidth: anchorWidth + 'px' }"
            :class="
                cn(
                    'z-50 rounded-md bg-white text-black-800 overflow-hidden drop-shadow-1 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                    props.class
                )
            "
            @open="emits('open')"
            @close="emits('close')"
        >
            <slot />
        </ComboboxContent>
    </ComboboxPortal>
</template>
