import { TabGroup, TabTrigger, TabTriggerGroup, TabContent } from "../src/components/tabs"

export default {
    title: "Components/Tab",
    component: TabGroup,
    subcomponents: { TabTrigger, TabTriggerGroup, TabContent },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        default: `
       <TabTriggerGroup>
            <TabTrigger value="tab1"> Tab1 </TabTrigger>
            <TabTrigger value="tab2"> Tab2 </TabTrigger>
            <TabTrigger value="tab3"> Tab3 </TabTrigger>
        </TabTriggerGroup>
        <div class="p-4">
            <TabContent value="tab1">Ini adalah Tab 1</TabContent>
            <TabContent value="tab2">Ini adalah Tab 2</TabContent>
            <TabContent value="tab3">Ini adalah Tab 3</TabContent>
        </div>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { TabGroup, TabTrigger, TabTriggerGroup, TabContent },
        setup() {
            return { args }
        },
        template: `
    <TabGroup v-bind="args">
    ${args.default}
    </TabGroup>
    `,
    }),
}
