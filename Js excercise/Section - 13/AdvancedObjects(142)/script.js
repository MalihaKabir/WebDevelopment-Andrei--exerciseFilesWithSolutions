// Reference Type
// Context vs Scope

// Instantiation:
// Instantiation is when you make a copy of an object and reuse the code.

class Player {
    constructor(name, type) {
        console.log('player', this);
        
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name} and I am a ${this.type}.`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
        super(name, type); // Must call super constructor in derived class before accessing 'this' or returning from derived 
        console.log('wizard', this);
        
	}
	play() {
		console.log(`weeeeeee I am a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Black Magician');

wizard1.introduce()
wizard1.play()
wizard2.introduce()
wizard2.play()