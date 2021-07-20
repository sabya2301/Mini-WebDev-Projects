const progress = document.querySelector(".progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let activeIndex = 0;

next.addEventListener("click", function() {
    activeIndex++;
    if (activeIndex > 0)
        prev.disabled = false;
    if (activeIndex >= (circles.length - 1)) {
        activeIndex = circles.length - 1;
        next.disabled = true;
    }
    circles[activeIndex].classList.add("active");
    console.log((activeIndex) / (circles.length - 1) * 100);
    progress.style.width = (activeIndex) / (circles.length - 1) * 100 + "%";
});

prev.addEventListener("click", function() {
    circles[activeIndex].classList.remove("active");
    activeIndex--;
    if (activeIndex < circles.length)
        next.disabled = false;
    if (activeIndex === 0)
        prev.disabled = true;
    progress.style.width = (activeIndex) / (circles.length - 1) * 100 + "%";
})