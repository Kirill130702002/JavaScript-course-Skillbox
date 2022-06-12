
// Массив объектов
let arrayObjectName = [{ name: 'vlad', }, { name: 'egor', }, { name: 'dima' }]

//Массив с простыми элементами
let arrayName = ['lena', 'arina', 'dasha']

//Создаю тег select на странице HTML
let select = document.createElement('select')
document.body.append(select)


// Функция, вбирающая в себя массив и значение
function functionValues(obj, val) {

  //Проходимся по массиву
  for (let arr of obj) {
    let arrayValues = Object.values(arr)
    let values = arrayValues[0]

    //Создаём тег option со значениями
    let option = document.createElement('option')
    select.append(option)
    option.innerHTML = values

    // делаем проверку на заданное значение из функции и выбераем это значение главным
    if (values === val) {
      option.setAttribute('selected', true)
    }
  }
}

// Функция, вбирающая в себя массив и значение
function functionValues2(arr, val2) {

  //Проходимся по массиву
  for (let arr2 of arr) {
    console.log(arr2)

    //Создаём тег option со значениями
    let option = document.createElement('option')

    select.append(option)
    option.innerHTML = arr2

    // делаем проверку на заданное значение из функции и выбераем это значение главным
    if (arr2 === val2) {
      option.setAttribute('selected', true)
    }
  }
}

// создаём функцию фильтр, в эту функию мы задаём массив и главное значение
function filterArray(array, value) {

  //фильтруем функции
  if (typeof array[0] === 'object') {
    functionValues(array, value)
  } else {
    functionValues2(array, value)
  }
}

//Задаём массив и главный элемент
filterArray(arrayObjectName, 'egor')
