<script>
import $ from "jquery"
import "datatables.net-dt"
import "datatables.net-responsive-dt"

import { Badge } from "../badge"
import { DataTablePagination } from "."
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconChevronDown, GIconCross } from "@pegadaian/gwind-ic/src/assets/IconsSource"
import { cn } from "../utils"

export default {
    name: "DataTable",
    components: {
        Badge,
        DataTablePagination,
        GIcon,
    },
    data() {
        return {
            searchQuery: "",
            dataTableInstance: null,
            entriesPerPage: 10,
            currentPage: 1,
            search: "",
            GIconChevronDown,
            GIconCross,
            cn,
        }
    },
    props: {
        data: {
            type: Array,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
        leftContent: {
            type: String,
        },
        rightContent: {
            type: String,
        },
    },
    mounted() {
        this.initializeDataTable()
    },
    beforeUnmount() {
        this.destroyDataTable()
    },
    watch: {
        search(newValue) {
            this.searchQuery = newValue
            this.handleSearchInput()
        },
        currentPage(newValue) {
            if (this.dataTableInstance) {
                this.dataTableInstance.page(newValue - 1).draw("page")
            }
        },
        entriesPerPage(newLength) {
            this.$nextTick(() => {
                if (this.dataTableInstance) {
                    this.dataTableInstance.page.len(newLength).draw()
                    this.currentPage = 1 // reset halaman
                }
            })
        },
    },
    methods: {
        handleSort(key) {
            if (this.sortKey === key) {
                this.sortOrder = -this.sortOrder
            } else {
                this.sortKey = key
                this.sortOrder = 1
            }
        },
        initializeDataTable() {
            this.$nextTick(() => {
                const dataTableOptions = {
                    responsive: true,
                    searching: true,
                    info: true,
                    ordering: true,
                    paging: true,
                }

                this.dataTableInstance = $(this.$refs.dataTable).DataTable(dataTableOptions)

                this.dataTableInstance.on("search.dt", (e, settings) => {
                    if (this.searchQuery !== settings.oPreviousSearch.sSearch) {
                        this.searchQuery = settings.oPreviousSearch.sSearch
                    }
                })
            })
        },
        handleSearchInput() {
            if (this.dataTableInstance) {
                this.dataTableInstance.search(this.searchQuery).draw()
            }
        },
        handleEntriesChange(event) {
            if (this.dataTableInstance) {
                const entriesPerPage = parseInt(event.target.value, 10)
                this.entriesPerPage = entriesPerPage
                this.dataTableInstance.page.len(entriesPerPage).draw()
            }
        },
        refreshTableData(newData) {
            if (this.dataTableInstance) {
                this.dataTableInstance.clear()
                this.dataTableInstance.rows.add(newData)
                this.dataTableInstance.draw()
            }
        },
        resetSearchQuery() {
            this.searchQuery = ""
            if (this.dataTableInstance) {
                this.dataTableInstance.search("").draw()
            }
        },
        destroyDataTable() {
            if (this.dataTableInstance) {
                this.dataTableInstance.destroy()
            }
        },
        clearSearch() {
            this.searchQuery = ``
            this.$nextTick(() => {
                this.handleSearchInput()
            })
        },
    },
    computed: {
        filteredCards() {
            return this.data.filter(item => Object.values(item).some(value => String(value).toLowerCase().includes(this.searchQuery.toLowerCase())))
        },
    },
}
</script>

<template>
    <div class="flex flex-col">
        <!-- Header -->
        <div class="flex justify-between items-center" style="gap: 24px; margin-bottom: 24px">
            <div class="items-center gap-2 text-sigma hidden min-[560px]:flex">
                <span>Lihat</span>
                <div class="flex flex-row items-center pl-2 border border-black-400 rounded">
                    <select class="outline-none" name="entriesLength" v-model.number="entriesPerPage">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <GIcon :icon="GIconChevronDown" class="w-5 h-5 text-black-600"></GIcon>
                </div>
                <span>baris</span>
            </div>
            <div
                class="search-data-table flex flex-row gap-2 overflow-clip w-100 rounded-md border border-black-100 bg-black-100 p-3 text-omicron ring-offset-background file:border-0 file:bg-transparent file:text-omicron file:font-default file-placeholder:text-black-500 placeholder:text-black-500 has-[input:focus]:border-lime-500 focus-visible:border-lime-500 focus-visible:ring-ring focus-visible:ring-offset-2 hover:border-lime-500 transition-all duration-100 focus:border-lime-500 disabled:cursor-not-allowed disabled:bg-black-200 disabled:border-black-200 disabled:text-black-600 disabled:focus:border-transparent disabled:hover:border-transparent"
            >
                <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.3645 14.608H16.1986L20.6753 19.1033C21.1082 19.5359 21.1082 20.2429 20.6753 20.6755C20.2424 21.1082 19.535 21.1082 19.1021 20.6755L14.6148 16.1909V15.3572L14.3298 15.0618C12.8516 16.328 10.835 16.9823 8.69161 16.6235C5.75639 16.1275 3.41244 13.6794 3.05345 10.7248C2.50442 6.26128 6.26319 2.50471 10.7294 3.05342C13.6857 3.41219 16.1352 5.75477 16.6315 8.68827C16.9905 10.8304 16.3359 12.8458 15.0688 14.3231L15.3645 14.608ZM5.11233 9.85956C5.11233 12.487 7.23456 14.608 9.86359 14.608C12.4926 14.608 14.6148 12.487 14.6148 9.85956C14.6148 7.23207 12.4926 5.11109 9.86359 5.11109C7.23456 5.11109 5.11233 7.23207 5.11233 9.85956Z"
                        fill="#58585B"
                    />
                </svg>
                <input @search="handleSearchInput" class="w-full focus-visible:outline-hidden" type="search" v-model="searchQuery" @input="handleSearchInput" placeholder="Search" />
                <GIcon :class="cn(`w-6 h-6 hover:cursor-pointer text-black-600`)" v-if="searchQuery" @click="clearSearch" :icon="GIconCross" weight="fill"></GIcon>
            </div>
        </div>

        <!-- Table -->
        <table ref="dataTable" class="data-table rounded-[8px] border border-black-200 border-separate border-spacing-0 overflow-hidden hidden min-[560px]:table rounded-corners text-sigma" style="width: 100%">
            <thead>
                <tr>
                    <th
                        v-for="column in columns"
                        :class="cn(`bg-lime-500 border-r border-black-200 text-white h-14 p-4 justify-between items-center hover:cursor-pointer`, column.fit && `whitespace-nowrap w-[1%]`)"
                        :key="column.data"
                        @click="handleSort(column.data)"
                    >
                        {{ column.title }}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M16.095 20.685C16.53 21.105 17.22 21.105 17.655 20.685L21.78 16.71C21.8915 16.6088 21.9816 16.4863 22.0449 16.3497C22.1082 16.2131 22.1434 16.0652 22.1485 15.9147C22.1536 15.7643 22.1284 15.6143 22.0745 15.4737C22.0206 15.3332 21.939 15.2048 21.8345 15.0964C21.7301 14.9879 21.605 14.9016 21.4665 14.8424C21.3281 14.7831 21.1792 14.7523 21.0286 14.7517C20.8781 14.7511 20.7289 14.7808 20.59 14.8389C20.4511 14.897 20.3253 14.9824 20.22 15.09L18 17.229V4.125C18 3.82663 17.8815 3.54048 17.6705 3.3295C17.4595 3.11853 17.1734 3 16.875 3C16.5766 3 16.2905 3.11853 16.0795 3.3295C15.8685 3.54048 15.75 3.82663 15.75 4.125V17.229L13.53 15.09C13.4247 14.9824 13.2989 14.897 13.16 14.8389C13.0211 14.7808 12.872 14.7511 12.7214 14.7517C12.5708 14.7523 12.4219 14.7831 12.2835 14.8424C12.1451 14.9016 12.0199 14.9879 11.9155 15.0964C11.8111 15.2048 11.7295 15.3332 11.6755 15.4737C11.6216 15.6143 11.5964 15.7643 11.6015 15.9147C11.6066 16.0652 11.6418 16.2131 11.7051 16.3497C11.7684 16.4863 11.8585 16.6088 11.97 16.71L16.095 20.685ZM7.92001 3.33C7.70908 3.11932 7.42314 3.00099 7.12501 3.00099C6.82689 3.00099 6.54095 3.11932 6.33001 3.33L2.20501 7.455C2.00629 7.66826 1.89811 7.95033 1.90325 8.24178C1.90839 8.53324 2.02646 8.81131 2.23258 9.01743C2.4387 9.22355 2.71678 9.34162 3.00823 9.34676C3.29968 9.3519 3.58175 9.24372 3.79501 9.045L6.00001 6.84V19.875C6.00001 20.1734 6.11854 20.4595 6.32952 20.6705C6.5405 20.8815 6.82665 21 7.12501 21C7.42338 21 7.70953 20.8815 7.92051 20.6705C8.13149 20.4595 8.25001 20.1734 8.25001 19.875V6.84L10.455 9.045C10.6683 9.24372 10.9503 9.3519 11.2418 9.34676C11.5332 9.34162 11.8113 9.22355 12.0174 9.01743C12.2236 8.81131 12.3416 8.53324 12.3468 8.24178C12.3519 7.95033 12.2437 7.66826 12.045 7.455L7.92001 3.33Z"
                                fill="currentColor"
                            />
                        </svg>
                    </th>
                    <th :class="cn(`bg-lime-500 text-white h-14 p-4 justify-between items-center !text-sigma whitespace-nowrap w-[1%]`)">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr :class="cn(`border-b border-black-200 last:border-none odd:bg-white even:bg-black-100 h-14`)" v-for="(item, index) in data" :key="index">
                    <td :class="cn(`p-4 border-r border-black-200`)" v-for="column in columns" :key="column.data">
                        {{ item[column.data] }}
                    </td>
                    <td :class="cn(`p-4`)">
                        <slot name="tableActionButtons" :item="item"></slot>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Pagination -->
        <div class="order-3 flex flex-col min-[560px]:flex-row justify-start min-[560px]:justify-between min-[560px]:items-center items-start gap-4 w-full mt-4">
            <div class="text-sigma">
                {{ "Menampilkan " + (entriesPerPage * currentPage - (entriesPerPage - 1)) + " sampai " + entriesPerPage * currentPage + " dari " + data.length + " baris" }}
            </div>
            <DataTablePagination :sibling-count="1" show-edges :total="data.length" v-model:page="currentPage" :items-per-page="entriesPerPage" />
        </div>

        <div class="responsive-table min-[560px]:hidden">
            <div v-if="filteredCards.length > 0" class="flex flex-col gap-4">
                <div v-for="(item, index) in filteredCards" :key="index" class="card rounded-[6px] drop-shadow-1 border-separate border-spacing-0 overflow-hidden">
                    <div class="card-body bg-white p-4">
                        <div class="flex justify-between mb-2">
                            <div class="heading font-bold">{{ item[leftContent] }}</div>
                            <Badge variant="green"> {{ item[rightContent] }} </Badge>
                        </div>
                        <div v-for="column in columns" :key="column.data" class="card-item flex justify-between">
                            <span class="card-label text-omega text-black-600" v-if="column.data !== leftContent && column.data !== rightContent"> {{ column.title }}: </span>
                            <span class="card-value text-omega text-black-600" v-if="column.data !== leftContent && column.data !== rightContent">
                                {{ item[column.data] }}
                            </span>
                        </div>
                    </div>
                    <div class="card-footer bg-black-200 px-4 py-2">
                        <slot name="tableActionButtons" :item="item"></slot>
                    </div>
                </div>
            </div>
            <div v-else>No data available</div>
        </div>
    </div>
</template>

<style lang="scss">
table {
    overflow: hidden;
}

[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
}

.dt-length,
.dt-search,
.dt-paging,
.dt-info,
.dt-column-order {
    display: none !important;
}

div.dt-container div.dt-layout-row {
    margin: 0px;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
}

.dt-column-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
}

@media (max-width: 560px) {
    .dataTables_wrapper.no-footer,
    .data-table {
        display: none;
    }

    .responsive-table {
        display: block;
    }
}
</style>
