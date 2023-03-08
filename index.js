let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''

let messageEl = document.getElementById('message-el')
console.log(messageEl)

let sumEl = document.getElementById('sum-el')
// let sumEl = document.querySelector('#sum-el')

let cardsEl = document.getElementById('cards-el')

let player = {
    'name': 'David',
    'chips': 0
}

let playerEl = document.getElementById('player-el')
playerEl.textContent =  `${player.name}: ${player.chips}$`

console.log(cards)

// RANDOM CARD 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber == 1) {
        return 11
    }
    else {
        return randomNumber
    }

}

// START GAME 
function startGame() {
    if (isAlive == false){
        isAlive = true;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard() 
        sum = firstCard + secondCard  
        cards = [firstCard, secondCard]
        // cards.push([firstCard, secondCard])
        renderGame()
    }
    else {
        location.reload()
    }
}


function renderGame() {  
    if (isAlive){
        sumEl.textContent = `Sum: ${sum}`;
        cardsEl.textContent = 'Cards: ';
        for (i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + ' '
        }

        if (sum < 21) {
            message = 'Do you want do draw a new card?'
        } 
        else if (sum == 21) {
            message = "You've got blackjack!"
            hasBlackJack = true
            isAlive = false
        } 
        else if (sum > 21) {
            message = "You're out of the game! 😪"
            isAlive = false
        }
    } 
    else {
        location.reload()
    }
    messageEl.textContent = message
}
    
  

function newCard() {
    console.log('Drawing a new card from the deck')
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    console.log(cards)
    renderGame()
    // cardsEl.textContent += ` ${newCard}`
    }
    