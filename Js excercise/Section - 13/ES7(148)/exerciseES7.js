// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = [ 'Tim', 'Johnathan', 'Sandy', 'Sarah' ];

// solution:
console.log(dragons.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const names = [ 'Tim', 'Johnathan', 'Sandy', 'Sarah' ];

// solution:
const name = names.filter((element) => element.includes('John'));
console.log(name);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

// solution:
const powerOf100 = (number) => number ** 100;
console.log(powerOf100(10000));
