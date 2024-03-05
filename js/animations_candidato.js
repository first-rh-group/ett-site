var consciencia1 = document.querySelector("section#consciencia > div > div:first-of-type");
var consciencia1_find = false;
document.querySelector("#menuSuspenso > a[candidato]").classList.add('selecionado');
window.addEventListener('wheel', (evento) => {
    if(consciencia1_find == false) {
        var consciencia1Pos = consciencia1.getBoundingClientRect();
        if(consciencia1Pos.y < (window.innerHeight * 0.85)) {
            consciencia1_find = true;
            consciencia1.classList.add('fadeInDown');
            var consciencia2 = document.querySelector("section#consciencia > div > div:last-of-type");
            setTimeout(() => {
                consciencia2.classList.add('fadeInUp');
            },1000)
        }
    }
})
window.addEventListener('touchmove', (evento) => {
    if(consciencia1_find == false) {
        var consciencia1Pos = consciencia1.getBoundingClientRect();
        if(consciencia1Pos.y < (window.innerHeight * 0.85)) {
            consciencia1_find = true;
            consciencia1.classList.add('fadeInDown');
            var consciencia2 = document.querySelector("section#consciencia > div > div:last-of-type");
            setTimeout(() => {
                consciencia2.classList.add('fadeInUp');
            },1000)
        }
    }
})