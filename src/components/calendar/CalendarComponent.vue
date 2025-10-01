<script setup lang="ts">
/* eslint-disable */
import { cn } from "../utils"
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading } from "./"
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date"
import { useVModel } from "@vueuse/core"
import { CalendarRoot, type CalendarRootEmits, type CalendarRootProps, useForwardPropsEmits } from "reka-ui"
import { type HTMLAttributes, ref, nextTick } from "vue"
import { toDate } from "reka-ui/date"

// Fungsi createDecade yang diperbaiki
function createDecade({ startIndex, endIndex }: { dateObj: DateValue; startIndex: number; endIndex: number }) {
    const currentYear = today(getLocalTimeZone()).year
    const startYear = currentYear + startIndex
    const endYear = currentYear + endIndex
    const years = []

    for (let year = startYear; year <= endYear; year++) {
        years.push({ year })
    }

    return years
}

const props = withDefaults(
    defineProps<
        CalendarRootProps & {
            class?: HTMLAttributes["class"]
        }
    >(),
    {
        modelValue: undefined,
        placeholder() {
            return today(getLocalTimeZone())
        },
        weekdayFormat: "short",
    }
)
const emits = defineEmits<CalendarRootEmits>()

// Hapus delegatedProps dan langsung gunakan props
const forwarded = useForwardPropsEmits(props, emits)

// Define placeholder ref for v-model and internal use
const placeholder = useVModel(props, "modelValue", emits)

const showYearMenu = ref(false)

const toggleYearMenu = () => {
    showYearMenu.value = !showYearMenu.value

    nextTick(() => {
        const value = Array.isArray(placeholder.value) ? placeholder.value[0] : placeholder.value
        if (value && typeof value.year !== "undefined") {
            const yearElement = document.querySelector(`[data-year="${value.year}"]`)
            if (yearElement) {
                yearElement.scrollIntoView({ behavior: "smooth", block: "center" })
                // console.log("Scrolled to year:", value.year)
            } else {
                // console.log("Year element not found:", value.year)
            }
        }
    })
}

const selectYear = (year: string) => {
    if (!placeholder.value) return

    // Handle if placeholder.value is an array or a single DateValue
    const currentValue = Array.isArray(placeholder.value) ? placeholder.value[0] : placeholder.value
    if (!currentValue || typeof currentValue.set !== "function") return

    const newDateValue = currentValue.set({
        year: Number(year),
    })

    const newDate = toDate(newDateValue)

    if (!isNaN(newDate.getTime())) {
        placeholder.value = newDateValue
        showYearMenu.value = false
        // console.log("selected value:", newDateValue.year)
    } else {
        // console.error("Invalid date value:", newDate)
    }
}
</script>

<template>
    <CalendarRoot v-slot="{ date, grid, weekDays }" v-bind="forwarded" :class="cn('rounded-xl border border-black-200 p-3', props.class)">
        <CalendarHeader class="flex items-center justify-between gap-4">
            <CalendarPrevButton />

            <CalendarHeading @click="toggleYearMenu" class="hover:cursor-pointer" aria-label="Select year" />

            <transition name="fade">
                <div v-if="showYearMenu" class="duration-300 fade-in absolute z-40 bg-white top-[80px] left-[-13px] w-[354px] h-[338px] overflow-scroll border border-black-200 rounded-xl rounded-t-[0px] custom-scrollbar">
                    <div class="flex flex-wrap justify-center gap-2">
                        <button
                            v-for="yearValue in createDecade({ dateObj: date, startIndex: -100, endIndex: 5 }).reverse()"
                            :key="yearValue.toString()"
                            :value="yearValue.year.toString()"
                            :data-year="yearValue.year.toString()"
                            :class="['my-3 py-2 px-6 cursor-pointer text-omicron hover:text-lime-500', yearValue.year === date.year ? 'text-white hover:text-white font-bold bg-lime-500 hover:bg-lime-600 rounded-[4px]' : '']"
                            @click="selectYear(yearValue.year.toString())"
                        >
                            {{ yearValue.year }}
                        </button>
                    </div>
                </div>
            </transition>

            <CalendarNextButton />
        </CalendarHeader>

        <!-- CalendarGrid -->
        <div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
            <CalendarGrid v-for="month in grid" :key="month.value.toString()">
                <CalendarGridHead>
                    <CalendarGridRow>
                        <CalendarHeadCell v-for="day in weekDays" :key="day">
                            {{ day }}
                        </CalendarHeadCell>
                    </CalendarGridRow>
                </CalendarGridHead>
                <CalendarGridBody class="grid gap-2">
                    <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full gap-2">
                        <CalendarCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
                            <CalendarCellTrigger :day="weekDate" :month="month.value" />
                        </CalendarCell>
                    </CalendarGridRow>
                </CalendarGridBody>
            </CalendarGrid>
        </div>
    </CalendarRoot>
</template>

<style lang="scss" scoped>
.custom-scrollbar {
    scrollbar-width: none; /* Firefox */
}

.custom-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
}
</style>
