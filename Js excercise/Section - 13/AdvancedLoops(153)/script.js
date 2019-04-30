const basket = [ 'apples', 'oranges', 'grapes' ];

// forEach loop:
basket.forEach((element) => {
	console.log('forEach :', element);
});

// for of loop:
// Iterating - only Arrays & Strings are iterable.
for (item of basket) {
	console.log('forOf - ', item);
}

// for In Loop(work with Object): forIn allow us to loop over and see the object properties.
// enumerating(summing up/calculating) - Objects are enumerable(able to be counted by one-to-one correspondence with the set of all positive integers.)
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
};

for (const key in detailedBasket) {
    console.log('forInLoop -', key);
}

// let's check it in array:
for (const key in basket) {
    console.log('forInInArray -', key);
}
