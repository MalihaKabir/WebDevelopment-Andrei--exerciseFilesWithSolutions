let database = [{
  username: "Andrie",
  password: "001",
  timeline: "This is Andrie's timeline. I teach full-stack web developing",
}, {
  username: "Hitesh",
  password: "012",
  timeline: "This is Hitesh's timeline. I teach programming",
}, {
  username: "Traversy",
  password: "123",
  timeline: "This is Traversy's timeline. I teach web developing",
}, {
  username: "mmtuts",
  password: "1234",
  timeLine: "This is from mmtuts's timeline. I teach programming",
}, {
  username: "devMaliha",
  password: "12345",
  timeLine: "This is my timeline. I lovvve to code and I am new in this programming world",
}]


let getId = document.getElementById('timeLine')

function information(userElement, index) {
  if (userElement === database[index].username) {
    getId.innerHTML = database[index].timeLine
  } else {
    getId.innerHTML = "Sorry!"
  }
}


let userNamePrompt = prompt("What's your user name?")
let userPasswordPrompt = prompt("What's your password?")

let signInPrompt = database.forEach(information(userNamePrompt, userPasswordPrompt))

console.log(signInPrompt);
