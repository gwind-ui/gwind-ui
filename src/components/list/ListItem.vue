<script setup lang="ts">
import { inject, Ref, type HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
    item?: string | object | number
    index: number
}>()

const listType = inject<Ref<"ordered" | "unordered">>("listType")
</script>

<template>
    <li
        :data-number="listType === `ordered` ? props.index + 1 : `•`"
        :class="
            cn(
                `relative flex flex-row gap-4 text-omicron before:items-center before:flex before:justify-center before:w-6 before:h-6 `,
                listType === `ordered` ? `ordered-item before:font-bold before:bg-lime-100 before:rounded-full before:text-lime-500` : `unordered-item before:text-lime-500`,
                $slots.customIcon && `before:hidden`,
                props.class
            )
        "
    >
        <div v-if="$slots.customIcon" :class="cn(`flex flex-row gap-4 items-center`)">
            <div :class="cn(`w-6 h-6 rounded-full bg-lime-100 text-lime-500 flex items-center px-[4px]`)">
                <slot name="customIcon" />
            </div>
            <slot />
        </div>
        <div v-else><slot /></div>
    </li>
</template>

<style scoped>
.ordered-item::before {
    content: attr(data-number);
}

.unordered-item::before {
    content: attr(data-number);
}
</style>
