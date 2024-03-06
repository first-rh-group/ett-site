let threshold = 1
if (window.innerWidth <= 450) {
    threshold = 0.2
} else if (window.innerWidth <= 912) {
    threshold = 0.5
}
const sectionValores = document.querySelector('section#valores')
const observersectionValores = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting == true) {
        document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(1)').classList.add('fadeInUp')
        setTimeout(() => {
            document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(3)').classList.add('fadeInUp')
        }, 130)
        setTimeout(() => {
            document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(2)').classList.add('fadeInUp')
        }, 250)
        observersectionValores.unobserve(entries[0].target)
    }
}, { threshold: threshold })
observersectionValores.observe(sectionValores)