    //code challenge one
// function oneWordOnly(words){

// return words.filter(word => {
//   return word.indexOf(' ') === -1)

// }
// console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
// console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog", "word"])) //=>["bird", "dog", "word"]


//      //Class practice`
// class Workout {
//   constructor(back, chest, legs) {
//     this.back = back
//     this.chest = chest
//     this.legs = legs
//   }
//   after() {
//     console.log('5 sets done!')
//   }
//   during() {
//     console.log(`I'm so slow`)
//   }
// }

// class Cardio extends Workout {
//   constructor(back, chest, legs, runtime) {
//     super(back, chest, legs)
//     this.runtime = runtime
//   }
// }

// const tuesday = new Cardio ('chinups', 'diamond pus', 'none', '20:00')

// const monday = new Workout('pullups', 'pushups', 'squats')

// console.log(monday)
// monday.after()

// console.log(tuesday)
// tuesday.during()


      //code challenge 2
const animals = [
	{
		  name: "Spot",
			species: "Dog",
			weightInPounds: 200
  },
	{
		  name: "Flute",
			species: "Cat",
			weightInPounds: 25
  },
	{
		  name: "Trix",
			species: "Dog",
			weightInPounds: 15
  },
	{
		  name: "Tabby",
			species: "Cat",
			weightInPounds: 9
  }
];
const onlyCats = animals.filter(animal => animal.species === "Cat")
console.log(onlyCats)

const totalWeight = animals.reduce((total, animal) => total += animal.weightInPounds, 0)
console.log(totalWeight)