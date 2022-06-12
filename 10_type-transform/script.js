
const arrayStudent = []
const initialDataStudent = []
const tableBody = document.getElementById('tbody')
const btn = document.getElementById('btn')



// Обработчик ошибок в форме
btn.addEventListener('click', () => {
  const simbol = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', '<', '>', '/', '?', '\'', '|', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}']
  const name = form.querySelector('[name="name"]'),
    surname = form.querySelector('[name="surname"]'),
    surnameFather = form.querySelector('[name="surnameFather"]'),
    dateBirth = form.querySelector('[name="dateBirth"]'),
    dateBeginning = form.querySelector('[name="dateBeginning"]'),
    faculty = form.querySelector('[name="faculty"]')

  if (name.value === surname.value || name.value === surnameFather.value || name.value === faculty.value || surname.value === surnameFather.value || surname.value === faculty.value || surnameFather.value === faculty.value) {
    console.log('Элементы похожи')
    alert('Значения в строках похожи. Пожалуйста, введите корректные значения!')
    name.value = ''
    surname.value = ''
    surnameFather.value = ''
    faculty.value = ''
  }

  if (dateBirth.value === dateBeginning.value) {
    alert('Пожалуйста, введите верные даты!')
    dateBirth.value = ''
    dateBeginning.value = ''
  }

  for (const sim of simbol) {

    if (name.value.includes(sim) === true) {
      alert('Ввёден не правильный символ, исправте строку "Введите имя" ')
      name.value = ''
    }

    if (surname.value.includes(sim) === true) {
      alert('Ввёден не правильный символ, исправте строку "Введите фамилию"')
      surname.value = ''
    }

    if (surnameFather.value.includes(sim) === true) {
      alert('Ввёден не правильный символ, исправте строку "Введите Отчество"')
      surnameFather.value = ''
    }

    if (faculty.value.includes(sim) === true) {
      alert('Ввёден не правильный символ, исправте строку "Введите факультет"')
      faculty.value = ''
    }
  }
})


// Составление данных из формы
function handleFormSubmit(event) {
  event.preventDefault()
  console.log('Отправка!')


  //Получаем доступ до значений в input
  const name = form.querySelector('[name="name"]'),
    surname = form.querySelector('[name="surname"]'),
    surnameFather = form.querySelector('[name="surnameFather"]'),
    dateBirth = form.querySelector('[name="dateBirth"]'),
    dateBeginning = form.querySelector('[name="dateBeginning"]'),
    faculty = form.querySelector('[name="faculty"]')



  // Массив со старыми данными, даты не изменены 
  const initialValuesStudent = {
    name: name.value,
    surname: surname.value,
    surnameFather: surnameFather.value,
    dateBirth: dateBirth.value,
    dateBeginning: dateBeginning.value,
    faculty: faculty.value,
  }


  //Массив с изменёнными данными, для выведения в таблицу
  const valuesStudent = {
    surname: surname.value,
    name: name.value,
    surnameFather: surnameFather.value,
    dateBirth: dateBirth.value,
    dateBeginning: dateBeginning.value,
    faculty: faculty.value,
  }



  //Удаляем данные из input при нажатии на кнопку
  const formArray = [name, surname, surnameFather, dateBirth, dateBeginning, faculty]

  for (const arr of formArray) {
    arr.value = ''
  }

  //Вычисление Дат
  const birthdate = new Date(valuesStudent.dateBirth)
  const cur = new Date()
  const dif = cur - birthdate
  const years = Math.floor(dif / 31557600000)
  valuesStudent.dateBirth = years

  const date = new Date(valuesStudent.dateBeginning)
  const current = new Date()
  const diff = current - date
  const yearStudy = Math.floor(diff / 31557600000)

  if (yearStudy <= 3) {
    valuesStudent.dateBeginning = yearStudy
  } else {
    valuesStudent.dateBeginning = 'закончил'
  }




  //Фильтрация значений ФИО
  const сhangedName = valuesStudent.name.trim().split('')[0].toUpperCase() + valuesStudent.name.trim().substring('1').toLowerCase()
  const сhangedSurname = valuesStudent.surname.trim().split('')[0].toUpperCase() + valuesStudent.surname.trim().substring('1').toLowerCase()
  const сhangedSurnameFather = valuesStudent.surnameFather.trim().split('')[0].toUpperCase() + valuesStudent.surnameFather.trim().substring('1').toLowerCase()

  valuesStudent.name = сhangedName
  valuesStudent.surname = сhangedSurname
  valuesStudent.surnameFather = сhangedSurnameFather
  initialValuesStudent.name = сhangedName
  initialValuesStudent.surname = сhangedSurname
  initialValuesStudent.surnameFather = сhangedSurnameFather

  const nameAndSurname = сhangedSurname + " " + сhangedName + " " + сhangedSurnameFather

  //Функция выводящая значения в таблицу
  addValueStudent(valuesStudent, nameAndSurname)

  //Передаём объект со значения студента в масси в студентов
  arrayStudent.push(valuesStudent)
  initialDataStudent.push(initialValuesStudent)

  console.log(valuesStudent)

}




