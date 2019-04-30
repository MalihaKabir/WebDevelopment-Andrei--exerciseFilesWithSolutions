let myButton = document.getElementsByTagName('button')[0]
// Caution: The tag 'button' is an array. So, when you call getElementsByTagName, no matter how many buttons you use in your DOM, always use it as an array mentioning the button's position.


//"addEventListener()" accepts two parameters - 1st: the event, 2nd: this event's funtion or what we want to do based on our event.

// for click-event:
myButton.addEventListener("click", function () {
  console.log("Clicked!!!");
})

// for mouseenter-event:
myButton.addEventListener("mouseenter", function () {
  console.log("Mouse Entered!!!");
})

// for mouseenter-event:
myButton.addEventListener("mouseleave", function () {
  console.log("Mouse Left!!!");
})
