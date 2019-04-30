// Intro to EXPRESS:
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
// 	res.send('getting root');
// });
// app.get('/profile', (req, res) => {
// 	res.send('getting profile');
// });
// app.post('/profile', (req, res) => {
// 	const user = {
// 		name: 'Sally',
// 		hobby: 'Soccer'
// 	};
// 	res.send(user);
// });

// app.listen(3001);

// EXPRESS Middleware:
// const express = require('express');

// const app = express();

// app.use((req, res, next) => {
// 	console.log('<h1>Helloo</h1>');
// 	next();
// });

// app.get('/', (req, res) => {
// 	res.send('test');
// });

// app.listen(3001);

// POSTMAN:
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
// 	res.send('getting root');
// });
// app.get('/profile', (req, res) => {
// 	res.send('getting profile');
// });
// app.post('/profile', (req, res) => {
// 	console.log(req.body);
// 	res.send('Success!');
// });

// app.listen(3001);

// RESTful API (part1):
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/:id', (req, res) => {
// 	// console.log(req.query);
// 	// req.body
// 	// console.log(req.headers);

// 	console.log(req.params);

// 	res.status(404).send('not found');
// });

// app.listen(3001);

// RESTful API (part2):
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'))


app.listen(3001);