//Функция, выводящая данные в таблицу
function addValueStudent(student, name) {
  const tableRow = document.createElement('tr')
  const tableDisckription = document.createElement('td')
  const tableDisckription2 = document.createElement('td')
  const tableDisckription3 = document.createElement('td')
  const tableDisckription4 = document.createElement('td')

  tableBody.append(tableRow)
  tableRow.append(tableDisckription)
  tableDisckription.textContent = name

  tableRow.append(tableDisckription2)
  tableDisckription2.textContent = student.dateBirth

  tableRow.append(tableDisckription3)
  tableDisckription3.textContent = student.dateBeginning

  tableRow.append(tableDisckription4)
  tableDisckription4.textContent = student.faculty.toLowerCase()
}


const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)

// Сортировка
const nameSurname = document.getElementsByClassName('name')
const birth = document.getElementsByClassName('birth')
const beginning = document.getElementsByClassName('beginning')
const facultyt = document.getElementsByClassName('facultyt')

nameSurname[0].addEventListener('click', () => {
  if (nameSurname[0].classList[1] === 'work') {
    nameSurname[0].classList.remove('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }

    for (const student of arrayStudent) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }

  } else {

    const sortArray = []
    nameSurname[0].classList.toggle('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }


    for (const student of arrayStudent) {
      sortArray.push(student.surname + student.name + student.surnameFather)
      sortArray.sort()
    }

    for (const sort of sortArray) {
      for (const student of arrayStudent) {
        console.log(sort)
        console.log(student)
        if (sort === student.surname + student.name + student.surnameFather) {
          if (tableArray.length === arrayStudent.length) {
            console.log('Закончить!')
            break
          } else {
            const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
            addValueStudent(student, nameAndSurname)
          }
        }
      }
    }

  }
})

birth[0].addEventListener('click', () => {
  if (birth[0].classList[1] === 'work') {
    birth[0].classList.remove('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }

    for (const student of arrayStudent) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }

  } else {

    const sortArray = []
    birth[0].classList.toggle('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }

    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }

    for (const student of arrayStudent) {
      sortArray.push(student.dateBirth)
      sortArray.sort(compareNumeric)
    }
    console.log(sortArray)

    for (const sort of sortArray) {
      for (const student of arrayStudent) {
        if (sort === student.dateBirth) {
          if (tableArray.length === arrayStudent.length) {
            console.log('Закончить!')
            break
          } else {
            const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
            addValueStudent(student, nameAndSurname)
          }
        }
      }
    }
  }
})

beginning[0].addEventListener('click', () => {
  if (beginning[0].classList[1] === 'work') {
    beginning[0].classList.remove('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }

    for (const student of arrayStudent) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }

  } else {

    const sortArray = []
    beginning[0].classList.toggle('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }

    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    }

    for (const student of arrayStudent) {
      sortArray.push(student.dateBeginning)
      sortArray.sort(compareNumeric)
    }
    console.log(sortArray)

    for (const sort of sortArray) {
      for (const student of arrayStudent) {
        if (sort === student.dateBeginning) {
          if (tableArray.length === arrayStudent.length) {
            console.log('Закончить!')
            break
          } else {
            const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
            addValueStudent(student, nameAndSurname)
          }
        }
      }
    }
  }
})

facultyt[0].addEventListener('click', () => {
  if (facultyt[0].classList[1] === 'work') {
    facultyt[0].classList.remove('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }

    for (const student of arrayStudent) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }

  } else {

    const sortArray = []
    facultyt[0].classList.toggle('work')

    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }


    for (const student of arrayStudent) {
      sortArray.push(student.faculty)
      sortArray.sort()
    }


    for (const sort of sortArray) {
      for (const student of arrayStudent) {
        if (sort === student.faculty) {
          if (tableArray.length === arrayStudent.length) {
            console.log('Закончить!')
            break
          } else {
            const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
            addValueStudent(student, nameAndSurname)
          }
        }
      }
    }
  }
})


