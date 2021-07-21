const panels = document.querySelectorAll(".panel");
const active = document.querySelector(".active");

for (let i = 0; i < panels.length; ++i) {
    console.log(panels[i]);
    panels[i].addEventListener("mouseover", function() {
        removeActiveClass();
        console.log("ho");
        panels[i].classList.add("active");
    })
}

function removeActiveClass() {
    for (let i = 0; i < panels.length; ++i) {
        panels[i].classList.remove("active");
    }
}