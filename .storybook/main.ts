import type { StorybookConfig } from "@storybook/vue3-vite"

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    viteFinal: async (config, { configType }) => {
        // Configure for GitHub Pages deployment
        if (configType === 'PRODUCTION') {
            config.base = '/gwind-ui/'
            
            // Optimize build for GitHub Pages
            if (config.build) {
                config.build.rollupOptions = {
                    ...config.build.rollupOptions,
                    output: {
                        ...config.build.rollupOptions?.output,
                        // Prevent dynamic import issues
                        manualChunks: undefined,
                        // Use legacy chunk file names to avoid special characters
                        chunkFileNames: 'assets/[name]-[hash].js',
                        entryFileNames: 'assets/[name]-[hash].js',
                        assetFileNames: 'assets/[name]-[hash].[ext]'
                    }
                }
            }
        }
        
        return config
    },
}

export default config
