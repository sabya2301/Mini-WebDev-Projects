const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

function getJoke() {
    const config = {
        headers: {
            'Accept': "application/json"
        }
    };
    fetch("https://icanhazdadjoke.com/", config)
        .then(resposnse => resposnse.json())
        .then(data => {
            console.log(data.joke);
            joke.innerHTML = data.joke;
        })
}

// getJoke();
btn.addEventListener("click", getJoke);