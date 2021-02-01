const body = document.querySelector('body')
const h1 = document.querySelector('h1')

// Functie voor het maken van een random kleur

function randomColor() {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let color = `rgb(${r}, ${g}, ${b})`;
    body.style.backgroundColor = color
    h1.innerText = `${color}`
    if ((r+g+b) < 100) {
        h1.style.color = 'white'
    }
    else{
        h1.style.color = 'black'
    }
}

const btn = document.querySelector('button')

btn.addEventListener('click', randomColor)