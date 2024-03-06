document.querySelector(`div[data-go-first] > img`).addEventListener('click', () => {
    document.querySelector(`section[data-empresas]`).scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
})
document.querySelector(`button[data-ver-certificados]`).addEventListener('click', e => {
    document.querySelector(`div[data-certificados]`).classList.add('show')
    document.querySelector(`div[data-certificados] div.close`).addEventListener('click', e => {
        e.target.parentElement.classList.remove('show')
    }, { once: true })
})
document.querySelector(`button[data-ver-parceiros]`).addEventListener('click', e => {
    document.querySelector(`div[data-parceiros]`).classList.add('show')
    document.querySelector(`div[data-parceiros] div.close`).addEventListener('click', e => {
        e.target.parentElement.classList.remove('show')
    }, { once: true })
})
document.querySelector(`div[data-certificado-mtp]`).addEventListener('click', () => {
    window.open('documentacao/certificado_min_trabalho.pdf')
})
document.querySelector(`div[data-certificado-assertem]`).addEventListener('click', () => {
    window.open('documentacao/certificado_assertem.pdf')
})

document.querySelector(`div[data-parceiro="leader"]`).addEventListener('click', () => {
    window.open('https://leaderetalent.com.br/')
})
document.querySelector(`div[data-parceiro="rio"]`).addEventListener('click', () => {
    window.open('https://rio123.io/')
})