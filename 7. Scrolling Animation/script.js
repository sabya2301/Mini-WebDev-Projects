const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", function() {
    const triggerBomb = window.innerHeight * 3.5 / 5;
    console.log(triggerBomb);
    boxes.forEach(box => {

        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);

        if (boxTop < triggerBomb) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
})