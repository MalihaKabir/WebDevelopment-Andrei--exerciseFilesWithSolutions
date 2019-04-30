// NOT DONE:
let database = [{
  userName: "Andrie",
  passWord: "123", //use everything in string, even passWords either.
}, {
  userName: "Hitesh",
  passWord: "1234",
}, {
  userName: "James Bond",
  passWord: "777",
}, {
  userName: "Ethan Hunt",
  passWord: "MI"
}]

let newsfeed = [{
  userName: "Andrie",
  timeline: "This is Andrie's timeline.",
}, {
  userName: "Hitesh",
  timeline: "This is Hitesh's timeline.",
}, {
  userName: "James Bond",
  timeline: "This is James Bond's timeline.",
}, {
  userName: "Ethan Hunt",
  timeline: "This is Ethan Hunt's timeline.",
}]

// let timeLineArray = []

function isUserValid(username, password) {
  for (var index = 0; index < database.length; index++) {
    if (database[index].userName === username && database[index].passWord === password) {
      return true;
    }
  }
  return false;
};

// let checkMatch = function (username, password) {
//   for (let i = 0; i < database.length; i++) {
//     database[i]
//
//     for (let i = 0; i < newsfeed.length; i++) {
//       newsfeed[i]
//
//       if (database[i] === newsfeed[i]) {
//         return newsfeed[i].timeline
//       }
//     }
//   }
// }

function signIn(username, password) {
  if (isUserValid(username, password)) {
    // checkMatch(username, password)

    // for (let i = 0; i < database.length; i++) {
    //   database[i]
    //
    //   for (let i = 0; i < newsfeed.length; i++) {
    //     newsfeed[i]
    //
    //     if (database[i] === newsfeed[i]) {
    //       return newsfeed[i].timeline
    //     }  else {
    //       console.log("Sorry");
    //     }
    //   }
    // }

    database.forEach(function (data, i) {
      userNameX = data.userName
      iX = i

      newsfeed.forEach(function (feedElement, i) {
        userNameY = feedElement.userName
        iY = i

        if (userNameX === userNameY && iX === iY) {
          console.log(feedElement.timeline, i);
        }
      })
    })

  } else {
    alert(`Sorry. Wrong username or password`);
  }
};



let userNamePrompt = prompt("Enter user Id.")
let passwordPrompt = prompt("Enter your password.")

signIn(userNamePrompt, passwordPrompt)

// console.log(signIn(userNamePrompt, passwordPrompt));

// document.getElementById('test').innerHTML = signIn(userNamePrompt, passwordPrompt)