const tableArray = tableBody.children
const table = tableArray


// ФИЛТР
const filterName = document.getElementById('filterName')
const filterBirth = document.getElementById('filterBirth')
const filterBeginning = document.getElementById('filterBeginning')
const filterFaculty = document.getElementById('filterFaculty')
let timeout

filterName.addEventListener('input', () => {
  function filtrNameAdd() {
    if (filterName.value !== '') {
      clearTimeout(timeout)
      if (tableArray !== undefined) {
        const remainingElements = tableArray
        const deleteTable = []
        for (let element of remainingElements) {
          if (element.children[0].textContent.toLowerCase().includes(filterName.value.toLowerCase()) !== true) {
            deleteTable.push(element)
          }
        }
        console.log(deleteTable)
        if (deleteTable.length !== 0) {
          timeout = setTimeout(() => {
            for (const el of deleteTable) {
              console.log('Удаляем')
              el.remove()
            }
          }, 2000)
        }
      }
    }
  }
  if (filterBirth.value !== '') {
    console.log('Поле год не пустое')
    filtrNameAdd()
  } else if (filterBeginning.value !== '') {
    console.log('Поле год обучение не пустое')
    filtrNameAdd()
  } else if (filterFaculty.value !== '') {
    console.log('Поле факультет не пустое')
    filtrNameAdd()
  } else {
    const nameFilter = arrayStudent.filter(student => (student.surname + student.name + student.surnameFather).toLowerCase().includes(filterName.value.toLowerCase()))
    const nameNotFilter = []

    if (nameFilter.length !== arrayStudent.length) {
      for (const student of nameFilter) {
        for (const arr of arrayStudent) {
          if (student.surname + student.name + student.surnameFather !== arr.surname + arr.name + arr.surnameFather) {
            nameNotFilter.push(arr)
          }
        }
      }
    }


    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }


    for (const student of nameFilter) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }
  }
})

filterFaculty.addEventListener('input', () => {
  function filtrFacultyAdd() {
    if (filterFaculty.value !== '') {
      clearTimeout(timeout)
      if (tableArray !== undefined) {
        const remainingElements = tableArray
        const deleteTable = []
        for (let element of remainingElements) {
          if (element.children[3].textContent.includes(filterFaculty.value.toLowerCase()) !== true) {
            deleteTable.push(element)
          }
        }
        console.log(deleteTable)
        if (deleteTable.length !== 0) {
          timeout = setTimeout(() => {
            for (const el of deleteTable) {
              console.log('Удаляем')
              el.remove()
            }
          }, 2000)
        }
      }
    }
  }
  if (filterName.value !== '') {
    console.log('Поле имя не пустое')
    filtrFacultyAdd()
  } else if (filterBirth.value !== '') {
    console.log('Поле год не пустое')
    filtrFacultyAdd()
  } else if (filterBeginning.value !== '') {
    console.log('Поле год обучения не пустое')
    filtrFacultyAdd()
  } else {
    const facuntyFilter = arrayStudent.filter(student => (student.faculty).toLowerCase().includes(filterFaculty.value.toLowerCase()))
    const facultyNotFilter = []

    if (facuntyFilter.length !== arrayStudent.length) {
      for (const student of facuntyFilter) {
        for (const arr of arrayStudent) {
          if (student.faculty !== arr.faculty) {
            facultyNotFilter.push(arr)
          }
        }
      }
    }


    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }


    for (const student of facuntyFilter) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }
  }

})

