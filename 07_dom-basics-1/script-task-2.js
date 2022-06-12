document.addEventListener('DOMContentLoaded', function () {

  let input = document.getElementById('input')
  let heading = document.getElementById('heading')
  let sec = 300

  function timeoutValuesHeading() {
    setTimeout(() => {
      let value1 = input.value

      setTimeout(() => {
        let value2 = input.value
        if (value1 == value2) {
          heading.innerHTML = value2
        }
      }, sec)
    }, 0)
  }
  input.addEventListener('input', timeoutValuesHeading)
})

