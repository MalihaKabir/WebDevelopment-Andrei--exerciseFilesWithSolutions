// Object Spread Operator:
array1 = [ 5, 5, 5, 15 ];
function sum(a, b, c, d) {
	return a + b + c + d;
}
console.log(sum(...array1));
// same as:
console.log(sum(5, 5, 5, 15));

// Suppose, if you write:
const animals = {
	tiger: '23 age',
	lion: '50 age',
	monkey: '30 age',
	bird: '15 age'
};

// creating function to have the values of these elements:
const objectSpread = function(p1, p2, p3, p4) {
	console.log(p1);
	console.log(p2);
	// console.log(p3);
	// console.log(p4);
};

// now, the way you need to access your elements:
const { tiger, lion, ...rest } = animals;

objectSpread(tiger, rest);
// OR
objectSpread(tiger, lion, rest);

// finally:
const urls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4'
];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((resp) => resp.json());
	})
)
	.then((result) => {
		console.log('1', result[0]);
		console.log('2', result[1]);
		console.log('3', result[2]);
		console.log('4', result[3]);
	})
	.catch(() => console.log('I am catch from finally. So, fix it!', 'error!'))
	.finally(() => console.log('extra!'));

// for await of:
const urls2 = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4'
];

// remembering for of loop:
const loopThrough = (urls2) => {
	for (const url of urls2) {
		console.log(url);
	}
};
loopThrough(urls2);

// using for await of:
const urls3 = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/photos',
	'https://jsonplaceholder.typicode.com/comments'
];

const getData2 = async function() {
	const arrayPromises = urls3.map((url) => fetch(url));
	for await (let request of arrayPromises) {
		const data = await request.json();
		console.log(data);
	}
};
getData2();

// It was exactly same as the previous one as we did in async await, remember...:

// const getData = async function() {
// 	try {
// 		const [ users, posts, albums ] = await Promise.all(
// 			urls2.map(async function(url) {
// 				const resp = await fetch(url);
// 				await resp.json();
// 			})
// 		);
// 		console.log('users', users);
// 		console.log('posta', posts);
// 		console.log('albums', albums);
// 	} catch (error) {
// 		console.log('ooooooops', error);
// 	}
// };
