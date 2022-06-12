let password = `-qaz`;


if (password.length >= 4 && password.includes(`-`)) {
  console.log('true')
} else if (password.includes(`_`)) {
  console.log('true')
} else {
  console.log('false')
}

//Старался символы "-" и "_" задать в переменной, но почему то из-за этого не получалось, хотя это странно
//Вместе две переменные со специальными символами выводят ошибку, а при одной переменной со специальным символом нет



let nam = `Vladislav`      // Имя
let surname = `chIstyaKov`  // Фамилия

let lowerName = nam.toLowerCase()                            //  Переводим всё имя в маленькие буквы
let firstLetterName = lowerName.substr(0, 1).toUpperCase()    //  Берём первую букву имени и делаем её большой
let returnName = firstLetterName + lowerName.substr(1)        //  Прибавляем большую букву к имени без первой буквы


let lowerSurname = surname.toLowerCase()                            //  Переводим всю фамилию в маленькие буквы
let firstLetterSurname = lowerSurname.substr(0, 1).toUpperCase()    //  Берём первую букву фамилии и делаем её большой
let returnSurname = firstLetterSurname + lowerSurname.substr(1)     //  Прибавляем большую букву к фамилии без первой буквы

// Получаем результат
//console.log(returnName + returnSurname)

//if (nam === returnName) {                           // старый способ решения
//  console.log('true')
//} else {
//  console.log('false')
//}


nam === returnName ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано в - ' + returnName)
surname === returnSurname ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована в - ' + returnSurname)
