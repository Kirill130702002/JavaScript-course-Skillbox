(function () {
  // создаём и возвращаем заголовок
  function createAppTitle(title) {
    let appTitle = document.createElement('h2')
    appTitle.innerHTML = title
    return appTitle
  }

  // создаём и возвращаем форму для создания тела
  function createTodoItemForm() {
    let form = document.createElement('form')
    let input = document.createElement('input')
    let buttonWrapper = document.createElement('div')
    let button = document.createElement('button')


    form.classList.add('input-group', 'mb-3')
    input.classList.add('form-control')
    input.placeholder = 'Введите название нового дела'
    buttonWrapper.classList.add('input-group-append')
    button.classList.add('btn', 'btn-primary')
    button.textContent = 'Добавить дело'

    buttonWrapper.append(button)
    form.append(input)
    form.append(buttonWrapper)

    return {
      form,
      input,
      button,
    }
  }

  // Создаём и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul')
    list.classList.add('list-group')
    return list
  }

  function createTodoItem(name) {
    let item = document.createElement('li')

    // Кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div')
    let doneButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    // Устанавливаем стили для элемента списка, а также для размещения кнопок
    // В его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    item.textContent = name


    buttonGroup.classList.add('btn-group', 'btn-group-sm')
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово'
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить'

    // Вкладываем кнопки в отдельный элемент, чтобы они объеденились в один блок
    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton)
    item.append(buttonGroup)

    // Приложению нужен доступ к самому элементу и кнопкам, чтобы они обрабатывались при нажатии
    return {
      item,
      doneButton,
      deleteButton,
    }
  }

  function createTodoApp(container, title = 'Список дел', arrayCasesUser) {

    let todoAppTitle = createAppTitle(title)
    let todoItemForm = createTodoItemForm()
    let todoList = createTodoList()

    container.append(todoAppTitle)
    container.append(todoItemForm.form)
    container.append(todoList)


    if (todoAppTitle.textContent == 'Мои дела') {
      todoMyCases()
    } else if (todoAppTitle.textContent == 'Дела мамы') {
      todoMomCases()
    } else if (todoAppTitle.textContent == 'Дела папы') {
      todoDadCases()
    } else {
      console.log('Ошибка')
      todoMyCases()
    }


    function todoMyCases() {

      let parseObject = JSON.parse(localStorage.getItem('myCases'))
      // проверка на дела

      if (!parseObject || parseObject.length === 0) {                  // Здесь мы проверяем, пустой ли localStorage
        for (let firstCase of arrayCasesUser) {        // Если не пустой, выводим дела Юзера
          todoItem = createTodoItem(firstCase.name)
          todoList.append(todoItem.item)

          console.log(arrayCasesUser)

          // проверка на done

          if (firstCase.done === true) {
            todoItem.item.classList.toggle('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function (e) {
            firstCase.done = true
            e.target.parentNode.parentNode.classList.toggle('list-group-item-success')
            console.log('Выполненно прекрасно')
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))
          })

          todoItem.deleteButton.addEventListener('click', function (e) {
            if (confirm('Вы уверены?')) {
              firstCase.done = null
              e.target.parentNode.parentNode.remove()
            }
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))
          })
        }
      }
      else {
        arrayCasesUser = parseObject

        // цикл воспроизводящий дела

        for (let y of arrayCasesUser) {

          todoItem = createTodoItem(y.name)
          todoList.append(todoItem.item)

          // проверка на done

          if (y.done === true) {
            todoItem.item.classList.toggle('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function (e) {
            y.done = true
            e.target.parentNode.parentNode.classList.toggle('list-group-item-success')
            console.log('Выполненно прекрасно')
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))
          })

          todoItem.deleteButton.addEventListener('click', function (e) {
            if (confirm('Вы уверены?')) {
              y.done = null
              e.target.parentNode.parentNode.remove()
            }
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))
          })
        }
      }



      // Браузер создаёт событие submit на форме по нажатию на энтер или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', function (e) {
        // Эта строчка необходима, чтобы предотвратить стандартное действие браузера
        // В даной ситуации, мы не хотим чтобы страница перезагружалась при отправке формы
        e.preventDefault()

        // Игнорируем создания элемента, если пользователь ничего не ввёл в поле
        if (!todoItemForm.input.value) {
          return
        }

        let todoItem = createTodoItem(todoItemForm.input.value)
        let valueOfTask = todoItemForm.input.value
        let objectCase = { name: valueOfTask, done: false }


        // Добавляем обработчик на кнопки


        todoItem.doneButton.addEventListener('click', function () {
          objectCase.done = true
          todoItem.item.classList.toggle('list-group-item-success')
          localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))
          console.log(JSON.parse(localStorage.getItem('myCases')))
          return objectCase
        })


        todoItem.deleteButton.addEventListener('click', function (e) {
          if (confirm('Вы уверены?')) {
            todoItem.item.remove()
            objectCase.done = null
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))
            return objectCase
          }
        })

        // Создаём и добавляем в список новое дело с названием из поля для ввода
        todoList.append(todoItem.item)



        arrayCasesUser.push(objectCase)
        let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)

        localStorage.setItem('myCases', JSON.stringify(filteredArrayCases))



        // Обнуляем значение в поле, чтобы не пришлось стирать его вручную
        todoItemForm.input.value = ''
        todoItemForm.button.disabled = true
      })



      if (todoItemForm.input.value == '') {
        todoItemForm.button.disabled = true
        todoItemForm.input.addEventListener('input', function () {
          todoItemForm.button.disabled = false
        })
      }

      JSON.parse(localStorage.getItem('myCases'))
    }

    function todoMomCases() {
      let parseObject = JSON.parse(localStorage.getItem('momCases'))
      // проверка на дела



      if (!parseObject || parseObject.length === 0) {                  // Здесь мы проверяем, пустой ли localStorage
        for (let firstCase of arrayCasesUser) {        // Если не пустой, выводим дела Юзера
          todoItem = createTodoItem(firstCase.name)
          todoList.append(todoItem.item)

          console.log(arrayCasesUser)

          // проверка на done

          if (firstCase.done === true) {
            todoItem.item.classList.toggle('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function (e) {
            firstCase.done = true
            e.target.parentNode.parentNode.classList.toggle('list-group-item-success')
            console.log('Выполненно прекрасно')
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))
          })

          todoItem.deleteButton.addEventListener('click', function (e) {
            if (confirm('Вы уверены?')) {
              firstCase.done = null
              e.target.parentNode.parentNode.remove()
            }
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))
          })
        }
      }
      else {
        arrayCasesUser = parseObject

        // цикл воспроизводящий дела

        for (let y of arrayCasesUser) {

          todoItem = createTodoItem(y.name)
          todoList.append(todoItem.item)

          console.log(arrayCasesUser)

          // проверка на done

          if (y.done === true) {
            todoItem.item.classList.toggle('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function (e) {
            y.done = true
            e.target.parentNode.parentNode.classList.toggle('list-group-item-success')
            console.log('Выполненно прекрасно')
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))
          })

          todoItem.deleteButton.addEventListener('click', function (e) {
            if (confirm('Вы уверены?')) {
              y.done = null
              e.target.parentNode.parentNode.remove()
            }
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))
          })
        }
      }



      // Браузер создаёт событие submit на форме по нажатию на энтер или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', function (e) {
        // Эта строчка необходима, чтобы предотвратить стандартное действие браузера
        // В даной ситуации, мы не хотим чтобы страница перезагружалась при отправке формы
        e.preventDefault()

        // Игнорируем создания элемента, если пользователь ничего не ввёл в поле
        if (!todoItemForm.input.value) {
          return
        }

        let todoItem = createTodoItem(todoItemForm.input.value)
        let valueOfTask = todoItemForm.input.value
        let objectCase = { name: valueOfTask, done: false }


        // Добавляем обработчик на кнопки


        todoItem.doneButton.addEventListener('click', function () {
          objectCase.done = true
          todoItem.item.classList.toggle('list-group-item-success')
          localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))
          console.log(JSON.parse(localStorage.getItem('momCases')))
          return objectCase
        })


        todoItem.deleteButton.addEventListener('click', function (e) {
          if (confirm('Вы уверены?')) {
            todoItem.item.remove()
            objectCase.done = null
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))
            return objectCase
          }
        })

        // Создаём и добавляем в список новое дело с названием из поля для ввода
        todoList.append(todoItem.item)



        arrayCasesUser.push(objectCase)
        let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)

        localStorage.setItem('momCases', JSON.stringify(filteredArrayCases))



        // Обнуляем значение в поле, чтобы не пришлось стирать его вручную
        todoItemForm.input.value = ''
        todoItemForm.button.disabled = true
      })



      if (todoItemForm.input.value == '') {
        todoItemForm.button.disabled = true
        todoItemForm.input.addEventListener('input', function () {
          todoItemForm.button.disabled = false
        })
      }

      JSON.parse(localStorage.getItem('momCases'))
    }

    function todoDadCases() {
      let parseObject = JSON.parse(localStorage.getItem('dadCases'))
      // проверка на дела

      if (!parseObject || parseObject.length === 0) {
        for (let firstCase of arrayCasesUser) {
          todoItem = createTodoItem(firstCase.name)
          todoList.append(todoItem.item)

          console.log(arrayCasesUser)

          // проверка на done

          if (firstCase.done === true) {
            todoItem.item.classList.toggle('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function (e) {
            firstCase.done = true
            e.target.parentNode.parentNode.classList.toggle('list-group-item-success')
            console.log('Выполненно прекрасно')
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))
          })

          todoItem.deleteButton.addEventListener('click', function (e) {
            if (confirm('Вы уверены?')) {
              firstCase.done = null
              e.target.parentNode.parentNode.remove()
            }
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))
          })
        }
      }
      else {
        arrayCasesUser = parseObject

        // цикл воспроизводящий дела

        for (let y of arrayCasesUser) {

          todoItem = createTodoItem(y.name)
          todoList.append(todoItem.item)

          console.log(arrayCasesUser)

          // проверка на done

          if (y.done === true) {
            todoItem.item.classList.toggle('list-group-item-success')
          }

          todoItem.doneButton.addEventListener('click', function (e) {
            y.done = true
            e.target.parentNode.parentNode.classList.toggle('list-group-item-success')
            console.log('Выполненно прекрасно')
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))
          })

          todoItem.deleteButton.addEventListener('click', function (e) {
            if (confirm('Вы уверены?')) {
              y.done = null
              e.target.parentNode.parentNode.remove()
            }
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))
          })
        }
      }



      // Браузер создаёт событие submit на форме по нажатию на энтер или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', function (e) {
        // Эта строчка необходима, чтобы предотвратить стандартное действие браузера
        // В даной ситуации, мы не хотим чтобы страница перезагружалась при отправке формы
        e.preventDefault()

        // Игнорируем создания элемента, если пользователь ничего не ввёл в поле
        if (!todoItemForm.input.value) {
          return
        }

        let todoItem = createTodoItem(todoItemForm.input.value)
        let valueOfTask = todoItemForm.input.value
        let objectCase = { name: valueOfTask, done: false }


        // Добавляем обработчик на кнопки


        todoItem.doneButton.addEventListener('click', function () {
          objectCase.done = true
          todoItem.item.classList.toggle('list-group-item-success')
          localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))
          console.log(JSON.parse(localStorage.getItem('dadCases')))
          return objectCase
        })


        todoItem.deleteButton.addEventListener('click', function (e) {
          if (confirm('Вы уверены?')) {
            todoItem.item.remove()
            objectCase.done = null
            let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)
            localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))
            return objectCase
          }
        })

        // Создаём и добавляем в список новое дело с названием из поля для ввода
        todoList.append(todoItem.item)



        arrayCasesUser.push(objectCase)
        let filteredArrayCases = arrayCasesUser.filter(cas => cas.done !== null)

        localStorage.setItem('dadCases', JSON.stringify(filteredArrayCases))



        // Обнуляем значение в поле, чтобы не пришлось стирать его вручную
        todoItemForm.input.value = ''
        todoItemForm.button.disabled = true
      })



      if (todoItemForm.input.value == '') {
        todoItemForm.button.disabled = true
        todoItemForm.input.addEventListener('input', function () {
          todoItemForm.button.disabled = false
        })
      }

      JSON.parse(localStorage.getItem('dadCases'))
    }






  }
  window.createTodoApp = createTodoApp
})()
