// let array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift()
// array.sort()
// array.push("Kiwi")
// // array.splice(1)
// array.splice(0, 1)
// array.reverse()


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// array2.find([1][1][0])
// // OR
array2[1][1][0]

// Extra:
let getId = document.getElementById('element')
getId.innerHTML = array2[1][1][0]
