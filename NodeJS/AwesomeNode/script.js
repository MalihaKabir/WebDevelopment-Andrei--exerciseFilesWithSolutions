// node script.js
const fs = require('fs');

// readFile:
fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		// throw err //or
		console.log('erroooor');
	}
	console.log('readFile', data.toString('utf8'));
});

// readFileSync:
const readFileSync = fs.readFileSync('./hello.txt');
console.log('readFileSync', readFileSync.toString());

// appendFile:
// fs.appendFile('./hello.txt', ' This is soo cool!', (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// writeFile:
// fs.writeFile('./bye.txt', 'Sad to see you go', (err) => console.log(err));

// delete:
fs.unlink('./bye.txt', (err) => {
	if (err) {
		console.log(err);
	}
	console.log('Inception');
});
