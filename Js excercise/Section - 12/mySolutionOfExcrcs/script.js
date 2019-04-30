let userInput = document.getElementById('userInput')
let enter = document.getElementById('enter')
let ul = document.querySelector('ul')
let btn = document.getElementsByClassName('delete')

enter.addEventListener("click", function () {
  if (userInput.value.length > 0) {
    let liNew = document.createElement('li')
    liNew.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(liNew)
    userInput.value = ""
  }

})
