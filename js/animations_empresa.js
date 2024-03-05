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
},temporizador);

var logoFirst = document.querySelector('section#ettFirst > div > div:nth-of-type(1)');
var logoFirstPos = logoFirst.getBoundingClientRect();
var logoFirstFind = false;
var logoShift = document.querySelector('section#shift > div > div:nth-of-type(1)');
var logoShiftFind = false;
var logoRecruit = document.querySelector('section#recruit > div > div:nth-of-type(1)');
var logoRecruitFind = false;

window.addEventListener('wheel', (evento) => {
    if(logoFirstFind == false) {
        var logoFirstPos = logoFirst.getBoundingClientRect();
        if(logoFirstPos.y < (window.innerHeight * 0.85)) {
            logoFirstFind = true;
            logoFirst.classList.add('fadeInDown');
        }
    }
    if(logoShiftFind == false) {
        var logoShiftPos = logoShift.getBoundingClientRect();
        if(logoShiftPos.y < (window.innerHeight * 0.85)) {
            logoShiftFind = true;
            logoShift.classList.add('fadeInDown');
        }
    }
    if(logoRecruitFind == false) {
        var logoRecruitPos = logoRecruit.getBoundingClientRect();
        if(logoRecruitPos.y < (window.innerHeight * 0.85)) {
            logoRecruitFind = true;
            logoRecruit.classList.add('fadeInDown');
        }
    }
})

window.addEventListener('touchmove', (evento) => {
    if(logoFirstFind == false) {
        var logoFirstPos = logoFirst.getBoundingClientRect();
        if(logoFirstPos.y < (window.innerHeight * 0.85)) {
            logoFirstFind = true;
            logoFirst.classList.add('fadeInDown');
        }
    }
    if(logoShiftFind == false) {
        var logoShiftPos = logoShift.getBoundingClientRect();
        if(logoShiftPos.y < (window.innerHeight * 0.85)) {
            logoShiftFind = true;
            logoShift.classList.add('fadeInDown');
        }
    }
    if(logoRecruitFind == false) {
        var logoRecruitPos = logoRecruit.getBoundingClientRect();
        if(logoRecruitPos.y < (window.innerHeight * 0.85)) {
            logoRecruitFind = true;
            logoRecruit.classList.add('fadeInDown');
        }
    }
})