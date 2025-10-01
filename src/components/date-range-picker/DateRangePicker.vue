<script setup lang="ts">
/* eslint-disable */
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { GButton } from "../button"
import { Combobox, ComboboxAnchor, ComboboxTrigger } from "../combobox"
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconChevronDown } from "@pegadaian/gwind-ic/src/assets/IconsSource"
import { GLabel } from "../label"
import RangePicker from "./RangePicker.vue"
import { RadioGroupRoot } from "reka-ui"
import { GRadioBox } from "../radio"
import Drawer from "../drawer/Drawer.vue"

const props = defineProps<{
    start?: string
    end?: string
    min?: string
    max?: string
    options: Array<{ value: string; label: string }>
    startPlaceholder?: string
    endPlaceholder?: string
    sparator?: string
    position?: "top" | "bottom"
}>()

const emit = defineEmits<{
    (event: "update:start", value: string): void
    (event: "update:end", value: string): void
}>()

const sparator = computed(() => props.sparator ?? "-")

const startDate = ref(props.start ?? "")
const endDate = ref(props.end ?? "")

watch(
    () => props.start,
    val => {
        if (val !== undefined && val !== startDate.value) startDate.value = val
    }
)
watch(
    () => props.end,
    val => {
        if (val !== undefined && val !== endDate.value) endDate.value = val
    }
)

watch(startDate, val => {
    emit("update:start", val)
})
watch(endDate, val => {
    emit("update:end", val)
})

const RadioBoxChoosenValue = ref("Rentang Waktu")
const RadioBoxValue = ref(["7 Hari Terakhir", "30 Hari Terakhir", "Rentang Waktu"])
const showCalendar = ref(false)
const rangePickerDisabled = ref(false)

// Responsive logic
const isMobile = ref(false)
function checkMobile() {
    isMobile.value = window.innerWidth < 640
}
onMounted(() => {
    checkMobile()
    window.addEventListener("resize", checkMobile)
})
onBeforeUnmount(() => {
    window.removeEventListener("resize", checkMobile)
})

function toggleCalendar() {
    showCalendar.value = !showCalendar.value
}

function formatDate(dateStr: string) {
    if (!dateStr) return ""
    const [year, month, day] = dateStr.split("-")
    return `${day}/${month}/${year}`
}

watch(RadioBoxChoosenValue, val => {
    const today = new Date()
    let start, end

    if (val === "7 Hari Terakhir") {
        end = new Date(today)
        start = new Date(today)
        start.setDate(end.getDate() - 7)
        rangePickerDisabled.value = true
    } else if (val === "30 Hari Terakhir") {
        end = new Date(today)
        start = new Date(today)
        start.setDate(end.getDate() - 30)
        rangePickerDisabled.value = true
    } else {
        rangePickerDisabled.value = false
        return
    }

    const pad = (n: number) => n.toString().padStart(2, "0")
    const format = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

    startDate.value = format(start)
    endDate.value = format(end)
})

const positionStyle = computed(() => {
    if (props.position === "top") {
        return { bottom: "52px", top: "auto" }
    } else if (props.position === "bottom") {
        return { top: "52px", bottom: "auto" }
    }
    return {}
})
</script>

