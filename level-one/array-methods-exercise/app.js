var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//One
vegetables.pop()

//Two
fruits.shift();

//Three
let orange = fruits.indexOf('orange');

//Four
fruits.push(orange);

//Five
let veggieLength = vegetables.length;

//Six
vegetables.push(veggieLength);

//Seven
let foods = fruits.concat(vegetables);

//Eight
foods.splice(4, 2);

//Nine
foods.reverse();

//Ten
let foodStr = foods.join();

console.log(foodStr);
console.log('foods', foods)
console.log('fruits', fruits);
console.log('vegetables', vegetables);