// Pass By Value: Primitive type, they pass by value. Pass by value means we copy the value and we create that value somewhere else in memory. And they don't change the previous one.
let a = 5;
let b = a;

b++;
console.log(a);
console.log(b);

// Pass By Reference: References are simply object. Arrays are also object. And Objects and arrays pass by reference. They refer the previous one either. So, the previous one also changes.
let obj1 = { name: 'Doe', password: '123' };
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

// each obj refer the another. So, if you change anything in one object, it changes(refers) anoher one. e.g.:
obj2.password = 'JohnDoe';

console.log(obj1);
console.log(obj2);

// in array
let c = [ 1, 2, 3, 4, 5 ];
let d = c;

d.push(123123);

console.log('c', c);
console.log('d', d);

// to get rid of this(array):
let ab = [ 1, 2, 3, 4 ];
let cd = [].concat(ab);

cd.push(1234);

console.log('ab', ab);
console.log('cd', cd);

// To get rid of this(object):
let obj = { a: 'a', b: 'b', c: 'c' };
// let obj4 = obj
let clone = Object.assign({}, obj); // or
let cloneNew = { ...obj };

obj.c = 10;
console.log('clone1', clone);
console.log('cloneNew', cloneNew);
console.log('mainObj1', obj);

clone.c = 20;
cloneNew.c = 'abc';
console.log('clone2', clone);
console.log('cloneNew', cloneNew);
console.log('mainObj2', obj);
// this is called shallow depth cloning It means when we can only clone the first level.

// DEEP Cloning:
let object = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
};
let cloneObject = { ...object };
let superClone = JSON.stringify(object); // Be careful during using it. Because this(JSON.stringify(object)) can have some performance implications. If this object was extremely deep, a massive object, it's gonna take long time to clone everything. So, you won't see this out in the world too much.

// object.c = 5;

console.log('object', object);
console.log('cloneObject', cloneObject);

object.c.deep = 'hahaha';

console.log('object1', object);
console.log('cloneObject1', cloneObject);
console.log('superClone', superClone);


let c1 = [1, 2, 3]
let d1 = [].concat(c1)
d1.push(1234)
console.log('d1', d1);
console.log('c1', c1);
