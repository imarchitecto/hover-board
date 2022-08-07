const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colorSquare = document.querySelector('.square')
const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'white', 'brown', 'pink', 'aqua', 'olive']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
}

board.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('container') === true) {
        return
    } else {
        setColor(event.target)
    }
})

board.addEventListener('mouseout', (event) => {
    removeColor(event.target)
})




function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = ''
    element.style.boxShadow = ''
}

function getRandomColor() {
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}
