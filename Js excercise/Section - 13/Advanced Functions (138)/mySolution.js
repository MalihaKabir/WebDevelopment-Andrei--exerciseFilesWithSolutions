// const myFunction = (a, b) => a + b

const addTo = a => b => a + b

let addToTen = addTo(20)
console.log(addToTen(5));
console.log(addTo(10)(5));



const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(10)(5));
