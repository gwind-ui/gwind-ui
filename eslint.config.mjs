import vue from "eslint-plugin-vue"
import prettier from "eslint-plugin-prettier"
import globals from "globals"
import parser from "vue-eslint-parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    {
        ignores: ["**/node_modules", "**/dist", "**/storybook-static", "**/lib", "**/.cache"],
    },
    ...compat.extends("plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended", "prettier"),
    {
        plugins: {
            vue,
            prettier,
        },
        settings: {
            "import/resolver": {
                alias: {
                    map: [["@", "src"]],
                    extensions: [".ts", ".js", ".vue", ".json"],
                },
                node: {
                    map: [["@", "src"]],
                    extensions: [".ts", ".js", ".vue", ".json"],
                },
            },
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...vue.environments["setup-compiler-macros"]["setup-compiler-macros"],
                postMessage: true,
            },
            parser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                ecmaFeatures: {
                    jsx: true,
                    tsx: true,
                },
            },
        },
        rules: {
            "vue/html-self-closing": "off",
            "vue/valid-template-root": "off",
            "vue/no-empty-component-block": "off",
            "vue/multi-word-component-names": "off",
            "no-console": "error",
            "no-debugger": "error",
            "no-unused-vars": "error",
            "vue/no-unused-vars": "error",
            "prettier/prettier": "error",
            "vue/no-mutating-props": "error",
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],
        },
    },
]
