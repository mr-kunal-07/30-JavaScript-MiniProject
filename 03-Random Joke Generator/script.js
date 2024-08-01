const joke = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = 'https://rizzapi.vercel.app/random'


let getjock = () => {
    joke.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.text}`
        joke.classList.add("fade")

    })
}

btn.addEventListener("click", getjock)

getjock()