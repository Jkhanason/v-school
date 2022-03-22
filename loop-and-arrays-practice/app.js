//1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
let count = 0;
for (let item of officeItems) {
  if (item === 'computer') {
    count ++
  }
}
console.log(count)

//2
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

//2

for (let person of peopleWhoWantToSeeMadMaxFuryRoad) {
  person.age > 17 ? console.log(`old enough`)
  : console.log(`not old enough`);
}

//2 bonus 1

// for (let person of peopleWhoWantToSeeMadMaxFuryRoad) {
//   person.age > 17 ? console.log(`${person.name} is old enough to see Mad Max.`)
//   : console.log(`${person.name} is not old enough to see Mad Max.`);
// }

//2 bonus 2

// for (let person of peopleWhoWantToSeeMadMaxFuryRoad) {
//   if (person.gender === 'male' && person.age > 17) {
//     console.log(`${person.name} is old enough. He's good to see Mad Max Fury Road.`);
//   } else if (person.gender === 'male' && person.age < 17) {
//     console.log(`${person.name} is not old enough to see Mad Max Fury Foad, dont let him in.`);
//   } else if (person.gender === 'female' && person.age > 17) {
//     console.log(`${person.name} is old enough. She's good to see Mad Max Fury Road.`);
//   } else {
//     console.log(`${person.name} is not old enough to see Mad Max Fury Foad, dont let her in.`);
//   }
// }

//bonus

const toggleLight = array => {
  let count = 0;
  let light;
  for (let num of array) {
    count += num
  }
  count % 2 === 0 ? light = 'off' : light = 'on'
  return light
}

console.log(toggleLight([2, 5, 435, 4, 3])); // "The light is on"
console.log(toggleLight([1, 1, 1, 1, 3]));   // "The light is on"
console.log(toggleLight([9, 3, 4, 2]));      // "The light is off"