'use strict'

const images = [
    { 'id': '1', 'url': 'img/Welcome to.png'},
    { 'id': '2', 'url': 'img/Welcome to (1).png' },
    { 'id': '3', 'url': 'img/Welcome to (2).png' },    
]

const container = document.querySelector('.items')

const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

console.log("yes")

loadImages(images, container)

let items = document.querySelectorAll('.item')

const next = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
}
const previous = () =>{
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.getElementById('previous').addEventListener('click', previous)
document.getElementById('next').addEventListener('click', next)


setInterval(next, 5000)

// += concatena