const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementById('grid')
const result = document.getElementById('result')
const move = document.getElementById('move')
const findText = document.getElementById('find__text')
const winText = document.getElementById('win__text')
let score = 0
let moveCount = 0
let cardsChoosen = []
let cardsChoosenId = []
let cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChoosenId[0]
  const optionTwoId = cardsChoosenId[1]

  if(optionOneId===optionTwoId){
    cards[optionOneId].setAttribute('src', 'images/blank.png')   
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }
  else if(cardsChoosen[0]===cardsChoosen[1]){
    cards[optionOneId].classList.add('hide__img')
    cards[optionTwoId].classList.add('hide__img')
    cardsWon.push(cardArray[optionOneId])
    result.textContent = score+=1
    findText.classList.add('find__visible')
    setTimeout(() => {
      findText.classList.remove('find__visible')
    }, 1000)
  }
  else{
    cards[optionOneId].setAttribute('src', 'images/blank.png')   
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
  }
  cardsChoosenId = []
  cardsChoosen = []
  if(cardsWon.length===cards.length/2){
    winText.classList.add('visible')
  }
  move.textContent = moveCount+=1
}

function flipCard(){
  let cardId = this.getAttribute('data-id')
  cardsChoosen.push(cardArray[cardId].name)
  cardsChoosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChoosen.length===2){
    setTimeout(() => checkForMatch(), 500)
  }
}

function restart(){
  createBoard()
}

createBoard()