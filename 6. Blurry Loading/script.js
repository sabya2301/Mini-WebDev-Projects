const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");
let load = 0;

let int = setInterval(loading, 20);

function loading() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    console.log((100 - load) / 100);
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = (100 - load) / 100;
    bg.style.filter = `blur(${scale(load,0,100,40,0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}