// let myFunction = () => {
//   var d = new Date();
//   var n = d.getDay()
//   document.getElementById("demo").innerHTML = n;
// }

// let d = new Date().getDay()
// document.getElementById("demo").innerHTML = d
// console.log(new Date().getDay());

// switch (myFunction()) {
//   case 'n' === 1:
//     console.log(`Hello! It's Friday.`)
//     break
//   case 'n' === 2:
//     console.log(`Hello! It's Saturday.`)
//     break
//   case 'n' === 3:
//     console.log(`Hello! It's Sunday.`)
//     break
//   case 'n' === 4:
//     console.log(`Hello! It's Monday.`)
//     break
//   case 'n' === 5:
//     console.log(`Hello! It's Tuesday.`)
//     break
//   case 'n' === 6:
//     console.log(`Hello! It's Wednesday.`)
//     break
//   case 'n' === 7:
//     console.log(`Hello! It's Thursday.`);
//     break
//   default:
//     console.log(`Something is wrong in your input.`);
//     break
// }

// function getMonday(d) {
//   d = new Date(d);
//   var day = d.getDay(),
//       diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
//   return new Date(d.setDate(diff));
// }

// document.getElementById("demo").innerHTML = getMonday(new Date()); // Mon Nov 08 2010

// function getMonday(d) {
//   d = new Date(d);
//   var day = d.getDay(),
//   if (d.getDate() - day + (day == 0 ? -6:1)) {
//     return "Hello! It's Sunday."
//   } else if (d.getDate() - day + (day == 1 ? -5:2)) {
//     return "Hello! It's Monday."
//   } else if (d.getDate() - day + (day == 2 ? -4:3)) {
//     return "Hello! It's Tuesday."
//   } else {
//     return "Sorry"
//   }
//   return new Date(d.setDate(diff));
// }


function testNum(day) {
  let today = new Date()
  day = today.getDay() || 7
  day > 6 && day < 0
  if(day === 0) {
    console.log("Hello! It's Sunday.");
  } else if (day === 1) {
    console.log("Hello! It's Monday.");
  } else if (day === 2) {
    console.log("Hello! It's Tuesday.");
  } else if (day === 3) {
    console.log("Hello! It's Wednesday.");
  } else if (day === 4) {
    console.log("Hello! It's Thursday.");
  } else if (day === 5) {
    console.log("Hello! It's Friday.");
  } else if (day === 6)
    console.log("Hello! It's Saturday.");
}

testNum()
// testNum(new Date().getDay())
// let num = testNum()
// document.getElementById("demo").innerHTML = num

// function testNum(day) {
//   let today = new Date()
//   day = today.getDay() || 7
//   switch (testNum(day)) {
//     case (day === 0):
//       console.log("Hello! It's Sunday.")
//       break
//     case (day === 1)
//       console.log("Hello! It's Monday.")
//       break
//     case (day === 2)
//       console.log("Hello! It's Tuesday.")
//       break
//     case (day === 3)
//       console.log("Hello! It's Wednesday.")
//       break
//     case (day === 4)
//       console.log("Hello! It's Thursday.")
//       break
//     case (day === 5)
//       console.log("Hello! It's Friday.")
//       break
//     case (day === 6)
//       console.log("Hello! It's Saturday.")
//       break
//     default:
//       console.log(`Something is wrong in your input.`);
//       break
//   }
// }
