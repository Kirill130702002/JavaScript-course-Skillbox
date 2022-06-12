
const list = document.querySelector('.list')
const extent = document.querySelector('.ext')
const item = document.querySelectorAll('.item-card')
const ite = document.querySelector('.item-card')

const text = document.querySelectorAll('.vizible')
const tex = document.querySelector('.vizible')




let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17]

function addValuesToCards(arrayNum) {

  let arrayListCart = []


  function fisherAlgoritm(arr) {
    let j, temp;

    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      arrayListCart.push(temp)
    }
    console.log(arr)
    return arr;
  }
  arrayListCart = fisherAlgoritm(arrayNum)

  let arrayOfNumbersCards = []

  for (let y of arrayListCart) {
    y = y % 9
    if (y === 0) {
      ++y
    }
    arrayOfNumbersCards.push(y)
  }

  for (let numberCard = 0; numberCard <= arrayOfNumbersCards.length - 1; ++numberCard) {
    text[numberCard].textContent = arrayOfNumbersCards[numberCard]
  }

  return arrayOfNumbersCards
}

addValuesToCards(arrayNumbers)



let valueCart = []
let objCart = []

for (let cart of item) {

  let cartPi = cart.children[0]

  function gameButton() {
    if (cart.children[0].classList[1] === 'nature') {
      console.log('Все карточки закрыты!!!')
      let removeButton = document.createElement('button')
      removeButton.classList.add('btn')
      removeButton.textContent = 'Играть заново'
      extent.prepend(removeButton)

      document.querySelector('.btn').addEventListener('click', () => {

        location.reload()
        return false

      })

    } else {
      console.log('не все карточки закрыты')
    }
  }


  cart.addEventListener('click', function () {

    if (objCart[0] === objCart[1]) {
      console.log('Тот же самый')
      valueCart = []
      objCart = []
    }



    if (valueCart[0] == valueCart[1]) {
      for (let i of objCart) {
        i.classList.add('nature')
        console.log(i)
      }
      gameButton()
      valueCart = []
      objCart = []
    }

    if (valueCart.length > 1) {
      for (let i of objCart) {
        i.style.visibility = 'hidden'
      }
      valueCart = []
      objCart = []
    }

    valueCart.push(cartPi.textContent)
    objCart.push(cartPi)
    console.log(objCart[0].classList)



    if (cartPi.classList[1] !== undefined) {
      console.log(cartPi.classList[1] !== undefined)
      cartPi.style.visibility = 'visible'
      valueCart = []
      objCart = []
    }
    else if (cartPi.style.visibility == 'visible') {
      cartPi.style.visibility = 'hidden'
    }
    else {
      cartPi.style.visibility = 'visible'
    }


  })

  cartPi.style.visibility = 'hidden'

  //if (cart.children[0])

}





