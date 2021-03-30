//variables
const width = 28;
const grid = document.getElementsByClassName('grid')[0];
const scoreDisplay = document.getElementsByClassName('score')[0];
const squares = []
let move = ''
let pacmanCurrentIndex = 490
let legalMove = true
let score = 0
const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

// 0 - pacdots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellets
// 4 - empty

//set up the grid

function createGrid() {
    for (let i = 0; i < width * width; i++) {
        let square = document.createElement('div');
        let squareClass = layout[i] === 0 ? 'pac-dots' :
            layout[i] === 1 ? 'wall' :
                layout[i] === 2 ? 'ghost-lair' :
                    layout[i] === 3 ? 'power-pellets' : null;
        square.classList.add('square')
        square.classList.add(squareClass)
        grid.appendChild(square)
        squares.push(square)
    }
}

createGrid()

// display score
function displayScore() {
    scoreDisplay.textContent = score;
};
displayScore()


//set Pacman to start position
squares[pacmanCurrentIndex].classList.add('pacman')

//check if move is legal
function isMoveLegal(move) {
    legalMove = squares[move].classList.contains('wall') ||
        squares[move].classList.contains('ghost-lair') ? false : true
}

//move pacman  //if here to add mobile controls


document.addEventListener('keydown', assignMoveKeys)

let buttonLeft = document.getElementById('37')
let buttonRight = document.getElementById('39')
let buttonUp = document.getElementById('38')
let buttonDown = document.getElementById('40')
buttonLeft.addEventListener('click', assignMoveMobile)
buttonRight.addEventListener('click', assignMoveMobile)
buttonUp.addEventListener('click', assignMoveMobile)
buttonDown.addEventListener('click', assignMoveMobile)






function assignMoveKeys(e) {
    move = e.keyCode
    control(move)
}
function assignMoveMobile(e) {
    move = e.target.id
    control(parseInt(move))
}



function control(e) {
    console.log(e)
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch (e) {
        case 40: //down
            isMoveLegal(pacmanCurrentIndex + width)
            if (legalMove) { pacmanCurrentIndex += width; }
            break;
        case 39: //right
            isMoveLegal(pacmanCurrentIndex + 1)
            if (legalMove) { pacmanCurrentIndex++; }
            break;
        case 38: //up
            isMoveLegal(pacmanCurrentIndex - width)
            if (legalMove) { pacmanCurrentIndex -= width; }
            break;
        case 37:  //left
            console.log('here')
            isMoveLegal(pacmanCurrentIndex - 1)
            if (legalMove) { pacmanCurrentIndex--; }
            break;
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    if (squares[pacmanCurrentIndex].classList.contains('pac-dots')) {
        score++
        displayScore()
        squares[pacmanCurrentIndex].classList.remove('pac-dots')
    }
    if (squares[pacmanCurrentIndex].classList.contains('power-pellets')) {
        score++
        displayScore()
        squares[pacmanCurrentIndex].classList.remove('power-pellets')
        ghosts.forEach(ghost => {
            ghost.isScared = true
            squares[ghost.currentIndex].classList.add('scared-ghost')
        })
        setInterval(function () {
            ghosts.forEach(ghost => {
                ghost.isScared = false
                squares[ghost.currentIndex].classList.remove('scared-ghost')
            })
        }, 10000)
    }
    if (squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        ghosts.forEach(ghost => {
            if (squares[ghost.currentIndex].classList.contains('pacman')) {
                squares[ghost.currentIndex].classList.remove(ghost.name, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score += 100
                displayScore()
                squares[ghost.currentIndex].classList.add(ghost.name, 'ghost', 'scared-ghost')
            }
        })

    }
    checkGameOver()
}

//createGhosts 

class Ghost {
    constructor(name, startIndex, speed) {
        this.name = name;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.timerId = NaN;
        this.isScared = false;
    }
}

const ghosts = [
    new Ghost('pinky', 348, 250),
    new Ghost('blinky', 376, 400),
    new Ghost('inky', 351, 350),
    new Ghost('clyde', 379, 500),

]

ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.name)
    squares[ghost.startIndex].classList.add('ghost')
});

ghosts.forEach(ghost => {
    moveGhost(ghost)
})



function moveGhost(ghost) {
    const randomNumber = Math.floor(Math.random() * 4) + 1
    let direction = randomNumber === 1 ? 1 :
        randomNumber === 2 ? -1 :
            randomNumber === 3 ? width :
                randomNumber === 4 ? -width : null
    //console.log(squares[ghost.currentIndex + direction].classList.contains('wall'))

    ghost.timerId = setInterval(function () {
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            squares[ghost.currentIndex].classList.remove(ghost.name, 'ghost', 'scared-ghost')
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.name, 'ghost')
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            if (squares[ghost.currentIndex].classList.contains('pacman') && ghost.isScared) {
                squares[ghost.currentIndex].classList.remove(ghost.name, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score += 100
                displayScore()
                squares[ghost.currentIndex].classList.add(ghost.name, 'ghost', 'scared-ghost')
            }
        }
        else {
            clearInterval(ghost.timerId)
            moveGhost(ghost)
        }
        checkGameOver()
    }, ghost.speed)
}

function checkGameOver() {
    // win
    if (score >= 238) {
        console.log('win')
        ghosts.forEach(ghost => { clearInterval(ghost.timerId) })
        document.removeEventListener('keydown', assignMoveKeys)
        buttonLeft.removeEventListener('click', assignMoveMobile)
        buttonRight.removeEventListener('click', assignMoveMobile)
        buttonUp.removeEventListener('click', assignMoveMobile)
        buttonDown.removeEventListener('click', assignMoveMobile)
        scoreDisplay.textContent = score + ' You Win!'
    }


    if (squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        console.log('lose')
        ghosts.forEach(ghost => { clearInterval(ghost.timerId) })
        document.removeEventListener('keydown', assignMoveKeys)
        buttonLeft.removeEventListener('click', assignMoveMobile)
        buttonRight.removeEventListener('click', assignMoveMobile)
        buttonUp.removeEventListener('click', assignMoveMobile)
        buttonDown.removeEventListener('click', assignMoveMobile)
        scoreDisplay.textContent = score + ' You Lose!'
    }
}