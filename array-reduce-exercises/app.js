//1
let nums = [1, 2, 3, 4, 5, 6];
const total = nums.reduce((sum, num) => {
  return sum += num
}, 0)
console.log(total)

//2
const stringNums = nums.reduce((result, num) => {
  return result += num
}, '')
console.log(stringNums)

//3
var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
    //with reduce
// const totalVotes = voters.reduce((total, voter) => {
//   if (voter.voted) {
//     total++
//   }
//   return total
// }, 0)
// console.log(totalVotes)

    //with forEach
let totalVotes = 0;
voters.forEach(voter => {
  if (voter.voted) {
    totalVotes++
  }
  return totalVotes
})
console.log(totalVotes)


//4
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

const totalPrice = wishlist.reduce((sum, item) => {
  return sum += item.price
}, 0)
console.log(totalPrice)

//5
var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];
const flatten = arrays.reduce((flatArray, current) => {
  return flatArray.concat(current)
}, [])
console.log(flatten)

//6
var votersList = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

//not dry at all. need to refactor but not sure how too.
const voterResults = votersList.reduce((resultObj, voter) => {
  if (voter.age <= 25) {
    resultObj.youngerThan26++
  }
  if (voter.age <= 25 && voter.voted) {
    resultObj.youngerThan26Votes++
  }
  if (voter.age > 25 && voter.age <=35) {
    resultObj.youngerThan36++
  }
  if (voter.age > 25 && voter.age <=35 && voter.voted) {
    resultObj.youngerThan36Votes++
  }
  if (voter.age > 35 ){
    resultObj.youngerThan56++
  }
  if (voter.age > 35 && voter.voted) {
    resultObj.youngerThan56Votes++
  }
  return resultObj
}, {youngerThan26: 0, youngerThan26Votes: 0,
    youngerThan36: 0, youngerThan36Votes: 0,
    youngerThan56: 0, youngerThan56Votes: 0})
console.log(voterResults)