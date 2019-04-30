let database = [
  {
    username: "Andy",
    password: "123",
  },
]


let newsfeed = [
  {
    username: "Andrie",
    timeline: "This is Andrie's timeline",
  }, {
    username: "Hitesh",
    timeline: "This is Hitesh's timeline",
  }, {
    username: "Talvia",
    timeline: "This is Talvia's timeline",
  },
]


// A Sign Up form
let userNamePrompt = prompt("What's your user name?")
let userPasswordPrompt = prompt("What's your password?")
// 'prompt()' renders these massages and it also accepts those values which are given by User in its blank-input-area.

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username or password.")
  }
}

signIn(userNamePrompt, userPasswordPrompt)

// it means, user ekhane jei User-ID ta input dibe shetai hobe 'user' or user er input.
// And user ekhane jei Password ta input dibe shetai hobe `user's password given by user`, or user er input.

// // Definition and Usage of The prompt() method:
// The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.



// // Extra(Updated version)- my proactive work which is correctly done: Render everyone's timeline in your HTML page.
// let firstUser = newsfeed[0].username
// let firstTimeLine = newsfeed[0].timeline
// let firstUserWork = `Hi! I am ${firstUser}. ${firstTimeLine}.`
//
//
// let secondUser = newsfeed[1].username
// let secondTimeLine = newsfeed[1].timeline
// let secondUserWork = `Hi! I am ${secondUser}. ${secondTimeLine}.`
//
//
// let thirdUser = newsfeed[2].username
// let thirdTimeLine = newsfeed[2].timeline
// let thirdUserWork = `Hi! I am ${thirdUser}. ${thirdTimeLine}.`
//
// // let wholeNewsFeed = firstUserWork + "<br>" + secondUserWork + "<br>" + thirdUserWork
// // OR
// let wholeNewsFeed = `${firstUserWork} <br> ${secondUserWork} <br> ${thirdUserWork}`
//
// let getID = document.getElementById('timeLine')
//
//
// function signIn(user, pass) {
//   if (user === database[0].username && pass === database[0].password) {
//     getID.innerHTML = wholeNewsFeed
//   } else {
//     getID.innerHTML = "Sorry!!"
//   }
// }
//
// let signInPrompt = signIn(userNamePrompt, userPasswordPrompt)
//
// console.log(signInPrompt);
