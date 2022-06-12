function pageDataOutput() {

  const appTitle = document.createElement('h2')
  const divBox = document.createElement('div')
  const list = document.createElement('ul')

  appTitle.innerHTML = 'Статьи'
  list.classList.add('list')
  divBox.classList.add('box')
  document.body.append(divBox)
  divBox.append(appTitle)
  divBox.append(list)

  function crateAppItems(arrayArticles) {
    arrayObj = []


    for (const text of arrayArticles.data) {
      const item = document.createElement('li')
      const link = document.createElement('a')
      item.classList.add('items')
      link.classList.add('link')
      link.textContent = text.title
      list.append(item)
      item.append(link)
      link.href = `index-2.html?id=${text.id}`
      link.target = '_blank'
      arrayObj.push(text)

      link.addEventListener('click', function () {
        title = link.textContent
      })
    }
  }

  let activePage = 1

  function navigation() {
    const boxNavigationList = document.createElement('ul')
    boxNavigationList.classList.add('pagination', 'pagination-lg', 'd-flex', 'justify-content-center')
    divBox.append(boxNavigationList)


    for (let i = 1; i <= 10; ++i) {
      const boxNavigationItem = document.createElement('li')
      const navigationLink = document.createElement('a')

      boxNavigationItem.classList.add('page-item')
      navigationLink.classList.add('page-link')

      navigationLink.textContent = i

      boxNavigationList.append(boxNavigationItem)
      boxNavigationItem.append(navigationLink)

      if (navigationLink.textContent == 1) {
        boxNavigationItem.classList.add('active')
      }

      boxNavigationItem.addEventListener('click', () => {
        console.log(boxNavigationList.children)
        for (const y of boxNavigationList.children) {
          if (y.classList.contains('active')) {
            y.classList.remove('active')
          }
        }
        boxNavigationItem.classList.add('active')
        console.log(navigationLink)
        activePage = navigationLink.textContent
        result()
      })
    }
  }
  navigation()

  async function result() {
    list.innerHTML = ""
    const server = await fetch(`https://gorest.co.in/public-api/posts?page=${activePage}`)
    const resultServer = await server.json()
    crateAppItems(resultServer)
  }
  result()
}

async function article() {

  let paramsString = document.location.search; //
  let searchParams = new URLSearchParams(paramsString);

  const server = await fetch(`https://gorest.co.in/public-api/posts/${searchParams.get("id")}`)
  const resultServer = await server.json()

  const appTitle = document.createElement('h1')
  const divBox = document.createElement('div')
  const divBoxTwo = document.createElement('div')
  const descr = document.createElement('p')

  const commentList = document.createElement('ul')
  const commentItem = document.createElement('li')

  appTitle.textContent = resultServer.data.title
  descr.textContent = resultServer.data.body
  divBox.classList.add('box')
  divBoxTwo.classList.add('box')
  document.body.append(divBox)
  divBox.append(appTitle)
  divBox.append(descr)

  const serverComments = await fetch(`https://gorest.co.in/public-api/comments?post_id=${searchParams.get("id")}`)
  const resultServerComments = await serverComments.json()

  if (resultServerComments.data.length >= 1) {
    document.body.append(divBoxTwo)
    divBoxTwo.append(commentList)
    commentList.append(commentItem)
    for (const conclusion of resultServerComments.data) {
      const commentNameUser = document.createElement('h4')
      const commentEmailUser = document.createElement('a')
      const commentText = document.createElement('p')

      commentNameUser.textContent = conclusion.name
      commentEmailUser.textContent = conclusion.email
      commentText.textContent = conclusion.body

      commentItem.append(commentNameUser)
      commentItem.append(commentEmailUser)
      commentItem.append(commentText)

    }
  }
}
