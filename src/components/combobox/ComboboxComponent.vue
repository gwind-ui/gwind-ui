<script setup lang="ts">
/* eslint-disable */
import { Check } from "lucide-vue-next"
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { cn } from "../utils"
import { GButton } from "../button"
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxTrigger } from "./"
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconChevronDown } from "@pegadaian/gwind-ic/src/assets/IconsSource"

const props = defineProps<{
    modelValue?: { value: string; label: string } | null
    options: Array<{ value: string; label: string }>
    placeholder?: string
    isOpen?: boolean
}>()

const emit = defineEmits<{
    (event: "update:modelValue", value: { value: string; label: string } | null): void
}>()

const value = computed({
    get: () => props.modelValue,
    set: val => emit("update:modelValue", val ?? null),
})

const isListOpen = ref(false)

onMounted(() => {
    const observer = new MutationObserver(() => {
        const content = document.querySelector('[data-slot="combobox-list"]')
        isListOpen.value = !!(content && content.getAttribute("data-state") === "open")
    })
    observer.observe(document.body, { childList: true, subtree: true, attributes: true })
    onBeforeUnmount(() => observer.disconnect())
})

function handleListOpen() {
    isListOpen.value = true
}
function handleListClose() {
    isListOpen.value = false
}
</script>

<template>
    <Combobox v-model="value" by="label">
        <ComboboxAnchor as-child>
            <ComboboxTrigger as-child>
                <GButton variant="combobox" size="lg" :class="['combobox', 'font-regular', 'justify-between', { 'border-lime-500': isListOpen }, { 'active:bg-white': isListOpen }]">
                    <span :class="value?.label ? 'text-black-800' : 'text-black-500'">
                        {{ value?.label ?? props.placeholder }}
                    </span>
                    <GIcon :icon="GIconChevronDown" :class="['w-6 h-6 text-black-600', 'transition-transform', 'duration-400', 'transform', { 'rotate-180': isListOpen }]"></GIcon>
                </GButton>
            </ComboboxTrigger>
        </ComboboxAnchor>

        <ComboboxList @open="handleListOpen" @close="handleListClose">
            <div class="px-4 pt-4" :class="props.options != null ? '' : 'pb-4'">
                <ComboboxInput :placeholder="props.placeholder" />
            </div>

            <ComboboxEmpty> Nothing found. </ComboboxEmpty>

            <ComboboxGroup v-if="props.options && props.options.length > 0">
                <ComboboxItem v-for="option in props.options" :key="option.value" :value="option">
                    {{ option.label }}
                    <ComboboxItemIndicator>
                        <Check :class="cn('ml-auto h-4 w-4 text-lime-500')" />
                    </ComboboxItemIndicator>
                </ComboboxItem>
            </ComboboxGroup>
        </ComboboxList>
    </Combobox>
</template>
