import type { StorybookConfig } from "@storybook/vue3-vite"
import type { UserConfig } from "vite"

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    },
    viteFinal: async (config: UserConfig) => {
        // Biarkan ini sebagai './' sebagai fallback yang aman, 
        // meskipun kita menggunakan VITE_BASE_URL.
        config.base = './'; 
        return config;
    },
}

export default config
