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



// const potatoes = string => {
// 	const howManyPotatoes = string.match(/potato/g)
// 	return howManyPotatoes ? howManyPotatoes.length : 0;
// }

// console.log(potatoes("potatoPotato"))// ➞ 1
// console.log(potatoes("potatopotato"))// ➞ 2
// console.log(potatoes("potatoapple"))// ➞ 1
// console.log(potatoes("applecattruck"))// ➞ 0


// const secondLargest = array => {
//     const sortedNums = [...array].sort((a, b) => b - a)
//     console.log({array}, {sortedNums})
//     return sortedNums[1]
// }

// console.log(secondLargest([10, 40, 30, 20, 50])) // 40
// console.log(secondLargest([25, 143, 89, 13, 105])) // 105
// console.log(secondLargest([54, 23, 11, 17, 10])) // 23


// const toArray = object => Object.entries(object)

// console.log(toArray({ a: 1, b: 2 }))// ➞ [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 }))// ➞ [["shrimp", 15], ["tots", 12]]
// console.log(toArray({}))// ➞ []


// const concat = (...array) => {
//     return array.reduce((acc, item) => acc.concat(item), [])
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7]))// ➞ [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7]))// ➞ [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4]))// ➞ [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4]))// ➞ [4, 4, 4, 4, 4]


// const numOfDigits = number => {
//     let count = 0;
//     if (number === 0) {
//         count++
//     }
//     while (number >= 1) {
//         number /= 10
//         count ++
//     }
//     return count
// }
// console.log(numOfDigits(1000))// ➞ 4
// //100, 10, 1, 0.1
// console.log(numOfDigits(12))// ➞ 2
// //1.2, .12
// console.log(numOfDigits(1305981031))// ➞ 10
// //130598103.1, 13059810.31, 1305981.031, 130598.1031, 13059.81031, 1305.981031
// console.log(numOfDigits(0))// ➞ 1


// const matchLastItem = array => {
//     //solution 1
//     const lastItem = array[array.length - 1];
//     let remainingItems = '';
//     for (let i = 0; i < array.length - 1; i++) {
//         remainingItems += array[i]
//     }
//     return remainingItems === lastItem

//     //solution 2
//     //return array.slice(0, -1).join('') === array[array.length -1]

//     //solution 3
//     // const test = array.reduce((acc, item, index) => {
//     //     if (index !== array.length -1) {
//     //         acc += item
//     //     }
//     //     return acc
//     // }, '')
//     // return test === array[array.length -1]
// }
// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))// ➞ true
// console.log(matchLastItem([1, 1, 1, "11"]))// ➞ false
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]))// ➞ true


// const calcAge = age => {
//     return age * 365
// }
// console.log(calcAge(65))// ➞ 23725
// console.log(calcAge(0))//➞ 0
// console.log(calcAge(20))// ➞ 7300


// const truncateString = ((str, num) => {
//     if (str.length < num) {
//         return str
//     }
//     let truncatedStr = '';
//     let i = 0;
//     while (i < num - 3) {
//         truncatedStr += str[i];
//         i++
//     }
//     return truncatedStr + '...'
//    // return str.substring(0, num -3) + '...';
// })
// console.log(truncateString("JavaScript", 7))    // "Java..."
// console.log(truncateString("JS is fun", 10))    // "JS is fun" -- string is less than 10 in length so no need to truncate
// console.log(truncateString("JS is funny", 10))  // "JS is f..."



