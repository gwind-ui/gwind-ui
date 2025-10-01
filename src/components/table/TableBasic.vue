<script setup lang="ts">
import { defineProps, computed, ref } from "vue"
import { type HTMLAttributes } from "vue"
import { cn } from "../utils"

type ColumnBase = {
    key: string
    label: string
    isAction?: boolean
    showAction?: boolean
    align?: string
    sortable?: boolean
    class?: string
    [extra: string]: unknown
}

type DataBase = {
    id: string | number
    class?: string
    [extra: string]: unknown
}

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes["class"]
        style?: HTMLAttributes["style"]
        data: DataBase[]
        columns: ColumnBase[]
        tableWidth?: "fixed" | "auto"
        noDataMessage?: string
    }>(),
    {
        data: () => [],
        noDataMessage: "Tidak ada data yang ditampilkan",
    }
)

let sortKey = ref("id")
let sortOrder = ref()

const sortedData = computed(() => {
    if (!sortOrder.value) return props.data
    return props.data.slice().sort((a, b) => {
        const modifier = sortOrder.value
        const x = a[sortKey.value] as string | number
        const y = b[sortKey.value] as string | number

        if (x === y) return 0

        return x > y ? modifier : -modifier
    })
})

function sortTable(key: string) {
    if (sortKey.value === key) {
        sortOrder.value = -sortOrder.value
    } else {
        sortKey.value = key
        sortOrder.value = 1
    }
}
</script>

<template>
    <div>
        <slot name="table-header"></slot>
    </div>
    <table :class="cn('!text-sigma rounded-[8px] border border-black-200 overflow-clip border-separate border-spacing-0', props.class, props.tableWidth === 'fixed' ? 'w-fit' : 'w-full')" :style="[props.style]">
        <thead>
            <tr :class="cn(`gap-4 bg-lime-500 border-b border-black-200`)">
                <th :class="cn(column.sortable && `hover:cursor-pointer`, `border-r border-black-200 last:border-0`)" v-for="column in props.columns" :key="column.key" @click="column.sortable && sortTable(column.key)">
                    <div :class="cn(`text-white flex gap-2 items-center`, column.align === 'center' ? 'justify-center' : column.align === 'right' ? 'justify-end' : 'justify-between', column.class)">
                        {{ column.label }}
                        <svg v-if="column.sortable" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M16.095 20.685C16.53 21.105 17.22 21.105 17.655 20.685L21.78 16.71C21.8915 16.6088 21.9816 16.4863 22.0449 16.3497C22.1082 16.2131 22.1434 16.0652 22.1485 15.9147C22.1536 15.7643 22.1284 15.6143 22.0745 15.4737C22.0206 15.3332 21.939 15.2048 21.8345 15.0964C21.7301 14.9879 21.605 14.9016 21.4665 14.8424C21.3281 14.7831 21.1792 14.7523 21.0286 14.7517C20.8781 14.7511 20.7289 14.7808 20.59 14.8389C20.4511 14.897 20.3253 14.9824 20.22 15.09L18 17.229V4.125C18 3.82663 17.8815 3.54048 17.6705 3.3295C17.4595 3.11853 17.1734 3 16.875 3C16.5766 3 16.2905 3.11853 16.0795 3.3295C15.8685 3.54048 15.75 3.82663 15.75 4.125V17.229L13.53 15.09C13.4247 14.9824 13.2989 14.897 13.16 14.8389C13.0211 14.7808 12.872 14.7511 12.7214 14.7517C12.5708 14.7523 12.4219 14.7831 12.2835 14.8424C12.1451 14.9016 12.0199 14.9879 11.9155 15.0964C11.8111 15.2048 11.7295 15.3332 11.6755 15.4737C11.6216 15.6143 11.5964 15.7643 11.6015 15.9147C11.6066 16.0652 11.6418 16.2131 11.7051 16.3497C11.7684 16.4863 11.8585 16.6088 11.97 16.71L16.095 20.685ZM7.92001 3.33C7.70908 3.11932 7.42314 3.00099 7.12501 3.00099C6.82689 3.00099 6.54095 3.11932 6.33001 3.33L2.20501 7.455C2.00629 7.66826 1.89811 7.95033 1.90325 8.24178C1.90839 8.53324 2.02646 8.81131 2.23258 9.01743C2.4387 9.22355 2.71678 9.34162 3.00823 9.34676C3.29968 9.3519 3.58175 9.24372 3.79501 9.045L6.00001 6.84V19.875C6.00001 20.1734 6.11854 20.4595 6.32952 20.6705C6.5405 20.8815 6.82665 21 7.12501 21C7.42338 21 7.70953 20.8815 7.92051 20.6705C8.13149 20.4595 8.25001 20.1734 8.25001 19.875V6.84L10.455 9.045C10.6683 9.24372 10.9503 9.3519 11.2418 9.34676C11.5332 9.34162 11.8113 9.22355 12.0174 9.01743C12.2236 8.81131 12.3416 8.53324 12.3468 8.24178C12.3519 7.95033 12.2437 7.66826 12.045 7.455L7.92001 3.33Z"
                                fill="currentColor"
                            />
                        </svg>
                        <!-- <GIcon :class="cn(`w-4`)" v-if="column.sortable" :icon="GIconFilter"></GIcon> -->
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white even:bg-black-100 h-14 border-b border-black-200 last:border-0" v-for="item in sortedData" :key="item.id">
                <td
                    :class="cn(`border-r border-black-200 last:border-0 p-4`, column.align === `center` ? `text-center justify-items-center` : column.align === `right` ? `text-right justify-items-end` : `text-left justify-items-start`)"
                    v-for="column in props.columns"
                    :key="column.key"
                >
                    <slot :name="column.key" :value="item[column.key]" :item="item">
                        <slot v-if="column.isAction" name="tableAction" />
                        {{ item[column.key] }}
                    </slot>
                </td>
            </tr>
            <tr v-if="sortedData.length === 0">
                <td :colspan="props.columns.length" style="text-align: center; vertical-align: middle; height: 116px">
                    {{ props.noDataMessage }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
th {
    padding: 16px;
}
</style>
