let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')



// function that returns random number 
function getRandomCard() {
    let random =  Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    } else if (random > 10) {
        return 10
    } else {
        return random
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = "Another card?"
    } else if (sum === 21) {
        message = "Got blackjack!"
        hasBlackJack = true
        isAlive = false
    } else {
        message = "Out of game"
        isAlive = false
    }
    
    // Display the message in the messageEl
    messageEl.textContent = message
}


function newCard() {
    // Only allow player to get a new card if she is alive and does not have blackjack
    if (isAlive === true && hasBlackJack === false) {
    // Create a card variable, hard code its value
    let card = getRandomCard()
    // Add the new card to the sum variable
    sum += card
    // Add new card to array of cards
    cards.push(card)
    // Call start game
    renderGame() 
    }
}
