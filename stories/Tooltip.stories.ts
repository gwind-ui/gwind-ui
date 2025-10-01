import { TooltipGroup, TooltipTrigger, TooltipContent } from "../src/components/tooltip"
import { GIcon } from "@pegadaian/gwind-ic/src"
import { GIconInfo } from "@pegadaian/gwind-ic/src/assets/IconsSource"

export default {
    title: "Components/Tooltip",
    component: TooltipGroup,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        delayDuration: 200,
        disableClosingTrigger: true,
        default: `
      <TooltipTrigger>
            <GIcon :icon="iconInfo" class="w-[18px] text-black-600" />
        </TooltipTrigger>
        <TooltipContent> Harga saat Pegadaian membeli emas kamu, atau yang kamu terima saat menjual emas. Harga dapat berubah sewaktu-waktu. </TooltipContent>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { TooltipGroup, TooltipTrigger, TooltipContent, GIcon },
        setup() {
            const iconInfo = GIconInfo
            return { args, iconInfo }
        },
        template: `
    <TooltipGroup v-bind="args">
        ${args.default}
    </TooltipGroup>
    `,
    }),
}
