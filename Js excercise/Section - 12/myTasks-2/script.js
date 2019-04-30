// // TODO LIST:
// let myInput = document.getElementById("userInput")
// let myButton = document.getElementById("enter")
// let myUl = document.querySelector("ul")
//
// myButton.addEventListener("click", function () {
//   if (myInput.value.length > 0) {
//     let newLi = document.createElement("li")
//     newLi.appendChild(document.createTextNode(myInput.value))
//     myUl.appendChild(newLi)
//     myInput.value = ""
//   }
// })
// myInput.addEventListener("keypress", function (event) {
//   if (myInput.value.length > 0 && event.keyCode === 13) {
//     let newLi = document.createElement("li")
//     newLi.appendChild(document.createTextNode(myInput.value))
//     myUl.appendChild(newLi)
//     myInput.value = ""
//   }
// })



// But DRY === Don't Repeat Yourself. So, write it in the below way;
let myInput = document.getElementById("userInput")
let myButton = document.getElementById("enter")
let myUl = document.querySelector("ul")

function inputLength() {
  return myInput.value.length;
}

function createEventListenerElements() {
  let newLi = document.createElement("li")
  newLi.appendChild(document.createTextNode(myInput.value))
  myUl.appendChild(newLi)
  myInput.value = ""
}

function addEventListenerAfterClick() {
  if (inputLength() > 0) {
    createEventListenerElements()
  }
}

function addEventListenerAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createEventListenerElements()
  }
}

myButton.addEventListener("click", addEventListenerAfterClick)
myInput.addEventListener("keypress", addEventListenerAfterKeypress)
