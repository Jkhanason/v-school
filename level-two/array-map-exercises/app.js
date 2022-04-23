//1
let arr = [2, 5, 100];
const doubleNumbers = arr.map(num => num * 2);
console.log(doubleNumbers);

//2
let numsArr = [2, 5, 100];
const stringItUp = numsArr.map(num => num + '');
console.log(stringItUp);

//3
let names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const capitalizeNames = names.map(name => {
  name = name.toLowerCase()
  return name[0].toUpperCase() + name.slice(1);
});
console.log(capitalizeNames);

//4
let people = [
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
];
const namesOnly = people.map(person => person.name);
console.log(namesOnly);

//5
const makeStrings = people.map(person => {
  if (person.age > 18) {
    return person.name + ' can go to The Matrix';
  } else {
     return person.name + ' is under age!!'
  }
});
console.log((makeStrings))

//6
const readyToPutInTheDOM = people.map(person => {
  return `<h1>${person.name}</h1><h2>${person.age}<h2>`
});
console.log(readyToPutInTheDOM);