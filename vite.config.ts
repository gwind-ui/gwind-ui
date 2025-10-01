import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        }),
        AutoImport({
            imports: ["vue", "@vueuse/core"],
        }),
        Components({
            dirs: ["./src/components"],
        }),
    ],
    optimizeDeps: {
        include: ["vue"],
    },
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        outDir: "lib",
        emptyOutDir: true,
        lib: {
            name: "gwind-ui",
            entry: resolve(__dirname, "src/index.ts"),
            fileName: "index",
        },
        rollupOptions: {
            output: {
                exports: "named",
                globals: {
                    vue: "vue",
                },
            },
            external: ["vue"],
        },
    },
})
