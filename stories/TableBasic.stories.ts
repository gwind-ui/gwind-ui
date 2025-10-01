import { GButton } from "../src/components/button"
import TableBasic from "../src/components/table/TableBasic.vue"

export default {
    title: "Components/Table/TableBasic",
    component: TableBasic,
    tags: ["autodocs"],
    argTypes: {
        data: {
            control: "object",
        },
        columns: {
            control: "object",
        },
        tableWidth: {
            control: "select",
            options: ["fixed"],
        },
        noDataMessage: {
            control: "text",
        },
    },
    args: {
        data: [
            {
                id: 1,
                name: "Jane Doe",
                age: 25,
                ages: 123,
                penghasilan: 23333333,
                address: "Yogyakarta",
            },
            {
                id: 2,
                name: "John Doe",
                age: 30,
                ages: 123,
                penghasilan: 888888,
                address: "Kediri",
            },

            {
                id: 3,
                name: "Jane Doe",
                age: 25,
                ages: 123,
                penghasilan: 9999999,
                address: "Bandung",
            },
            {
                id: 4,
                name: "Jane Doe",
                age: 25,
                ages: 123,
                penghasilan: 100000,
                address: "Surabaya",
            },
            {
                id: 5,
                name: "Bane Doe",
                address: "Medan",
                age: 25,
                ages: 123,
                penghasilan: 2000,
            },
            {
                id: 6,
                name: "Jane Doe",
                age: 25,
                ages: 123,
                penghasilan: 10000000,
                address: "Aceh",
            },
            {
                id: 7,
                name: "Aane Doe",
                age: 25,
                ages: 123,
                penghasilan: 20000000,
                address: "Jakarta",
            },
        ],
        columns: [
            {
                key: "id",
                label: "ID",
                isAction: false,
                align: `center`,
            },
            {
                key: "name",
                label: "Name",
                isAction: false,
                sortable: true,
            },
            {
                key: "age",
                label: "Age",
                isAction: false,
            },
            {
                key: "ages",
                label: "Ages",
                isAction: false,
            },
            {
                key: "penghasilan",
                label: "Penghasilan",
                isAction: false,
                sortable: true,
                align: `right`,
                fit: true,
            },
            {
                key: "address",
                label: "Address",
                isAction: false,
            },
            {
                key: "actions",
                label: "Actions",
                isAction: true,
                align: `center`,
            },
        ],
        tableWidth: "fixed",
        noDataMessage: "Tidak ada data untuk ditampilkan",
        tableAction: `
        <GButton variant="neutral" size="sm"> Hapus </GButton>
        <GButton variant="secondary" size="sm"> Lihat Detail </GButton> 
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { TableBasic, GButton },
        setup() {
            return { args }
        },
        template: `
    <TableBasic v-bind="args">
        <template #tableAction="">
            <div class="flex gap-2">
                <GButton variant="neutral" size="sm"> Hapus </GButton>
                <GButton variant="secondary" size="sm"> Lihat Detail </GButton>
            </div>
        </template>
    </TableBasic>
    `,
    }),
}
