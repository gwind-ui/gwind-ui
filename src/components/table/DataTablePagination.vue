<script setup lang="ts">
import { computed, HTMLAttributes } from "vue"
import { defineProps, defineEmits } from "vue"
import { PaginationRoot, PaginationList, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationRootProps, PaginationRootEmits, useForwardPropsEmits } from "reka-ui"
import { cn } from "../utils"
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconChevronLeft, GIconChevronRight } from "@pegadaian/gwind-ic/src/assets/IconsSource"
/* eslint-disable */
const props = defineProps<PaginationRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<PaginationRootEmits>()

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props

    return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
    <PaginationRoot v-bind="forwarded" v-slot="{ pageCount }">
        <PaginationList v-slot="{ items }" class="flex items-center gap-3 text-stone-700">
            <PaginationPrev class="min-w-10 h-10 border border-black-200 rounded-[6px] flex items-center justify-center bg-transparent hover:bg-white transition hover:cursor-pointer disabled:cursor-not-allowed">
                <GIcon :class="cn(`w-6 text-black-600`, props.page === 1 && `text-black-400`)" :icon="GIconChevronLeft"></GIcon>
            </PaginationPrev>
            <template v-for="(page, index) in items">
                <PaginationListItem
                    v-if="page.type === 'page'"
                    :key="index"
                    class="min-w-10 h-10 border bg-white border-black-200 rounded-[6px] data-[selected]:bg-lime-500 data-[selected]:border-lime-500 data-[selected]:text-white hover:bg-white transition hover:cursor-pointer hover:text-lime-500"
                    :value="page.value"
                >
                    {{ page.value }}
                </PaginationListItem>
                <PaginationEllipsis v-else :key="page.type" :index="index" class="bg-white w-10 h-10 border border-black-200 rounded-[6px] flex items-center justify-center"> &#8230; </PaginationEllipsis>
            </template>
            <PaginationNext class="min-w-10 h-10 border border-black-200 rounded-[6px] flex items-center justify-center bg-white transition hover:cursor-pointer disabled:cursor-not-allowed">
                <GIcon :class="cn(`w-6 text-black-600`, props.total && pageCount === props.page && `!text-black-400`)" :icon="GIconChevronRight"></GIcon>
            </PaginationNext>
        </PaginationList>
    </PaginationRoot>
</template>

<style scoped></style>
