let database = [{
  username: "Andrie",
  password: "001",
}, {
  username: "Hitesh",
  password: "012",
}, {
  username: "Traversy",
  password: "123",
}, {
  username: "mmtuts",
  password: "1234",
}, {
  username: "devMaliha",
  password: "12345",
}]


let newsfeed = [
  {
    username: "Andrie",
    timeline: "This is Andrie's timeline. I teach full-stack web developing",
  }, {
    username: "Hitesh",
    timeline: "This is Hitesh's timeline. I teach programming",
  }, {
    username: "Traversy",
    timeline: "This is Traversy's timeline. I teach web developing",
  }, {
    username: "mmtuts",
    timeLine: "This is from mmtuts's timeline. I teach programming"
  }, {
    username: "devMaliha",
    timeLine: "This is my timeline. I lovvve to code and I am new in this programming world"
  },
]

let firstUser = database[0].username
let firstUserPass = database[0].password

let secondUser = database[1].username
let secondUserPass = database[1].password

let thirdUser = database[2].username
let thirdUserPass = database[2].password

let forthUser = database[3].username
let forthUserPass = database[3].password

let fifthUser = database[4].username
let fifthUserPass = database[4].password


// let firstUser = newsfeed[0].username
let firstTimeLine = newsfeed[0].timeline
let firstUserWork = `Hi! I am ${firstUser}. ${firstTimeLine}.`

// let secondUser = newsfeed[1].username
let secondTimeLine = newsfeed[1].timeline
let secondUserWork = `Hi! I am ${secondUser}. ${secondTimeLine}.`

// let thirdUser = newsfeed[2].username
let thirdTimeLine = newsfeed[2].timeline
let thirdUserWork = `Hi! I am ${thirdUser}. ${thirdTimeLine}.`

// let forthUser = newsfeed[3].username
let forthTimeLine = newsfeed[3].timeLine
let forthUserWork = `Hi! ${forthTimeLine}.`

// let fifthUser = newsfeed[4].username
let fifthTimeLine = newsfeed[4].timeLine
let fifthUserWork = `Hi! I am ${fifthUser}. I am a self-taught front-end web developer. ${fifthTimeLine}.`

let getIdOne = document.getElementById('timeLine1')
let getIdTwo = document.getElementById('timeLine2')
let getIdThree = document.getElementById('timeLine3')
let getIdFour = document.getElementById('timeLine4')
let getIdFive = document.getElementById('timeLine5')


function signIn(user, pass) {
  if (user === firstUser && pass === firstUserPass) {
    getIdOne.innerHTML = firstUserWork
  } else if (user === secondUser && pass === secondUserPass) {
    getIdTwo.innerHTML = secondUserWork
  } else if (user === thirdUser && pass === thirdUserPass) {
    getIdThree.innerHTML = thirdUserWork
  } else if (user === forthUser && pass === forthUserPass) {
    getIdThree.innerHTML = forthUserWork
  }  else if (user === fifthUser && pass === fifthUserPass) {
    getIdThree.innerHTML = fifthUserWork
  } else {
    getIdThree.innerHTML = "Sorry! Incorrect user name or password."
  }
}

let userNamePrompt = prompt("What's your user name?")
let userPasswordPrompt = prompt("What's your password?")

let signInPrompt = signIn(userNamePrompt, userPasswordPrompt)

console.log(signInPrompt);
