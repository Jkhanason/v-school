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

// const maxWeight = animals.reduce((max, animal) => max += animal.weightInPounds, 0)
// console.log(maxWeight)


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
// 	const max = arr1[0] + arr2[0];
// 	for(let i = 1; i < arr1.length; i++) {
// 		if (arr1[i] + arr2[i] !== max) {
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



// function balanced(string) {
//     const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let sum = 0;
//     const midpoint = Math.floor(string.length / 2);

//     for(let i = 0; i < string.length; i++) {
//         if (string.length % 2 !== 0 && i === midpoint) {
//             continue
//         }
//         if(i < midpoint) {
//             sum += alphabet.indexOf(string[i]) + 1
//         } else {
//             sum -= alphabet.indexOf(string[i]) + 1
//         }
//     }
//     return sum === 0
// }
// console.log(balanced("zips"))// ➞ true
// // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true
// console.log(balanced("brake"))// ➞ false
// // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false



// const filterArray = array => {
//     const numsArr = array.filter(item => typeof(item) !== 'string');
//     return numsArr.filter((num, index) => numsArr.indexOf(num) === index)
// }

// console.log(filterArray([1, 2, "a", "b"]))// ➞ [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15]))// ➞ [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123, 1]))// ➞ [1, 2, 123]


// function shiftSentence(sentence) {
//   const words = sentence.split(' ');
//   //return if only one word
//   if (words.length === 1) {
//       return sentence
//   }

//   let resultStr = ''
//   //save first letter of last word
//   let letter = words[words.length - 1][0];

//   for (let i = 0; i < words.length; i++) {
//     //begin with last letter and the first word, minus its first letter
//     resultStr += letter + words[i].slice(1) + ' '

//     /* reset letter to be first letter of current word.
//     letter will lag behind i by one */
//     letter = words[i][0]
//   }
//   return resultStr.slice(0, -1)
// }

// console.log(shiftSentence("create a function")) // "freate c aunction"
// console.log(shiftSentence("it should shift the sentence")) // "st ihould shift she tentence"
// console.log(shiftSentence("the output is not very legible")) // "lhe tutput os iot nery vegible"
// console.log(shiftSentence("edabit")) // "edabit"


// const seriesResistance = nums => {
//   const max = nums.reduce((acc, num) => acc += num, 0)

//   if (max <= 1) {
//     return max + '.0 omh'
//   } else {
//     return max + ' ohms'
//   }

// }
// console.log(seriesResistance([1, 5, 6, 3]))// ➞ "15 ohms"
// console.log(seriesResistance([16, 3.5, 6]))// ➞ "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5]))//➞ "1.0 ohm"

// function happy (num) {
//   //split num into digits
//   const digits = String(num).split('');
//   //grab max of each digit squared
//   const squaresDigits = digits.reduce((acc, number) => acc += (number * number), 0);
//   // 1 = happy num
//   if (squaresDigits === 1) {
//     return true
//     //4 = unhappy num
//   } else if (squaresDigits === 4) {
//     return false
//   } else {
//     //call func on current number, runs until num is either 1 or 4
//    return happy(squaresDigits)
//   }
// }

// console.log(happy(203)) // true
// console.log(happy(11)) // false
// console.log(happy(107)) // false
// console.log(happy(100)) // true
// console.log(happy(102)) // false
// console.log(happy(103)) // true


// function isValid(str){
//   const openBracket = [];
//   const closeBracket = [];
//   const map = {
//     '}': '{',
//     ']': '[',
//     ')': '('
//   }
//   for (let i = 0; i < str.length; i++) {
//     //push all opening brackets into the array
//     if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
//       openBracket.push(str[i])
//       //if current is a closing bracket, and if it pairs with the last opening bracket, remove last opening bracket
//     } else if (map[str[i]] === openBracket[openBracket.length - 1]) {
//         openBracket.pop()
//     } else {
//       //otherwise push the closing bracket into an array
//         closeBracket.push(str[i])
//     }
//   }
//   //if true all opening brackets were removed from array and no closing brackets were added to the array
//   return openBracket.length === 0 && closeBracket.length === 0
// }

