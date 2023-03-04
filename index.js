let firstCard = 5;
let secondCard = 10;

let sum = firstCard + secondCard // 23
let hasBlackJack = false;
let isAlive = true;
let message = ''

let messageEl = document.getElementById('message-el')
console.log(messageEl)

let sumEl = document.getElementById('sum-el')
// let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')

function startGame() {
    if (isAlive){
        sumEl.textContent = `Sum: ${sum}`
        cardsEl.textContent = `Cards: ${firstCard}  ${secondCard}`
        if (sum < 21) {
            message = 'Do you want do draw a new card?'
        } else if (sum == 21) {
            message = "You've got blackjack!"
            hasBlackJack = true
        } else if (sum > 21) {
            message = "You're out of the game! 😪"
            isAlive = false
        }
    }
    messageEl.textContent = message
}  

function newCard() {
    let newCard = 21
    sum += newCard
    startGame()
    cardsEl.textContent += ` ${newCard}`
    
    
}