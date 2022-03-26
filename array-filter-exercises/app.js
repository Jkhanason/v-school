//1
let nums = [3, 6, 8, 2];
const fiveAndGreaterOnly = nums.filter(num => num > 5)
console.log(fiveAndGreaterOnly)

//2
const evensOnly = nums.filter(function(num) {
  if (num % 2 === 0) {
    return num
  }
})
console.log(evensOnly)

//3
let stringsArr = ["dog", "wolf", "by", "family", "eaten", "camping"];
const fiveCharactersOrFewerOnly = stringsArr.filter(string => string.length <= 5)
console.log(fiveCharactersOrFewerOnly)

//4
let names = [
{name: "Angelina Jolie", member: true },
{ name: "Eric Jones", member: false },
{ name: "Paris Hilton", member: true },
{ name: "Kayne West", member: false },
{ name: "Bob Ziroll", member: true }
];
const peopleWhoBelongToTheIlluminati = names.filter(person => person.member === true)
console.log(peopleWhoBelongToTheIlluminati)

//5
let people = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]
const ofAge = people.filter(person => person.age > 18)
console.log(ofAge)
