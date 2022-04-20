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
// const animals = [
// 	{
// 		  name: "Spot",
// 			species: "Dog",
// 			weightInPounds: 200
//   },
// 	{
// 		  name: "Flute",
// 			species: "Cat",
// 			weightInPounds: 25
//   },
// 	{
// 		  name: "Trix",
// 			species: "Dog",
// 			weightInPounds: 15
//   },
// 	{
// 		  name: "Tabby",
// 			species: "Cat",
// 			weightInPounds: 9
//   }
// ];
// const onlyCats = animals.filter(animal => animal.species === "Cat")
// console.log(onlyCats)

// const totalWeight = animals.reduce((total, animal) => total += animal.weightInPounds, 0)
// console.log(totalWeight)


const arrayOfMultiples = ((num, length) => {
	const resultsArray = [];
	let accumulator = num;

	while (resultsArray.length < length) {
		resultsArray.push(accumulator);
		accumulator += num;
	}
	return resultsArray
})

console.log(arrayOfMultiples(7, 5))// ➞ [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10))// ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6))// ➞ [17, 34, 51, 68, 85, 102]