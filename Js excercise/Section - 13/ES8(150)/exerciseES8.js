// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
('     ||<- Start line');
('       🐢');
('       🐇');

// when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);

// Solution:
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));
// console.log(startLine.trim());


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

// Solution:
console.log(turtle);


// #3) Get the below object to go from:
let obj = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
};
// to this:
('my name is Rudolf the raindeer');

// Solution: (with help)
console.log(Object.entries(obj));

const sentence1 = Object.entries(obj).map(element => {
  return element.join(' ') // 'join()' will join the elementS internally(as each element is an array) of each element of new array crearted by 'map()'. As each element is an array, this is why we're using "join()" here with 'element' to emerge this small array into a sentence.
})

console.log(sentence1);

const sentence2 = sentence1.join(' ') // here, "join()" will join external elements and render a new sentence instead of that array or by replacing the existing array.
console.log(sentence2);


// ".join()" not only join an array, but also turn an array into a sentence.
