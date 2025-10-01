import { gwindTheme, gwindTwBase } from "@pegadaian/gwind"

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        ...gwindTheme,
    },
    plugins: [gwindTwBase],
}
