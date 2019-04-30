let input = document.getElementById('input')
let button = document.getElementById('enter')
let ul = document.querySelector('ul')

// The list starts:
function inputValueLength() {
  return input.value.length
}

function createItems() {
  // add button and add items:
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = ""

  // delete button and delete items:
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
 	li.appendChild(btn);
  btn.addEventListener('click', function () {
    li.remove()
  })
}

function forMouseClick() {
  if (inputValueLength() > 0) {
      createItems()
    }
}

function forEnter(event) {
    if (inputValueLength() > 0 && event.keyCode === 13) {
      createItems()
    }
}



button.addEventListener('click', forMouseClick)
input.addEventListener('keypress', forEnter)
