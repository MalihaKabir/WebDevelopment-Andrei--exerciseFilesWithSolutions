// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
// #2) Run the above promise and make it console.log "success"
// Solution:
const promise = new Promise((resolve, reject) => {
	setTimeout(resolve, 4000, 'success');
});

promise.then(console.log); //OR
promise.then((result) => console.log(result));

// OR see Andrei's solution.

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
// Solution(with sneak - peek):
const promise = Promise.resolve(setTimeout(() => console.log('Success'), 4000));

// Explanation:
const promise2 = Promise.resolve(
	setTimeout(() => {
		console.log('Success');
	}, 4000)
);
// You must have to use "setTimeout()" as a function or arrow function if you use "Promise.resolve()".

// #4) Catch this error and console log 'Ooops something went wrong'
// Solution(with sneak - peek):
Promise.reject('failed').catch((err) => console.log('Ooops something went wrong'), err);

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4'
];

// Solution:
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
	.catch(() => console.log('error!'));

// Andrei has a better solution btw.

// In async function:
// Promise.all(
// 	urls.map(async (url) => {
// 		const resp = await fetch(url);
// 		return await resp.json();
// 	})
// )
// 	.then((result) => {
// 		console.log('1', result[0]);
// 		console.log('2', result[1]);
// 		console.log('3', result[2]);
// 		console.log('4', result[3]);
// 	})
// 	.catch(() => console.log('error!'));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
// Solution: Yes.
