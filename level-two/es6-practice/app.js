//Let and Const
const name = "John";
let age = 101;

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let petName;
        if (pets[i] === "cat") {
          petName = "fluffy";
        } else {
          petName = "spot";
        }
        console.log("pet name: ", petName);
        pet.name = petName;
        petObjects.push(pet);
    }
    console.log("man name: ", name);
    return petObjects
}

runForLoop(["cat", "dog"])

//1
const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
     return arr.map(carrot => {
      return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(carrots));

//2
const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

function filterForFriendly(arr) {
  return arr.filter(person => person.friendly)
}
console.log(filterForFriendly(people))

//3
const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

console.log(doMathSum(2, 3))
console.log(produceProduct(2, 3))

//4
const printString = (fname = 'Jane', lname = 'Doe', age = 100) => {
  return `Hi ${fname} ${lname}, how does it feel to be ${age}?`
}
console.log(printString('Kat', 'Stark', 40))
console.log(printString())

//5
const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

function filterForDogs(arr) {
   return arr.filter(animal => animal.type === "dog")
}
console.log(filterForDogs(animals))

//6
const greeting = (location, name) => {
  return `
    Hi ${name}!

    Welcome to ${location}.

    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.
  `
}

console.log(greeting('Hawaii', 'Janice'))
