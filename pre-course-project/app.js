//string
var firstName = "Andrew";

//number
let number = 37;

//boolean
let boolean = true;

//array
const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

//object
const object = {
  name: 'Jason',
  age: 35,
  goal: 'start a tech career',
  isAbleTo: true
}

//object dot notation and bracket notation
console.log('navigating an object:', object.goal, object['isAbleTo']);

//array bracket notation
console.log('navigating an array:', daysArray[0]);

//if, else statement
let year = 2022;
if (typeof year === 'number') {
  console.log(`The year is ${year}`);
} else {
  console.log(`Unable to determine year`);
}

//for loop
for (var i = 0; i < daysArray.length; i++) {
  console.log(daysArray[i]);
}

//while loop
let price = 20;
while (price > 0) {
  console.log(`The price is now $${price}`);
  price-=5;
}

//add event listener
let button = document.getElementsByClassName('test-btn')[0];
button.addEventListener('click', alertMessage);

function alertMessage() {
  alert(`Welcome to my Level 0 project`);
}
