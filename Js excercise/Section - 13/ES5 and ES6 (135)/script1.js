// New way to declare Object properties:

// const name = "John Snow"
//
// const obj = {
//   [name]: 'Hello',
//   [2 + 3]: 'hihi'
// }
//
// console.log(obj);


const a = 'Simon'
const b = true
const c = {}

// const obj = {
//   a: a,
//   b:b,
//   c:c,
// }

// if the properties and values are same, in this case, just write:
const obj = { a, b, c}

console.log(obj);


// Symbol:
let symbol1 = Symbol()
let symbol2 = Symbol('foo')
let symbol3 = Symbol('foo')

// try it:
console.log(symbol2 === symbol3);

let symbol = Symbol("This is my first symbol")
console.log(symbol);
