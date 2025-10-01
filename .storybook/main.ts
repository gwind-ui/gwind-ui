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
        // Menetapkan 'base' agar semua aset (termasuk modul dinamis)
        // dimuat menggunakan jalur sub-direktori yang benar di GitHub Pages.
        // Penambahan 'config: UserConfig' memastikan Vite config memiliki tipe yang benar.
        config.base = '/gwind-ui/'; 
        return config;
    },
}

export default config
