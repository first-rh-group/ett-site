document.querySelector("#menuSuspenso > a[empresa]").classList.add('selecionado');
var temporizador = 550;
setTimeout(() => {
    document.querySelector("#inicial > section.historia > div:nth-child(1) > img:nth-child(2)").classList.add("bounceInRight");
},temporizador);
temporizador += 1000;
setTimeout(() => {
    document.querySelector("#inicial > section.historia > div:nth-child(1) > img:nth-child(3)").classList.add("bounceInLeft");
},temporizador);
temporizador += 1000;
setTimeout(() => {
    document.querySelector("#inicial > section.historia > div:nth-child(1) > img:nth-child(1)").classList.add("bounceInDown");
},temporizador);
temporizador += 1000;
setTimeout(() => {
    document.querySelector("#inicial > section.historia > div:nth-child(1) > img:nth-child(4)").classList.add("fadeIn");
}, temporizador);

const logoFirst = document.querySelector('section#ettFirst')
const logoShift = document.querySelector('section#shift')
const logoRecruit = document.querySelector('section#recruit')
const observerLogos = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting == true && entry.target.id == 'ettFirst') {
            document.querySelector('section#ettFirst > div > div:nth-of-type(1)').classList.add('fadeInDown')
            observerLogos.unobserve(entry.target)
        }
        if (entry.isIntersecting == true && entry.target.id == 'shift') {
            document.querySelector('section#shift > div > div:nth-of-type(1)').classList.add('fadeInDown')
            observerLogos.unobserve(entry.target)
        }
        if (entry.isIntersecting == true && entry.target.id == 'recruit') {
            document.querySelector('section#recruit > div > div:nth-of-type(1)').classList.add('fadeInDown')
            observerLogos.unobserve(entry.target)
        }
    })
}, {threshold:0.5})
observerLogos.observe(logoFirst)
observerLogos.observe(logoShift)
observerLogos.observe(logoRecruit)

var threshold = 1
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
        },130)
        setTimeout(() => {
            document.querySelector('section#valores > div:nth-of-type(2) > div:nth-of-type(2)').classList.add('fadeInUp')
        }, 250)
        observersectionValores.unobserve(entries[0].target)
    }
}, {threshold:threshold})
observersectionValores.observe(sectionValores)