let database = [
  {
    username: "Andy",
    password: "123*123",
  },
  {
    username: "Sally",
    password: "123",
  },
  {
    username: "Andrie",
    password: "777",
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

function isUserValid(user, pass) {
  for (var index = 0; index < database.length; index++) {
    if (database[index].username === user && database[index].password === pass) {
      return true;
    }
  }
  return false;
  // write this 'return' after the loop.
}

function signIn(user, pass) {
  // console.log(isUserValid(user, pass));
  if (isUserValid(user, pass)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username or password.")
  }
}

let userNamePrompt = prompt("What's your user name?")
let userPasswordPrompt = prompt("What's your password?")

signIn(userNamePrompt, userPasswordPrompt)



// it means, user ekhane jei User-ID ta input dibe shetai hobe 'user' or user er input.
// And user ekhane jei Password ta input dibe shetai hobe `user's password given by user`, or user er input.



// // Definition and Usage of The prompt() method:
// The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