// // test data
// console.log(isValid('{{({})}}')) // true
// console.log(isValid('(]')) // false
// console.log(isValid('()[]{}')) // true
// console.log(isValid('({})')) // true
// console.log(isValid("(([]){})")) // true
// console.log(isValid("([]){}")) // true
// console.log(isValid('})({')) // false


// function numberSplit(num) {
//   let half = 0;
//   //if num is even, divide and return half twice
//   if (num % 2 === 0) {
//     half = num / 2;
//     return [half, half]
//   } else {
//     //subtract 1 to make num even, find both halves, then add 1 back to second half
//     half = (num - 1) / 2;
//     return [half, half + 1]
//   }
// }
// console.log(numberSplit(4))// ➞ [2, 2]
// console.log(numberSplit(10))// ➞ [5, 5]
// console.log(numberSplit(11))// ➞ [5, 6]
// console.log(numberSplit(-9))// ➞ [-5, -4]

// function moveZeroes(nums) {

//   let lastIndex = nums.length -1;
//   for(let i = 0; i < lastIndex; i++) {
//     while (nums[i] === 0) {
//       let lastNum = nums[lastIndex]; //12
//       nums[lastIndex] = nums[i]; //0
//       nums[i] = lastNum;
//       lastIndex--
//     }
//   }
//   return nums
// }

// console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
// console.log(moveZeroes([0])) // [0]
//console.log(moveZeroes([-4,0,5,0,-5,0,2])) // [-4,5,-5,2,0,0,0]


// function subSequence(nums, k) {
//   const sortedNums = nums.sort((a, b) => b - a)
//   return sortedNums.splice(0, k)


//   return resultsArr
// }
// console.log(subSequence([2,1,3,3], 2))
// console.log(subSequence([-1,-2,3,4], 3))
// console.log(subSequence([3,4,3,3], 2))

// function maximumSubarray(arr, k) {

//   let result = Number.MIN_SAFE_INTEGER;
//   let temp = 0;

//   for (let i = 0; i < arr.length; i++) {
//     temp += arr[i]
//     //only increments temp by k nums at a time
//     if (i >= k - 1) {
//       //update result to be the largest of temp or result
//       result = Math.max(temp, result)
//    /* subtract the first num from temp,
//       temp is now the sum of 2 nums,
//       next loop will add a new num so temp equals k total nums */
//       temp -= arr[i - (k - 1)]
//     }
//   }
//   return result

//           //this solution came from another student
//           //needed to console everything to understand it haha

//     // result = Number.MIN_SAFE_INTEGER
//     // for (let i = 0; i < arr.length - k + 1; i++ ) {
//     //     console.log({i})

//     //     let window = (arr.slice(i, i + k))
//     //     console.log({window})

//     //     let answer = window.reduce((total, current) => {
//     //         return total + current;
//     //     }, 0);
//     //     console.log({answer})

//     //     if (answer > result) result = answer
//     //     console.log({result})
//     // }

//     // return result
// }


//  console.log(maximumSubarray([1, 2, 6, 2, 4, 1], 3)) // 12
//  console.log(maximumSubarray([4, 3, 9, 5, 1, 2], 3)) // 17
//  console.log(maximumSubarray([1, 2, 3], 2)) // 5



// function anagram(str1, str2) {
//   // //if not same length
//   // if (str1.length !== str2.length) return false

//   // for (let i = 0; i < str1.length; i++) {
//   //   if (str2.includes(str1[i]) === -1) {
//   //     return false
//   //   }
//   // }
//   // return true

//   return str1.split('').sort().join('') === str2.split('').sort().join('')
// }

// console.log(anagram('finder', 'friend'))//  --> true
// console.log(anagram('hello', 'bye'))// --> false

      //hashtable solution ^^^


// function palindrome(str) {

//   return str === str.split('').reverse().join('')
// }

// console.log(palindrome('racecar')) // ===  true
// console.log(palindrome('table')) //  ===  false