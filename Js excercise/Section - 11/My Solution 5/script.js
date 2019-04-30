// MY EXCERCISE-5 SOLUTIONS:

// USING Funcion Declaration:
function checkDriverAge(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
checkDriverAge(18)


// USING Function Expression:
var checkDriverAge2 = function (age) {
	if (Number(age) < 18) {
		return("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		return("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		return("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

// // if you use "return", then call the function and console log. Try it by writing it in Console. Write:
// let ageOfDriver = checkDriverAge2(22)
// console.log(ageOfDriver);