<template>
    <div class="flex flex-col gap-2 w-full">
        <GLabel class="text-black-800">Pilih Tanggal</GLabel>
        <Combobox>
            <ComboboxAnchor as-child>
                <ComboboxTrigger as-child>
                    <GButton variant="combobox" size="lg" :class="['combobox', 'font-regular', 'justify-between', { 'border-lime-500': showCalendar }, { 'active:bg-white': showCalendar }]" @click="toggleCalendar">
                        <span :class="startDate && endDate ? 'text-black-800' : 'text-black-500'">
                            {{ startDate && endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : props.startPlaceholder || "Pilih Tanggal" }}
                        </span>
                        <GIcon :icon="GIconChevronDown" :class="['w-6 h-6 text-black-600', 'transition-transform', 'duration-400', 'transform', { 'rotate-180': showCalendar }]" />
                    </GButton>
                </ComboboxTrigger>
            </ComboboxAnchor>

            <!-- Desktop Calendar -->

            <!-- <ComboboxList v-if="showCalendar && !isMobile" @click.stop @mousedown.stop>
                <ComboboxGroup @click.stop @mousedown.stop>
                    <ComboboxItem @click.stop @mousedown.stop>
                        <div class="flex flex-col gap-2 p-4 items-center">
                            <RadioGroupRoot class="group flex flex-col gap-2.5 w-full mb-2" :default-value="RadioBoxChoosenValue" aria-label="View density" v-model="RadioBoxChoosenValue">
                                <GRadioBox id="r3" :value="RadioBoxValue[0]" :label="RadioBoxValue[0]" />
                                <GRadioBox id="r4" :value="RadioBoxValue[1]" :label="RadioBoxValue[1]" />
                                <GRadioBox :label="RadioBoxValue[2]" id="r5" :value="RadioBoxValue[2]" />
                            </RadioGroupRoot>
                            <RangePicker
                                @click.stop
                                @mousedown.stop
                                :min="props.min"
                                :max="props.max"
                                startlabel="Dari"
                                endlabel="Hingga"
                                v-model:start="startDate"
                                v-model:end="endDate"
                                :startPlaceholder="props.startPlaceholder"
                                :endPlaceholder="props.endPlaceholder"
                                calendar-position-y="auto"
                                :sparator="sparator"
                                :disabled="rangePickerDisabled"
                                sparatorClass="relative top-[10px]"
                            />
                        </div>
                    </ComboboxItem>
                </ComboboxGroup>
            </ComboboxList> -->

            <div v-if="showCalendar && !isMobile" class="left-0 z-50 bg-white absolute w-full h-fit rounded-md shadow-lg" :style="positionStyle" @click.stop @mousedown.stop>
                <div class="flex flex-col gap-2 p-4 items-center">
                    <RadioGroupRoot class="group flex flex-col gap-2.5 w-full mb-2" :default-value="RadioBoxChoosenValue" aria-label="View density" v-model="RadioBoxChoosenValue">
                        <GRadioBox id="r3" :value="RadioBoxValue[0]" :label="RadioBoxValue[0]" />
                        <GRadioBox id="r4" :value="RadioBoxValue[1]" :label="RadioBoxValue[1]" />
                        <GRadioBox :label="RadioBoxValue[2]" id="r5" :value="RadioBoxValue[2]" />
                    </RadioGroupRoot>
                    <RangePicker
                        :min="props.min"
                        :max="props.max"
                        startlabel="Dari"
                        endlabel="Hingga"
                        v-model:start="startDate"
                        v-model:end="endDate"
                        :startPlaceholder="props.startPlaceholder"
                        :endPlaceholder="props.endPlaceholder"
                        calendar-position-y="auto"
                        :sparator="sparator"
                        :disabled="rangePickerDisabled"
                        sparatorClass="relative top-[10px]"
                    />
                </div>
            </div>

            <!-- Mobile Drawer Calendar -->
            <teleport to="body">
                <Drawer v-model="showCalendar" label="Pilih Tanggal" v-if="isMobile">
                    <div class="flex flex-col gap-2 pb-4 items-center">
                        <RadioGroupRoot class="group flex flex-col gap-2.5 w-full mb-2" :default-value="RadioBoxChoosenValue" aria-label="View density" v-model="RadioBoxChoosenValue">
                            <GRadioBox id="r3" :value="RadioBoxValue[0]" :label="RadioBoxValue[0]" />
                            <GRadioBox id="r4" :value="RadioBoxValue[1]" :label="RadioBoxValue[1]" />
                            <GRadioBox :label="RadioBoxValue[2]" id="r5" :value="RadioBoxValue[2]" />
                        </RadioGroupRoot>
                        <RangePicker
                            :min="props.min"
                            :max="props.max"
                            startlabel="Dari"
                            endlabel="Hingga"
                            v-model:start="startDate"
                            v-model:end="endDate"
                            :startPlaceholder="props.startPlaceholder"
                            :endPlaceholder="props.endPlaceholder"
                            calendar-position-y="auto"
                            :sparator="sparator"
                            :disabled="rangePickerDisabled"
                            sparatorClass="relative top-[10px]"
                        />
                    </div>
                </Drawer>
            </teleport>
        </Combobox>
    </div>
</template>