filterBirth.addEventListener('input', () => {
  function filtrBitrthAdd() {
    if (filterBirth.value !== '') {
      clearTimeout(timeout)
      if (tableArray !== undefined) {
        const remainingElements = tableArray
        const deleteTable = []
        for (let element of remainingElements) {
          if (element.children[1].textContent !== String(filterBirth.value)) {
            deleteTable.push(element)
          }
        }
        console.log(deleteTable)
        if (deleteTable.length !== 0) {
          timeout = setTimeout(() => {
            for (const el of deleteTable) {
              console.log('Удаляем')
              el.remove()
            }
          }, 2000)
        }
      }
    }
  }

  if (filterName.value !== '') {
    console.log('Поле имя не пустое')
    filtrBitrthAdd()
  } else if (filterBeginning.value !== '') {
    console.log('Поле год обучение не пустое')
    filtrBitrthAdd()
  } else if (filterFaculty.value !== '') {
    console.log('Поле факультет не пустое')
    filtrBitrthAdd()
  } else {
    const birthFilter = arrayStudent.filter(student => String(student.dateBirth).startsWith(filterBirth.value) && String(student.dateBirth).endsWith(filterBirth.value))
    const birthNotFilter = []

    if (birthFilter.length !== arrayStudent.length) {
      for (const student of birthFilter) {
        for (const arr of arrayStudent) {
          if (student.dateBirth !== arr.dateBirth) {
            birthNotFilter.push(arr)
          }
        }
      }
    }


    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }


    for (const student of birthFilter) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }
  }
})

filterBeginning.addEventListener('input', () => {
  function filtrBeginningAdd() {
    if (filterBeginning.value !== '') {
      clearTimeout(timeout)
      if (tableArray !== undefined) {
        const remainingElements = tableArray
        const deleteTable = []
        for (let element of remainingElements) {
          if (element.children[2].textContent !== String(filterBeginning.value)) {
            deleteTable.push(element)
          }
        }
        console.log(deleteTable)
        if (deleteTable.length !== 0) {
          timeout = setTimeout(() => {
            for (const el of deleteTable) {
              console.log('Удаляем')
              el.remove()
            }
          }, 2000)
        }
      }
    }
  }
  if (filterName.value !== '') {
    console.log('Поле имя не пустое')
    filtrBeginningAdd()
  } else if (filterBirth.value !== '') {
    console.log('Поле год не пустое')
    filtrBeginningAdd()
  } else if (filterFaculty.value !== '') {
    console.log('Поле факультет не пустое')
    filtrBeginningAdd()
  } else {
    const beginingFilter = arrayStudent.filter(student => String(student.dateBeginning).startsWith(filterBeginning.value) && String(student.dateBeginning).endsWith(filterBeginning.value))
    const beginingNotFilter = []

    if (beginingFilter.length !== arrayStudent.length) {
      for (const student of beginingFilter) {
        for (const arr of arrayStudent) {
          if (student.dateBeginning !== arr.dateBeginning) {
            beginingNotFilter.push(arr)
          }
        }
      }
    }


    for (let i = tableArray.length - 1; i >= 0; i--) {
      tableArray[i].remove()
    }


    for (const student of beginingFilter) {
      const nameAndSurname = student.surname + " " + student.name + " " + student.surnameFather
      addValueStudent(student, nameAndSurname)
    }
  }

})

