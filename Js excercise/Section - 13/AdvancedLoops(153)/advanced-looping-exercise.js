// const basket = [ 'apples', 'oranges', 'grapes' ];
// const detailedBasket = {
// 	apples: 5,
// 	oranges: 10,
// 	grapes: 1000
// };

// //1
// for (let i = 0; i < basket.length; i++) {
// 	console.log(basket[i]);
// }

// //2
// basket.forEach((item) => {
// 	console.log(item);
// });

// for (item in detailedBasket) {
// 	console.log(item);
// }

// for (item of basket) {
// 	console.log(item);
// }

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [ -1, 0, 3, 100, 99, 2, 99 ]; // should return 100
const array2 = [ 'a', 3, 4, 2 ]; // should return 4
const array3 = []; // should return 0

// console.log(Math.max(...array2));

// Solution1:
function biggestNumberInArray(arr) {
	let biggest = 0;
	for (let index = 0; index < arr.length; index++) {
		if (biggest < arr[index]) {
			biggest = arr[index];
		}
	}
	return biggest;
}
console.log(biggestNumberInArray(array));

// Solution2:
function biggestNumberInArray2(arr) {
	let biggest = 0;
	arr.forEach((item) => {
		if (biggest < item) {
			biggest = item;
		}
	});
	return biggest;
}
console.log(biggestNumberInArray2(array2));

// Solution3:
function biggestNumberInArray3(arr) {
	let biggest = 0;
	for (item of arr) {
		if (biggest < item) {
			biggest = item;
		}
	}
	return biggest;
}
console.log(biggestNumberInArray3(array3));

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
	glasses: 1,
	books: 2,
	floss: 100
};


// Solution: (solved)

const amazonBasket = {
	glasses : 1,
	books   : 2,
	floss   : 100,
};

function checkBasket (basket, lookingFor) {
	for (key in basket) {
		if (lookingFor === key) {
			return key;
		}
	}
	return 'Sorry';
}

checkBasket(amazonBasket, 'books');

// function checkBasket(basket, lookingFor) {
//   // debugger;
//   // let key = basket.lookingFor
//   for (key in basket) {
// //     console.log(key);
    
//     if (lookingFor === key) {
//       // return lookingFor;
//       console.log(key);
      
//     } else {
//       // return 'Sorry';
//       console.log('Sorry');
      
//     }
// 	}
// }

// // console.log(checkBasket('amazonBasket', 'books'));
// checkBasket(amazonBasket, 'books')
