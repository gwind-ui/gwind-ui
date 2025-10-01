<script setup lang="ts">
import type { TagsInputItemDeleteProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { TagsInputItemDelete, useForwardProps } from "reka-ui"
import { cn } from "../utils"

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <TagsInputItemDelete v-bind="forwardedProps" :class="cn('flex rounded bg-transparent', props.class)">
        <slot>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.29492 5.29492C5.66533 4.9247 6.25262 4.90273 6.64844 5.22949L6.71973 5.29492L10.416 8.99121L14.1123 5.29492L14.1846 5.22949C14.5804 4.90281 15.1677 4.92463 15.5381 5.29492C15.9316 5.68847 15.9316 6.32715 15.5381 6.7207L11.8408 10.416L15.5381 14.1133C15.9314 14.5068 15.9314 15.1446 15.5381 15.5381C15.1677 15.9085 14.5805 15.9303 14.1846 15.6035L14.1123 15.5381L10.416 11.8418L6.71973 15.5381L6.64844 15.6035C6.25255 15.9303 5.66532 15.9085 5.29492 15.5381C4.90148 15.1446 4.90151 14.5068 5.29492 14.1133L8.99023 10.416L5.29492 6.7207C4.90137 6.32715 4.90137 5.68847 5.29492 5.29492Z"
                    fill="#58585B"
                />
            </svg>
        </slot>
    </TagsInputItemDelete>
</template>
