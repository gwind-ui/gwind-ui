import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../src/components/accordion"

export default {
    title: "Components/Accordion",
    component: Accordion,
    tags: ["autodocs"],
}

export const Group = {
    args: {
        default: `
                  <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `,
    },
    render: (args: { default: string }) => ({
        components: { Accordion, AccordionContent, AccordionItem, AccordionTrigger },
        setup() {
            return { args }
        },
        template: `
        <Accordion type="single" collapsible v-bind="args">
             ${args.default}
        </Accordion>
      `,
    }),
}

export const Single = {
    args: {
        default: `
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
      `,
    },
    render: (args: { default: string }) => ({
        components: { Accordion, AccordionContent, AccordionItem, AccordionTrigger },
        setup() {
            return { args }
        },
        template: `
        <Accordion type="single" collapsible v-bind="args">
             ${args.default}
        </Accordion>
      `,
    }),
}
