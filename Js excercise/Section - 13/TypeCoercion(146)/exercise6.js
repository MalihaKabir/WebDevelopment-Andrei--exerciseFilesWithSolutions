//Evaluate these:
//#1
[ 2 ] === [ 2 ];
// {} === {}

// solution:
console.log({} === {});

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };
object1.a = 4;

// solutions:
console.log('object1', object1);
console.log('object2', object2);
console.log('object3', object3);
console.log('object4', object4);

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

// solution:
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color);
	}
	sound() {
		console.log(`Mooo! I am ${this.name}. I am a ${this.type} and my color is ${this.color}.`);
	}
}

const cow = new Mamal('John', 'cow', 'red');

cow.sound();
