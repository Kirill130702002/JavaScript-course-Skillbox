//////////////////////////////////////////////////////////--1
let a = []
let m = 7
let n = 0
let count = 1

for (i = m; i < count; ++i) {
  a.push(Math.round(Math.random() * n))
}

console.log(a)

///////////////////////////////////////////////////////////--2
let world = 'Hello world!'
let a = ''

do {
  a += world[(world.length) - 1]
} while (a.length < world.length)

console.log(a)


let world = 'Hello world!';
let a = '';

for (i = 0; i < world.length; i++) {
  a += world[(world.length - 1) - i];
}
console.log(a)

////////////////////////////////////////////////////////////--3

let roadMines = [false, false, false, true, false, false, false, false, false, false]
let m = []
console.log('Танк поехал')


game: for (let position in roadMines) {
  console.log(`танк переместился на позицию ${parseInt(position) + 1}`)

  if (roadMines[position] === true) {
    m.push(roadMines[position])
    if (m.length === 2) {
      console.log('Танк уничтожен')
      break game;
    }
    console.log('Танка повреждён')
  }
}


/////////////////////////////////////////////////////////////////--4

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let random = Math.floor(Math.random() * 10);

if (random > 6) {
  random -= 3
}

let randomDay = week[random];
console.log(randomDay);
console.log('дни недели в январе');



let array = [];

let day = randomDay;
let indexWeek = week.indexOf(day);

for (let i = 1; i < 32; i++) {
  array.push(i);
}

for (let elem of array) {
  const y = (indexWeek + elem - 1) % 7;
  console.log(`${elem} января, ${week[y]}`);
}
