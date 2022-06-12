document.addEventListener('DOMContentLoaded', function () {

  let input = document.getElementById('input')
  let button = document.getElementById('btn')
  let number = document.getElementById('number')


  function textValue() {
    let num = parseInt(input.value)   // Выдаёт значение input в числе
    number.textContent = num         //   строка из нуля превращается в число из input
    let current = number.textContent        // Заносим числовое значение в переменную current
    let interval = setInterval(numberValue, 1000)   // Задаём интервал с функцией, которую она должна выполнить

    function numberValue() {                          // функция, которая число уменьшает на единицу, пока оно не станет = 0
      number.textContent = current
      //console.log('Вторая if - ', current)         // Проверка, работает ли код, выводит число в консоль
      if (current > 0) {
        button.addEventListener('click', clear)    // Если нажимаем на левую клавишу мыши, вызывается clearInterval
        current = current - 1
        number.textContent = current
      } else {
        clearInterval(interval)
      }
    }

    function clear() {            // Функция завершает интервал, если её вызвать
      clearInterval(interval)
    }

  }
  button.addEventListener('click', textValue)  // Выполняет функию вычесления числа из input и выводит в h2
})
