export default {
    mounted(el: HTMLElement) {
        el.style.position = "relative"
        el.style.overflow = "hidden"

        el.addEventListener("pointerdown", function (e: PointerEvent) {
            // Cek jika button punya class 'combobox'
            if (el.classList.contains("combobox")) return

            const rect = el.getBoundingClientRect()
            const ripple = document.createElement("span")
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.position = "absolute"
            ripple.style.left = `${x}px`
            ripple.style.top = `${y}px`
            ripple.style.width = ripple.style.height = `${size}px`
            ripple.style.background = "rgba(0,0,0,0.15)"
            ripple.style.borderRadius = "50%"
            ripple.style.pointerEvents = "none"
            ripple.style.transform = "scale(0)"
            ripple.style.transition = "transform 0.4s, opacity 0.6s"
            ripple.style.zIndex = "1"
            el.appendChild(ripple)

            requestAnimationFrame(() => {
                ripple.style.transform = "scale(1)"
                ripple.style.opacity = "0"
            })

            setTimeout(() => {
                ripple.remove()
            }, 600)
        })
    },
}
