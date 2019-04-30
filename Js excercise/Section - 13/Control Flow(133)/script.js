// Ternary Operator:
// condition ? expression1 : expression2

// Example 1:
function isUserValid(bool) {
  return bool
}

// let answer = isUserValid(true) ? 'Please enter' : 'Access denied'
let answer = isUserValid(false) ? 'Please enter' : 'Access denied'

console.log(answer);


// Example 2:
// let automatedAnswer = 'Your account # is ' + (isUserValid(true) ? '1234' : 'not available')
// or
let automatedAnswer
= `Your account #number is ${isUserValid(true) ? '1234' : 'not available'}.`

console.log(automatedAnswer);


// SWITCH:
console.log(Date());

// Example1:
let highScore = 3

switch (highScore) {
  case 1:
    greeting = "It is case 1."
    break
  case 2:
    greeting = "It is case 2."
    break
  case 3:
    greeting = "It is case 3."
    break
  default:
    greeting = "It is default."
    break
}

console.log(greeting);

// Example2:
switch (Date()) {
  case Date():
    console.log(`Hello! It's Friday.`)
    break
  case Date():
    console.log(`Hello! It's Saturday.`)
    break
  case Date():
    console.log(`Hello! It's Sunday.`)
    break
  case Date():
    console.log(`Hello! It's Monday.`)
    break
  case Date():
    console.log(`Hello! It's Tuesday.`)
    break
  case Date():
    console.log(`Hello! It's Wednesday.`)
    break
  case Date():
    console.log(`Hello! It's Thursday.`);
    break
  default:
    console.log(`Something is wrong in your input.`);
    break
}

// Example3:
function moveCommand(direction) {
  let whatHappens
  switch (direction) {
    case 'forward':
      whatHappens = "You encounter a monster."
      break;
    case 'back':
      whatHappens = "You arrived home."
      break;
    case 'right':
      whatHappens = "You found a river."
      break;
    case 'left':
      whatHappens = "You run into a troll."
      break;
    default:
      whatHappens = "Please enter a valid direction."
  }
  return whatHappens;
}

console.log(moveCommand('forward'));
