const array = [
	{
		username: 'john',
		team: 'red',
		score: 5,
		items: [ 'ball', 'book', 'pen' ]
	},
	{
		username: 'becky',
		team: 'blue',
		score: 10,
		items: [ 'tape', 'backpack', 'pen' ]
	},
	{
		username: 'susy',
		team: 'red',
		score: 55,
		items: [ 'ball', 'eraser', 'pen' ]
	},
	{
		username: 'tyson',
		team: 'green',
		score: 1,
		items: [ 'book', 'pen' ]
	}
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const userArray = [];
const newArray = array.forEach((element) => {
	userArray.push(element.username + '!');
});

console.log(userArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((element) => {
	return element.username + '?';
});

console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter((element) => {
	return element.team === 'red';
});

console.log('filter', filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce((total, element) => {
	return total + element.score;
}, 0);

console.log('reduce', reduceArray);

// // (1), what is the value of i? i is the INDEX
// // (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	return num * 2;
// })

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newList = array.map((element) => {
	element.items = element.items.map((element) => {
		return element + '!';
	});
	return element;
});

console.log(newList);
