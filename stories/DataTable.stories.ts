import DataTable from "../src/components/table/DataTable.vue"
import GButton from "../src/components/button/button.vue"

export default {
    title: "Components/Table/DataTable",
    component: DataTable,
    tags: ["autodocs"],
}

export const Default = {
    args: {
        data: [
            {
                id: 1,
                name: "John Doe",
                city: "New York",
                occupation: "Software Engineer",
                salary: 80000,
            },
            {
                id: 2,
                name: "Jane Smith",
                city: "Angeles",
                occupation: "Data Scientist",
                salary: 95000,
            },
            {
                id: 3,
                name: "Bob Johnson",
                city: "Chicago",
                occupation: "Graphic Designer",
                salary: 60000,
            },
            {
                id: 4,
                name: "Alice Williams",
                city: "Francisco",
                occupation: "UX Designer",
                salary: 85000,
            },
            {
                id: 5,
                name: "Charlie Brown",
                city: "Seattle",
                occupation: "Marketing Manager",
                salary: 90000,
            },
            {
                id: 6,
                name: "Eva Davis",
                city: "Miami",
                occupation: "Financial Analyst",
                salary: 75000,
            },
            {
                id: 7,
                name: "Daniel Miller",
                city: "Denver",
                occupation: "Product Manager",
                salary: 100000,
            },
            {
                id: 8,
                name: "Grace Wilson",
                city: "Austin",
                occupation: "HR Specialist",
                salary: 70000,
            },
            {
                id: 9,
                name: "Henry Jackson",
                city: "Boston",
                occupation: "Business Analyst",
                salary: 82000,
            },
            {
                id: 10,
                name: "Isabel White",
                city: "Portland",
                occupation: "Project Coordinator",
                salary: 65000,
            },
            {
                id: 41,
                name: "Oliver Lee",
                city: "San Diego",
                occupation: "Software Developer",
                salary: 85000,
            },
            {
                id: 42,
                name: "Sophia Hall",
                city: "Phoenix",
                occupation: "Data Engineer",
                salary: 92000,
            },
            {
                id: 43,
                name: "Liam Turner",
                city: "Dallas",
                occupation: "UX/UI Designer",
                salary: 78000,
            },
            {
                id: 44,
                name: "Mia Foster",
                city: "Houston",
                occupation: "Sales Manager",
                salary: 88000,
            },
            {
                id: 45,
                name: "Lucas Murphy",
                city: "Philadelphia",
                occupation: "QA Engineer",
                salary: 80000,
            },
            {
                id: 46,
                name: "Ava Wright",
                city: "Detroit",
                occupation: "Marketing Specialist",
                salary: 76000,
            },
            {
                id: 47,
                name: "Jackson Evans",
                city: "Nashville",
                occupation: "Financial Analyst",
                salary: 84000,
            },
            {
                id: 48,
                name: "Ella Simmons",
                city: "Memphis",
                occupation: "Project Manager",
                salary: 93000,
            },
            {
                id: 49,
                name: "Logan Clark",
                city: "Baltimore",
                occupation: "IT Consultant",
                salary: 98000,
            },
            {
                id: 50,
                name: "Aria Allen",
                city: "Charlotte",
                occupation: "Product Designer",
                salary: 90000,
            },
        ],
        columns: [
            {
                data: "id",
                title: "ID",
                fit: true,
            },
            {
                data: "name",
                title: "Name",
            },
            {
                data: "city",
                title: "City",
            },
            {
                data: "occupation",
                title: "Occupation",
            },
            {
                data: "salary",
                title: "Salary",
            },
        ],
        leftContent: "name",
        rightContent: "city",
        // 👇 slot diisi langsung via arg dengan nama sesuai slot
        tableActionButtons: `
      <div class="flex gap-2">
        <GButton variant="neutral" size="sm">Hapus</GButton>
        <GButton variant="secondary" size="sm">Lihat Detail</GButton>
      </div>
    `,
    },
    render: (args: { tableActionButtons: string }) => ({
        components: { DataTable, GButton },
        setup() {
            return { args }
        },
        template: `
      <DataTable v-bind="args">
        <template #tableActionButtons="{ item }">
          ${args.tableActionButtons}
        </template>
      </DataTable>
    `,
    }),
}
