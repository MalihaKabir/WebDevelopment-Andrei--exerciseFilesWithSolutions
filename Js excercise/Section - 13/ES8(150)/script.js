// .padStart()
// .padEnd()
// These two create empty spaces.

let padStarting = 'Turtle'.padStart(50);
console.log(padStarting);

console.log('Turtle'.padEnd(50));


// Object.values
// Object.entries
// Object.keys
// All of these three, which are mentioned above, Turn Object into Array!

let obj = {
	username0: 'Shelly',
	username1: 'John',
	username2: 'Mr.Grinch'
};

console.log('Keys', Object.keys(obj));
console.log('Entries', Object.entries(obj));
console.log('Values', Object.values(obj));

// Object.keys
Object.keys(obj).forEach((key, index) => {
	console.log(`Key number${index} of this object is '${key}' and its value is '${obj[key]}'`);
});

// Object.values
Object.values(obj).forEach((valuesOfElements) => {
	console.log('valuesOfElements - ', valuesOfElements);
});

// Object.entries:
Object.entries(obj).forEach((entriesOfEachElement) => {
	console.log('entriesOfEachElement', entriesOfEachElement);
});

// more usecase of entries:
const objIntoArray = Object.entries(obj).map((element) => element[1]);

console.log('objIntoArray', objIntoArray);

// You can also do this -
const objIntoNewArray = Object.entries(obj).map((element) => {
	return element[1] + element[0].replace('username', '');
});
console.log('objIntoNewArray', objIntoNewArray);
