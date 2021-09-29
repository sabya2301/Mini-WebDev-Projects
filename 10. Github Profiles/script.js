const card = document.querySelector(".card");
const form = document.querySelector(".user-form");
const inp = document.querySelector("#search");
// let repos;

form.addEventListener("submit", e => {
    const userName = inp.value;
    console.log(userName);
    if (userName) callApi(userName);
    else card.innerHTML = `<p>Type a valid username</p>`
});


function callApi(user) {
    const userURL = `https://api.github.com/users/${user}`
    fetch(userURL)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        }).then(data => {
            console.log(data);
            card.innerHTML = `<div>
        <img src="${data.avatar_url}" alt="${data.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p>${data.bio?data.bio:''}</p>
        <p>${data.company?data.company+',':''} ${data.location?data.location:''}</p>
        <ul>
            <li>${data.followers} <strong>Followers</strong></li>
            <li>${data.following} <strong>Following</strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">
        </div>
    </div>`;
            return fetch(data.repos_url)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const repos = document.querySelector("#repos");
            data.forEach(repo => {
                const repoElement = document.createElement('a');
                repoElement.classList.add('repo');
                repoElement.href = repo.html_url;
                repoElement.target = '_blank';
                repoElement.innerText = repo.name;
                // console.log(repo.html_url);
                console.log(repoElement);
                repos.appendChild(repoElement);
            })
        })
        .catch(err => {
            console.log(err);
            card.innerHTML = `<p>${err.message}</p>`
        });

}