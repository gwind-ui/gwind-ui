import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../src/components/breadcrumb"

export default {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
    args: {
        default: `
        <BreadcrumbList>
            <template v-for="(crumb, index) in breadcrumbs" :key="index">
            <BreadcrumbItem>
                <component
                :is="crumb.href ? 'BreadcrumbLink' : 'BreadcrumbPage'"
                :href="crumb.href"
                >
                {{ crumb.label }}
                </component>
            </BreadcrumbItem>

            <BreadcrumbSeparator
                v-if="index < breadcrumbs.length - 1"
            />
            </template>
        </BreadcrumbList>
        `,
    },
    render: (args: { default: string }) => ({
        components: { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator },
        setup() {
            const breadcrumbs = [
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Breadcrumb", href: null }, // page terakhir, tidak punya href
            ]
            return { args, breadcrumbs }
        },
        template: `
        <Breadcrumb>
            ${args.default}
        </Breadcrumb>
\
      `,
    }),
}

export const Default = {}
