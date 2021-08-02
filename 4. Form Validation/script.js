const username = document.querySelector(".content input[type='text']");

const email = document.querySelector(".content input[type='email']");

const password = document.querySelector(".content input[type='password']");

const confirm_password = document.querySelector("#confirm-password");

const submit = document.querySelector("button");

const contents = document.querySelectorAll(".content");
submit.addEventListener("click", function(event) {
    event.preventDefault();
    checkUsername();
    checkEmail();
    checkPassword();
    checkRetypePassword();
})

function checkUsername() {
    if (!contents[0].getElementsByTagName("input")[0].value) {
        contents[0].getElementsByTagName("p")[0].classList.remove("hidden");

        username.classList.add("wrong");
    } else {
        username.classList.remove("wrong");
        username.classList.add("correct");
        contents[0].getElementsByTagName("p")[0].classList.add("hidden");

    }
}

function checkEmail() {
    let e = contents[1].getElementsByTagName("input")[0].value;
    // console.log(e);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e).toLowerCase())) {
        contents[1].getElementsByTagName("p")[0].classList.remove("hidden");

        email.classList.add("wrong");
    } else {
        email.classList.remove("wrong");
        email.classList.add("correct");
        contents[1].getElementsByTagName("p")[0].classList.add("hidden");

    }
}

function checkPassword() {
    let e = contents[2].getElementsByTagName("input")[0].value;
    console.log(e);
    const re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!re.test(String(e).toLowerCase())) {
        console.log("wring");
        contents[2].getElementsByTagName("p")[0].classList.remove("hidden");
        password.classList.add("wrong");
    } else {
        console.log("right");
        password.classList.remove("wrong");
        password.classList.add("correct");
        contents[2].getElementsByTagName("p")[0].classList.add("hidden");

    }
}

function checkRetypePassword() {
    const p1 = contents[2].getElementsByTagName("input")[0].value;
    const p2 = document.getElementById("confirm-password").value;
    if (!p1 || !p2 || p1 !== p2) {
        contents[3].getElementsByTagName("p")[0].classList.remove("hidden");
        confirm_password.classList.add("wrong");
    } else {
        confirm_password.classList.remove("wrong");
        confirm_password.classList.add("correct");
        contents[3].getElementsByTagName("p")[0].classList.add("hidden");
    }
}

// username.classList.add("wrong");
// email.classList.add("correct");
// password.classList.add("correct");
// confirm_password.classList.add("correct");