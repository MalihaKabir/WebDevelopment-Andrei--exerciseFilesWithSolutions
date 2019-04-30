// let btn = document.getElementById('enter')
//
// btn.addEventListener('mouseenter', function () {
//   console.log('Clicked!!');
// })


// Create todo list:
let userInput = document.getElementById('userInput')
let button = document.getElementById('enter')
let ul = document.querySelector('ul')

button.addEventListener('click', function () {
  if (userInput.value.length > 0) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li)
    userInput.value = ""
  }
})


userInput.addEventListener('keypress', function (event) {
  if (userInput.value.length > 0 && event.keyCode === 13) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li)
    userInput.value = ""
  }
})

// // Elaboration of above code:
// document.getElementById('enter').addEventListener('click', function () {
//   if (document.getElementById('userInput').value.length > 0) {
//     document.querySelector('ul').appendChild(document.createElement('li')).appendChild(document.createTextNode(document.getElementById('userInput').value))
//
//     document.getElementById('userInput').value = ""
//   }
// })
//
// document.getElementById('userInput').addEventListener('keypress', function (event) {
//   if (document.getElementById('userInput').value.length > 0 && event.keyCode === 13) {
//     document.querySelector('ul').appendChild(document.createElement('li')).appendChild(document.createTextNode(document.getElementById('userInput').value))
//
//     document.getElementById('userInput').value = ""
//   }
// })
