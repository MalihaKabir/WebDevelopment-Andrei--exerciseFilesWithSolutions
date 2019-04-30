// Using arrow function: turn if-else into turnery Operator(task).
let testNum = (day) => {
  let today = new Date()
  day = today.getDay() || 7
  day > 0 && day < 7
  if(day === 0) {
    return ("Hello! It's Sunday.");
  } else if (day === 1) {
    return ("Hello! It's Monday.");
  } else if (day === 2) {
    return ("Hello! It's Tuesday.");
  } else if (day === 3) {
    return ("Hello! It's Wednesday.");
  } else if (day === 4) {
    return ("Hello! It's Thursday.");
  } else if (day === 5) {
    return ("Hello! It's Friday.");
  } else (day === 6)
    return ("Hello! It's Saturday.");
}

testNum()
// let num = testNum()
// document.getElementById("demo").innerHTML = num
document.querySelector('#demo').innerHTML = testNum()


// // by using switch
// let today = new Date()
// let day = today.getDay() || 7
// day > 0 && day < 7
//
// let demoPara = document.querySelector('#demo')
//
// // switch (day) {
// //     case 0:
// //       console.log("Hello! It's Sunday.")
// //       break
// //     case 1:
// //       console.log("Hello! It's Monday.")
// //       break
// //     case 2:
// //       console.log("Hello! It's Tuesday.")
// //       break
// //     case 3:
// //       console.log("Hello! It's Wednesday.")
// //       break
// //     case 4:
// //       console.log("Hello! It's Thursday.")
// //       break
// //     case 5:
// //       console.log("Hello! It's Friday.")
// //       break
// //     case 6:
// //       console.log("Hello! It's Saturday.")
// //       break
// // }
//
// switch (day) {
//     case 0:
//       demoPara.innerHTML = `Hello! It's Sunday.`
//       break
//     case 1:
//       demoPara.innerHTML = `Hello! It's Monday.`
//       break
//     case 2:
//       demoPara.innerHTML = `Hello! It's Tuesday.`
//       break
//     case 3:
//       demoPara.innerHTML = `Hello! It's Wednesday.`
//       break
//     case 4:
//       demoPara.innerHTML = `Hello! It's Thursday.`
//       break
//     case 5:
//       demoPara.innerHTML = `Hello! It's Friday.`
//       break
//     case 6:
//       demoPara.innerHTML = `Hello! It's Saturday.`
//       break
// }



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
