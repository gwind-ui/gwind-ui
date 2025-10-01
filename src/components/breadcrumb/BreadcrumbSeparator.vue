<script setup lang="ts">
/* eslint-disable */
import type { HTMLAttributes } from "vue"
import { cn } from "../utils"

const props = defineProps<{
    class?: HTMLAttributes["class"]
}>()
</script>

<template>
    <li role="presentation" aria-hidden="true" :class="cn('[&>svg]:w-5 [&>svg]:h-5', props.class)">
        <slot>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                    d="M7.49766 13.2292L10.731 9.99583L7.49766 6.7625C7.17266 6.4375 7.17266 5.9125 7.49766 5.5875C7.82266 5.2625 8.34766 5.2625 8.67266 5.5875L12.4977 9.4125C12.8227 9.7375 12.8227 10.2625 12.4977 10.5875L8.67266 14.4125C8.34766 14.7375 7.82266 14.7375 7.49766 14.4125C7.18099 14.0875 7.17266 13.5542 7.49766 13.2292Z"
                    fill="#BBBDC0"
                />
            </svg>
        </slot>
    </li>
</template>
