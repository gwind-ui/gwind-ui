<script setup lang="ts">
/* eslint-disable */
import { ref, computed, nextTick, watch } from "vue"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"

// Props untuk menerima value awal (modelValue), min, dan max
const props = defineProps<{
    modelValue?: string | Date
    min?: string | Date
    max?: string | Date
    yearClass?: string
    yearClassContent?: string
}>()

// Emit untuk v-model dan update event
const emit = defineEmits<{
    (e: "update:modelValue", value: string): void
    (e: "update", payload: { date: Date; year: number; month: number; day: number }): void
}>()

// --- State
const today = new Date()
const initialDate = props.modelValue ? new Date(props.modelValue) : new Date(today)
const selectedDate = ref(new Date(initialDate))
const showYearMenu = ref(false)
const viewYear = ref(selectedDate.value.getFullYear())
const viewMonth = ref(selectedDate.value.getMonth())

// --- Helpers
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

function daysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate()
}

const calendarRows = computed(() => {
    const firstDay = new Date(viewYear.value, viewMonth.value, 1)
    const startDay = firstDay.getDay()
    const days: { date: Date; inMonth: boolean }[] = []

    // --- Previous Month Padding ---
    let prevYear = viewYear.value
    let prevMonth = viewMonth.value - 1
    if (prevMonth < 0) {
        prevMonth = 11
        prevYear -= 1
    }
    const prevMonthDays = daysInMonth(prevYear, prevMonth)
    for (let i = startDay - 1; i >= 0; i--) {
        days.push({
            date: new Date(prevYear, prevMonth, prevMonthDays - i),
            inMonth: false,
        })
    }

    // --- Current Month ---
    const totalDays = daysInMonth(viewYear.value, viewMonth.value)
    for (let d = 1; d <= totalDays; d++) {
        days.push({
            date: new Date(viewYear.value, viewMonth.value, d),
            inMonth: true,
        })
    }

    // --- Next Month Padding ---
    let nextYear = viewYear.value
    let nextMonth = viewMonth.value + 1
    if (nextMonth > 11) {
        nextMonth = 0
        nextYear += 1
    }
    let i = 1
    while (days.length % 7 !== 0) {
        days.push({
            date: new Date(nextYear, nextMonth, i),
            inMonth: false,
        })
        i++
    }

    // Bagi per minggu
    const rows: { date: Date; inMonth: boolean }[][] = []
    for (let i = 0; i < days.length; i += 7) {
        rows.push(days.slice(i, i + 7))
    }
    return rows
})

function prevMonth() {
    if (viewMonth.value === 0) {
        viewMonth.value = 11
        viewYear.value -= 1
    } else {
        viewMonth.value -= 1
    }
}

function nextMonth() {
    if (viewMonth.value === 11) {
        viewMonth.value = 0
        viewYear.value += 1
    } else {
        viewMonth.value += 1
    }
}

// Tambahkan fungsi untuk cek min dan max
function isAfterMax(date: Date) {
    if (!props.max) return false
    const maxDate = typeof props.max === "string" ? new Date(props.max) : props.max
    return date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
}
function isBeforeMin(date: Date) {
    if (!props.min) return false
    const minDate = typeof props.min === "string" ? new Date(props.min) : props.min
    return date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
}

function selectDate(date: Date) {
    // Cegah pilih tanggal di luar min/max
    if (isAfterMax(date) || isBeforeMin(date)) return

    selectedDate.value = new Date(date)
    viewYear.value = date.getFullYear()
    viewMonth.value = date.getMonth()

    // Format tanggal secara manual untuk menghindari masalah zona waktu
    const year = selectedDate.value.getFullYear()
    const month = (selectedDate.value.getMonth() + 1).toString().padStart(2, "0")
    const day = selectedDate.value.getDate().toString().padStart(2, "0")
    const formattedDate = `${year}-${month}-${day}`

    emit("update:modelValue", formattedDate)
    emit("update", {
        date: selectedDate.value,
        year: selectedDate.value.getFullYear(),
        month: selectedDate.value.getMonth(),
        day: selectedDate.value.getDate(),
    })
}

function toggleYearMenu() {
    showYearMenu.value = !showYearMenu.value
    nextTick(() => {
        if (showYearMenu.value) {
            const el = document.querySelector(`[data-year="${viewYear.value}"]`)
            if (el)
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                })
        }
    })
}

