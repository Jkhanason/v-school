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


// const arrayOfMultiples = ((num, length) => {
// 	const resultsArray = [];
// 	// let accumulator = num;

// 	// while (resultsArray.length < length) {
// 	// 	resultsArray.push(accumulator);
// 	// 	accumulator += num;
// 	// }
// 	for (let i = 1; i < length + 1; i++) {
// 		resultsArray.push(i * num)
// 	}
// 	return resultsArray
// })

// console.log(arrayOfMultiples(7, 5))// ➞ [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10))// ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6))// ➞ [17, 34, 51, 68, 85, 102]



// const puzzlePieces = ((arr1, arr2) => {
// 	if (arr1.length !== arr2.length) {
// 		return false
// 	}
// 	const total = arr1[0] + arr2[0];
// 	for(let i = 1; i < arr1.length; i++) {
// 		if (arr1[i] + arr2[i] !== total) {
// 			return false
// 		}
// 	}
// 	return true
// })

// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]))// ➞ true
// console.log(puzzlePieces([1, 1, 2], [1,1,3])) // ➞ false
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])) // ➞ false



const potatoes = string => {
	const howManyPotatoes = string.match(/potato/g)
	return howManyPotatoes ? howManyPotatoes.length : 0;
}

console.log(potatoes("potatoPotato"))// ➞ 1
console.log(potatoes("potatopotato"))// ➞ 2
console.log(potatoes("potatoapple"))// ➞ 1
console.log(potatoes("applecattruck"))// ➞ 0