<script setup lang="ts">
import { ref } from "vue"
import { Label, RadioGroupRoot, RadioGroupItem } from "reka-ui"

const option = ref("7days")
const startDate = ref<Date | null>(null)
const endDate = ref<Date | null>(null)
const showCalendar = ref(false)
const selecting = ref<"start" | "end">("start")

// List opsi cepat
const options = [
    { label: "7 Hari Terakhir", value: "7days" },
    { label: "30 Hari Terakhir", value: "30days" },
    { label: "Rentang Waktu", value: "range" },
]

// Format tanggal (simple)
const formatDate = (date: Date | null) => (date ? date.toLocaleDateString("id-ID") : "Tanggal")

function openCalendar(type: "start" | "end") {
    selecting.value = type
    showCalendar.value = true
}

function selectDate(date: Date) {
    if (selecting.value === "start") {
        startDate.value = date
        selecting.value = "end"
    } else {
        endDate.value = date
        showCalendar.value = false
    }
}
</script>

<template>
    <div class="space-y-4 p-4 w-[320px]">
        <Label class="text-sm font-medium">Pilih Tanggal</Label>

        <!-- Radio Group -->
        <RadioGroupRoot v-model="option" class="space-y-2">
            <div v-for="item in options" :key="item.value" class="flex items-center space-x-2">
                <RadioGroupItem :value="item.value" :id="item.value" />
                <Label :for="item.value">{{ item.label }}</Label>
            </div>
        </RadioGroupRoot>

        <!-- Jika Rentang Waktu -->
        <div v-if="option === 'range'" class="grid grid-cols-2 gap-2">
            <button class="border rounded-lg py-2 px-3 text-left" @click="openCalendar('start')">
                {{ formatDate(startDate) }}
            </button>
            <button class="border rounded-lg py-2 px-3 text-left" @click="openCalendar('end')">
                {{ formatDate(endDate) }}
            </button>
        </div>

        <!-- Kalender -->
        <div v-if="showCalendar" class="border rounded-lg p-2">
            <div class="flex justify-between items-center mb-2">
                <button @click="() => {}">←</button>
                <span class="font-medium">Agustus 2025</span>
                <button @click="() => {}">→</button>
            </div>
            <div class="grid grid-cols-7 text-center text-sm">
                <span v-for="d in ['M', 'S', 'S', 'R', 'K', 'J', 'S']" :key="d">{{ d }}</span>
            </div>
            <div class="grid grid-cols-7 text-center mt-1">
                <button v-for="day in 31" :key="day" class="py-1 rounded hover:bg-green-100" @click="selectDate(new Date(2025, 7, day))">
                    {{ day }}
                </button>
            </div>
        </div>
    </div>
</template>
