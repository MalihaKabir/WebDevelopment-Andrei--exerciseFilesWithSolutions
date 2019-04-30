let database = [
  {
    username: "Andy",
    password: "123ab*123",
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

let logIt = newsfeed[2].timeline
console.log(logIt);

let logIt2 = newsfeed[0].timeline
console.log(logIt2);


// // XTRA: A Sign Up form
// let userNamePrompt = prompt("What's your user name?")
// let userPasswordPrompt = prompt("What's your password?")
// // it means, user ekhane jei User-ID ta input dibe shetai hobe 'user' or user er input.
// // And user ekhane jei Password ta input dibe shetai hobe `user's password given by user`, or user er input.
