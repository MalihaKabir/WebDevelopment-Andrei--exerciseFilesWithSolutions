// To make the 'properties' of a constant-object as constant:

// Default one:
const objOne = {
  player: 'Bobby',
  experience: 100,
  wizardLevel: false,
}

objOne.player = 'Bruce'
console.log(objOne.player);

// Let's do Destructuring:
const objTwo = {
  player: 'Bobby',
  experience: 100,
  wizardLevel: true,
}

// // You can do...:
// const player = objTwo.player
// const experience = objTwo.experience
// let wizardLevel = objTwo.wizardLevel

// Better way of doing it...:
const { player, experience } = objTwo
let { wizardLevel } = objTwo

// player = tony // try it

// objTwo.player = 'Tony' // Do not do it.

wizardLevel = false

console.log(player);
console.log(wizardLevel);
