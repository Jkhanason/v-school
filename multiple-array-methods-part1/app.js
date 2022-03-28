var peopleArray = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  }
];
//filter by age
const sortedOfAge = peopleArray.filter(person => person.age > 17)

//sort by lastname
sortedOfAge.sort((a, b) => {
  let nameA = a.lastName
  let nameB = b.lastName
  if (nameA < nameB) {
    return -1
  } else {
    return 1
  }
})

//convert to strings
let resultStrings = [];
sortedOfAge.forEach(person => {
  resultStrings.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`);
})
console.log(resultStrings)

//extra credit
//1
let newPeople = [
{ firstName: 'Agent', lastName: 'Smith', age: 32 },
{ firstName: 'Lolly', lastName: 'Lilly', age: 38 }
];
let allPeople = peopleArray.concat(newPeople);
console.log({allPeople})

//2
const filteredPeople = allPeople.filter(person => {
  return person.lastName[person.lastName.length -1] === 'y' || person.lastName[person.lastName.length -1] === 'a'
})
console.log({filteredPeople})

//3
allPeople.splice(1, 1);
console.log({allPeople})

//4
console.log(allPeople.reverse())