function selectYear(year: number) {
    viewYear.value = year
    showYearMenu.value = false
}

function createDecade({ startIndex, endIndex }: { startIndex: number; endIndex: number }) {
    const currentYear = today.getFullYear()
    const years: number[] = []
    for (let y = currentYear + startIndex; y <= currentYear + endIndex; y++) {
        years.push(y)
    }
    return years
}

const contentCalendarRef = ref<HTMLElement | null>(null)
const yearMenuHeight = ref<string>("260px")

watch([showYearMenu, viewMonth, viewYear], ([show]) => {
    if (show) {
        nextTick(() => {
            if (contentCalendarRef.value) {
                yearMenuHeight.value = contentCalendarRef.value.offsetHeight + "px"
            }
        })
    }
})

// Sinkronisasi jika value dari parent berubah
watch(
    () => props.modelValue,
    val => {
        if (val) {
            const d = new Date(val)
            selectedDate.value = d
            viewYear.value = d.getFullYear()
            viewMonth.value = d.getMonth()
        }
    }
)
</script>

<template>
    <div class="rounded-xl border border-black-200 p-3 !w-[360px] relative">
        <div class="flex items-center justify-between gap-4 relative">
            <button class="p-2 rounded hover:bg-black-100" @click="prevMonth"><ChevronLeft class="h-4 w-4" /></button>
            <div>
                <span class="font-bold text-lambda text-lime-500 cursor-pointer" @click="toggleYearMenu" aria-label="Pilih tahun"> {{ monthNames[viewMonth] }} {{ viewYear }} </span>
                <transition name="slide">
                    <div
                        v-if="showYearMenu"
                        class="absolute z-40 bg-white top-[85px] left-1/2 -translate-x-1/2 w-[360px] overflow-scroll border border-black-200 rounded-xl rounded-t-[0px]"
                        :class="yearClass"
                        :style="{ height: parseInt(yearMenuHeight, 10) + 24 + 'px' }"
                    >
                        <div class="flex flex-wrap justify-center gap-x-4 p-2" :class="yearClassContent">
                            <button
                                v-for="year in createDecade({ startIndex: -100, endIndex: 5 }).reverse()"
                                :key="year"
                                :data-year="year"
                                class="my-2 py-2 px-5 cursor-pointer text-omicron hover:text-lime-500"
                                :class="year === viewYear ? 'text-white font-bold bg-lime-500 hover:bg-lime-600 rounded-[4px]' : ''"
                                @click="selectYear(year)"
                            >
                                {{ year }}
                            </button>
                        </div>
                    </div>
                </transition>
            </div>
            <button class="p-2 rounded hover:bg-black-100" @click="nextMonth"><ChevronRight class="h-4 w-4" /></button>
        </div>
        <div class="flex flex-col space-y-4 pt-3">
            <div>
                <div class="grid grid-cols-7 gap-2 border-y-1 py-2 border-black-200">
                    <div v-for="day in weekDays" :key="day" class="text-center font-semibold text-sm text-gray-600">
                        {{ day }}
                    </div>
                </div>
                <div class="content-calendar" ref="contentCalendarRef">
                    <div v-for="(week, widx) in calendarRows" :key="widx" class="grid grid-cols-7 gap-2 my-1">
                        <button
                            v-for="(cell, didx) in week"
                            :key="didx"
                            :disabled="!cell.inMonth || isAfterMax(cell.date) || isBeforeMin(cell.date)"
                            class="w-10 rounded-full cursor-pointer text-center d-flex items-center justify-center aspect-square lending-none disabled:text-black-400"
                            :class="{
                                'bg-lime-500 text-white hover:bg-lime-600':
                                    cell.inMonth && selectedDate.getDate() === cell.date.getDate() && selectedDate.getMonth() === cell.date.getMonth() && selectedDate.getFullYear() === cell.date.getFullYear(),
                                'hover:bg-lime-100': cell.inMonth && !isAfterMax(cell.date) && !isBeforeMin(cell.date),
                                'text-gray-400 bg-gray-50': !cell.inMonth,
                                'bg-black-50 !text-black-500 !cursor-not-allowed': isAfterMax(cell.date) || isBeforeMin(cell.date),
                            }"
                            @click="selectDate(cell.date)"
                        >
                            {{ cell.date.getDate() }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar {
    scrollbar-width: none;
}
.custom-scrollbar::-webkit-scrollbar {
    display: none;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
