<template>
    <div class="relative overflow-hidden w-full">
        <div class="flex" :class="{ 'transition-transform duration-500 ease-in-out': enableTransition }" :style="{ transform: `translateX(-${currentPosition * 100}%)` }" @transitionend="handleTransitionEnd">
            <!-- Clone last slide at the start -->
            <div class="w-full flex-shrink-0" v-if="slides.length">
                <div class="w-full min-h-98 flex flex-col items-center justify-center bg-black-200 rounded-lg relative">
                    <slot :slide="slides[slides.length - 1]" :index="slides.length - 1">
                        {{ slides[slides.length - 1] }}
                    </slot>
                    <div class="absolute left-4 bottom-16 text-left">
                        <div v-if="header && header.length" class="font-bold text-zeta mb-1">{{ header[header.length - 1] }}</div>
                        <div v-if="subHeader && subHeader.length" class="text-black-800 mb-2">{{ subHeader[subHeader.length - 1] }}</div>
                    </div>
                </div>
            </div>

            <!-- Real slides -->
            <div v-for="(slide, i) in slides" :key="i" class="w-full flex-shrink-0">
                <div class="w-full min-h-98 flex flex-col items-center justify-center bg-black-200 rounded-lg relative">
                    <slot :slide="slide" :index="i">{{ slide }}</slot>
                    <div class="absolute left-4 bottom-16 text-left">
                        <div v-if="header && header.length" class="font-bold text-zeta mb-1">{{ header[i] }}</div>
                        <div v-if="subHeader && subHeader.length" class="text-black-800 mb-2">{{ subHeader[i] }}</div>
                    </div>
                </div>
            </div>

            <!-- Clone first slide at the end -->
            <div class="w-full flex-shrink-0" v-if="slides.length">
                <div class="w-full min-h-98 flex flex-col items-center justify-center bg-black-200 rounded-lg relative">
                    <slot :slide="slides[0]" :index="0">
                        {{ slides[0] }}
                    </slot>
                    <div class="absolute left-4 bottom-16 text-left">
                        <div v-if="header && header.length" class="font-bold text-zeta mb-1">{{ header[0] }}</div>
                        <div v-if="subHeader && subHeader.length" class="text-black-800 mb-2">{{ subHeader[0] }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Arrow Navigation -->
        <template v-if="variant === 'arrow' || variant === 'both'">
            <div class="absolute lg:w-[20%] left-4 bottom-4 flex justify-between gap-2 z-10">
                <!-- Arrow buttons now below subHeader, at bottom left -->
                <button @click="prev" class="p-2 rounded-full border border-black-400 w-10 h-10 bg-white cursor-pointer" aria-label="Previous slide">&#8592;</button>
                <button @click="next" class="p-2 rounded-full border border-black-400 w-10 h-10 bg-white cursor-pointer" aria-label="Next slide">&#8594;</button>
            </div>
        </template>

        <!-- Indicator Navigation -->
        <template v-if="variant === 'indicator' || variant === 'both'">
            <div class="flex justify-end-safe gap-1 absolute w-full right-4 bottom-4">
                <button
                    v-for="(slide, i) in slides"
                    :key="i"
                    class="w-8 h-2 rounded-full transition-all duration-300 focus:outline-none"
                    :class="[active === i ? 'bg-lime-500' : 'bg-black-400']"
                    @click="goTo(i)"
                    :aria-label="`Go to slide ${i + 1}`"
                ></button>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from "vue"

const props = defineProps({
    slides: {
        type: Array,
        required: true,
        default: () => ["Satu", "Dua", "Tiga", "Empat", "Lima"],
    },
    header: {
        type: Array,
        default: () => ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"],
    },
    subHeader: {
        type: Array,
        default: () => ["Sub Header 1", "Sub Header 2", "Sub Header 3", "Sub Header 4", "Sub Header 5"],
    },
    modelValue: {
        type: Number,
        default: 0,
    },
    variant: {
        type: String,
        default: "arrow",
        validator: v => ["arrow", "indicator", "both"].includes(v),
    },
    autoplay: {
        type: Boolean,
        default: false,
    },
    interval: {
        type: Number,
        default: 10000,
    },
})
const emit = defineEmits(["update:modelValue"])

const active = ref(props.modelValue)
const enableTransition = ref(true)
const currentPosition = computed(() => active.value + 1)

function goTo(idx) {
    enableTransition.value = true
    active.value = idx
}
watch(
    () => props.modelValue,
    v => (active.value = v)
)
watch(active, v => emit("update:modelValue", v))

function prev() {
    enableTransition.value = true
    active.value--
}
function next() {
    enableTransition.value = true
    active.value++
}
function handleTransitionEnd() {
    if (active.value < 0) {
        enableTransition.value = false
        active.value = props.slides.length - 1
    } else if (active.value >= props.slides.length) {
        enableTransition.value = false
        active.value = 0
    }
}
let timer
onMounted(() => {
    if (props.autoplay) {
        timer = setInterval(() => {
            next()
        }, props.interval)
    }
})
onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* Prevent transition when it's disabled */
.flex {
    will-change: transform;
}
</style>
