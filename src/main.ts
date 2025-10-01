import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import ripple from "./directives/ripple"

const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll("[aria-controls], [aria-labelledby], [data-reka-ui-collection-item], [data-radix-aspect-ratio-wrapper]")

    elements.forEach(element => {
        element.removeAttribute("aria-controls")
        element.removeAttribute("aria-labelledby")
        element.removeAttribute("data-reka-ui-collection-item")
        element.removeAttribute("data-radix-aspect-ratio-wrapper")
    })
})

observer.observe(document.body, { childList: true, subtree: true })

const app = createApp(App)
app.directive("ripple", ripple)
app.mount("#app")
