//green
//1
function collectAnimals(...animals) {
  return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//2
function combineFruit(fruit, sweets, vegetables){
  return {fruit, sweets, vegetables}
}
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))
//   {
//     fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//     vegetables: ["carrot"]
//  }

//3
function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));

//4
function returnFirst(items){
  const [firstItem] = items;
  return firstItem
}
console.log(returnFirst(['one', 'two', 'three']))

//5
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = favoriteActivities;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}
console.log(returnFavorites(favoriteActivities))

//Blue
//1
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

function combineAnimals(...arrays) {
  return [].concat(...arrays)
}
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//black
//1
function product(...numbers) {
  // var numbers = [a,b,c,d,e];
  return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3, 4, 5))

//2
function unshift(array, ...args) {
  return [].concat(...args, array);
}
console.log(unshift(['first'], 'second', 'third', ['fouth']))

//double black
function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");
      let [firstName, lastName] = name;
      return {
          firstName: firstName,
          lastName: lastName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]