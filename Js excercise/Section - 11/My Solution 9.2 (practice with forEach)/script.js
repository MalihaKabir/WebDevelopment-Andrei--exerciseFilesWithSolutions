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

function signIn(username, password) {
  if (isUserValid(username, password)) {
    database.forEach(function (data, i) {
      userNameX = data.userName

      newsfeed.forEach(function (feedElement, i) {
        userNameY = feedElement.userName

        if (userNameX === userNameY) {
          console.log(feedElement.timeline);
        }
      })
    })
  } else {
    alert(`Sorry. Wrong username or password`);
  }
};


// function signIn(username, password) {
//   if (isUserValid(username, password)) {
//     database.forEach(function (data, i) {
//       userNameX = data.userName
//
//       newsfeed.forEach(function (feedElement, i) {
//         userNameY = feedElement.userName
//
//         if (userNameX === userNameY) {
//           return feedElement[i].timeline
//         }
//       })
//     })
//   } else {
//     alert(`Sorry. Wrong username or password`);
//   }
// };



let userNamePrompt = prompt("Enter user Id.")
let passwordPrompt = prompt("Enter your password.")

signIn(userNamePrompt, passwordPrompt)
// console.log(signIn(userNamePrompt, passwordPrompt));

// document.getElementById('test').innerHTML = signIn(userNamePrompt, passwordPrompt)
