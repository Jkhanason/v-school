//Preliminaries
//One
for (var i = 0; i < 10; i++) {
  //console.log(i);
}
//Two
for (var i = 9; i >= 0; i--) {
  //console.log(i);
}
//three
let fruits = ["banana", "orange", "apple", "kiwi"];
for(let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}

//Bronze
//One
let numsArr = [];
for (var i = 0; i < 10; i++) {
  numsArr.push(i);
}
//console.log(numsArr);

//Two
for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    //console.log(i);
  }
}

//Three
fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
resultsArr = [];
for(let i = 0; i < fruits.length; i++) {
  if (i % 2 === 0) {
    resultsArr.push(fruits[i]);
  }
}
//console.log(resultsArr);

//Silver
//One
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];
for (let i = 0; i < peopleArray.length; i++) {
  //console.log(peopleArray[i].name);
}

//Two
let allNames = [];
let allJobs = [];
for (let i = 0; i < peopleArray.length; i++) {
  allNames.push(peopleArray[i].name);
  allJobs.push(peopleArray[i].occupation);
}
// console.log(allNames, allJobs);

//Three
let evenNames = [];
let oddJobs = [];
for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    evenNames.push(peopleArray[i].name);
} else {
    oddJobs.push(peopleArray[i].occupation);
  }
}
//console.log(evenNames, oddJobs);

//Gold
//One
// let zerosOuter = [];
// let zerosArr = [];
// for (var i = 0; i < 3; i++) {
//   for (var t = 0; t < 3; t++) {
//     zerosArr.push(0);
//   }
//   zerosOuter.push(zerosArr);
//   zerosArr = [];
// }
// console.log('outer', zerosOuter);

//Two
// let zerosOuter = [];
// let zerosArr = [];
// for (var i = 0; i < 3; i++) {
//   for (var t = 0; t < 3; t++) {
//     zerosArr.push(i);
//   }
//   zerosOuter.push(zerosArr);
//   zerosArr = [];
// }
// console.log('outer', zerosOuter);

//Three
// let zerosOuter = [];
// let zerosArr = [];
// for (var i = 0; i < 3; i++) {
//   for (var t = 0; t < 3; t++) {
//     zerosArr.push(t);
//   }
//   zerosOuter.push(zerosArr);
//   zerosArr = [];
// }
// console.log('outer', zerosOuter);

//One
numsArr = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
for (var i = 0; i < numsArr.length; i++) {
  for (var t = 0; t < numsArr[i].length; t++) {
    numsArr[i][t] = 'X';
  }
}
console.log(numsArr);