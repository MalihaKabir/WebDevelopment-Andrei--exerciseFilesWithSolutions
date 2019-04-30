// Advanced Array

const myArray = [ 1, 2, 4, 10, 30 ];

const double = [];
const newArray = myArray.forEach((element) => {
	double.push(element * 2);
});

console.log('forEach', double);

// mapArray:
const secondArray = [ 1, 2, 4, 10, 30, 40 ];

const mapArray = secondArray.map((element) => element * 2);

console.log('mapArray', mapArray);

// reduce array:
const array = [1, 2, 3, 4]

const reduceArray = array.reduce((total, current) => {
	return total + current
}, 5)

console.log(reduceArray);

