import type { StorybookConfig } from "@storybook/vue3-vite"
import type { UserConfig } from "vite" // Import type UserConfig dari Vite

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-onboarding", "@storybook/addon-essentials", "@chromatic-com/storybook", "@storybook/addon-interactions", "@storybook/addon-docs", "storybook-addon-vue-slots"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    
    // Solusi untuk Fix Deployment di GitHub Pages
    viteFinal: async (config: UserConfig) => {
        // Mengubah dari path absolute (/gwind-ui/) ke path relatif ('./')
        // Path relatif seringkali lebih andal untuk hosting di sub-direktori seperti GitHub Pages.
        config.base = './'; 
        return config;
    },
}

export default config
