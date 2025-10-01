import { ref } from "vue"
import { ListGroup, ListItem } from "../src/components/list"

export default {
    title: "Components/ListGroup",
    component: ListGroup,
    subcomponents: { ListItem },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["ordered", "unordered"],
        },
    },
    args: {
        type: "unordered",
        default: `
            <ListItem v-for="(item, index) in items" :key="index" :index="index">
          {{ item.label }}
        </ListItem>
        `,
    },
    render: (args: { default: string }) => ({
        components: { ListGroup, ListItem },
        setup() {
            const items = ref([
                { label: "Item 1", value: "item-1" },
                { label: "Item 2", value: "item-2" },
                { label: "Item 3", value: "item-3" },
            ])
            return { args, items }
        },
        template: `
      <ListGroup v-bind="args">
        ${args.default}
      </ListGroup>
    `,
    }),
}

export const Ordered = {
    args: {
        type: "ordered",
    },
}

export const Unordered = {
    args: {
        type: "unordered",
    },
}

export const CustomList = {
    args: {
        default: `
           <div v-for="(item, index) in items" :key="index">
                            <ListItem v-if="index < 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.545 18.155L20.4219 8.61882C21.1445 7.84253 21.1897 6.60745 20.5574 5.77381L20.4219 5.61269Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>

                            <ListItem v-if="index === 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item.label }}
                            </ListItem>
                        </div>
        `,
    },
}
