import { CardHoverTrigger, CardHoverGroup, CardHoverContent } from "../src/components/card"

export default {
    title: "Components/CardHover",
    component: CardHoverGroup,
    tags: ["autodocs"],
    args: {
        side: "bottom",
        rounded: true,
        avoidCollisions: true,
        default: `
      <CardHoverTrigger class="w-fit cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px] focus:shadow-green8 shadow-sm">
        <img
          class="h-[45px] w-[45px] rounded-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/250px-Joko_Widodo_2019_official_portrait.jpg"
          alt="Joko Widodo"
        />
      </CardHoverTrigger>

      <CardHoverContent v-bind="args" class="w-80">
        <div class="flex items-center flex-col gap-y-3">
          <img
            class="w-24 rounded-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/250px-Joko_Widodo_2019_official_portrait.jpg"
            alt="Joko Widodo"
          />
          <div class="flex flex-col items-center gap-y-0">
            <h3 class="text-lg font-bold">Joko Widodo</h3>
            <p class="text-sm text-muted-foreground">Presiden Ke-7 Republik Indonesia</p>
          </div>
        </div>
      </CardHoverContent>
    `,
    },
    parameters: {
        docs: {
            source: {
                transform: (code: string, storyContext: { args: { default: string } }) => {
                    const { args } = storyContext

                    // props untuk CardHoverContent saja
                    const contentProps = Object.entries(args)
                        .filter(([key]) => key !== "default")
                        .map(([key, value]) => {
                            if (typeof value === "boolean") {
                                if (value) return key // true -> hanya nama prop
                                return "" // false -> skip
                            }
                            if (typeof value === "string") {
                                return `${key}="${value}"`
                            }
                            return `:${key}='${JSON.stringify(value)}'`
                        })
                        .filter(Boolean) // hapus string kosong dari boolean false
                        .join(" ")

                    // inject slot default
                    let innerContent = args.default ? args.default.trim() : ""
                    // replace agar props ditempel di CardHoverContent
                    innerContent = innerContent.replace('<CardHoverContent v-bind="args"', `<CardHoverContent ${contentProps}`)

                    const codeWithProps = `<CardHoverGroup>
  ${innerContent}
</CardHoverGroup>`

                    return `${codeWithProps}`
                },
            },
        },
    },

    render: (args: string) => ({
        components: {
            CardHoverTrigger,
            CardHoverGroup,
            CardHoverContent,
        },
        setup() {
            return { args }
        },
        template: `
      <CardHoverGroup v-bind="args">
        <CardHoverTrigger class="w-fit cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px] focus:shadow-green8 shadow-sm">
          <img
            class="h-[45px] w-[45px] rounded-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/250px-Joko_Widodo_2019_official_portrait.jpg"
            alt="Joko Widodo"
          />
        </CardHoverTrigger>

        <CardHoverContent v-bind="args" class="w-80">
          <div class="flex items-center flex-col gap-y-3">
            <img
              class="w-24 rounded-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/250px-Joko_Widodo_2019_official_portrait.jpg"
              alt="Joko Widodo"
            />
            <div class="flex flex-col items-center gap-y-0">
              <h3 class="text-lg font-bold">Joko Widodo</h3>
              <p class="text-sm text-muted-foreground">Presiden Ke-7 Republik Indonesia</p>
            </div>
          </div>
        </CardHoverContent>
      </CardHoverGroup>
    `,
    }),
}

export const Default = {}
