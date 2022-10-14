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

//   return str === str.split('').sort().join('')
// }

// console.log(palindrome('racecar')) // ===  true
// console.log(palindrome('table')) //  ===  false


// function insertWhitespace(str){
//   const isUpperCase = /[A-Z]/;
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     //if current letter is uppercase, add a space before
//     if (str[i].search(isUpperCase) !== -1) {
//       result += ` ${str[i]}`;
//     } else {
//       //if lowercase, add current letter
//       result += str[i];
//     }
//   }
//   //remove space from index 0
//   return result.slice(1)
// }

// console.log(insertWhitespace("SheWalksToTheBeach")) // "She Walks To The Beach"
// console.log(insertWhitespace("MarvinTalksTooMuch")) // "Marvin Talks Too Much"
// console.log(insertWhitespace("TheGreatestUpsetInHistory")) // "The Greatest Upset In History"


// const filterLetters = sentence => {
//   /*regex to find letters and white spaces
//     g-flag to search entire string and i-flag for case insensitivity
//   */
//   const findLetters = /[a-z]|\s/gi;
//   //an array containing only those characters
//   result = sentence.match(findLetters)

//   /* join the letters back into the correct words
//      split into an array of words, to enable sorting
//      then return the the first word
//   */
//   return result.join('').split(' ').sort()[0]
// }

// console.log(filterLetters('@c$cc. %aa!a bbb#?@')) //aaa
// console.log(filterLetters('h$|j..g|qr@p$ $r.|@$.jhpqg| .rpq@.$hg||j$ r.$g||pq$j@.h jh|.pq.|@gr$$ j|g$h@.p.r|q$ pgq|h$j.$|r.@ qgp@h$r$.j||. h@|$pr.j|qg.$ h|@qj.p$g$|.r @$r|hq.j|g.p$ |$.gj.rhq@p|$ .p.|@q|j$g$rh |.|$hgr@pj.q$ $grj.h@$q|p.| jhr$|$p@|..qg q|.j$g@.p$h|r $q.$@rpgj||.h .jrhg@.|$q|$p p.@r|gj$$h.q| rq$|.@|pjh.$g $.hqj@p$||g.r @$.gj|q$|h.rp @$.$h|q.g|pjr g.rq.h|@$$pj| $j@.hgq$|p|.r qhp||$j..g@r$ .qrp$gh$|@j.| h|g.$q.r$jp@| $@jq.r|gh|.p$')) //gjqhrp


// const last = (arr, n) => {
//   if (n === 0) return []

//   if (n > arr.length) return 'invalid'

//   return arr.slice(arr.length - n)
// }

// console.log(last([1, 2, 3, 4, 5], 1)) // [5]
// console.log(last([4, 3, 9, 9, 7, 6], 3)) // [9, 7, 6]
// console.log(last([1, 2, 3, 4, 5], 7)) // "invalid"
// console.log(last([1, 2, 3, 4, 5], 0)) // []


// const findSevens = arr => {

//   const isSeven = /7/;

//   /* convert arr to string to use match method
//      will return truthy if a seven exists
//   */
//   if (String(arr).match(isSeven)) {
//     return 'boom'
//   } else {
//     return 'not found'
//   }

// }

// console.log(findSevens([1, 2, 3, 75, 6]))
// console.log(findSevens([1, 2, 3, 5, 6]))
// console.log(findSevens([1, 7, 3, 7, 6]))


// function countBoomerangs(arr) {

//   let count = 0;

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
//       count++
//     }
//   }
//   return count
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))// ➞ 2
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))// ➞ 1
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))// ➞ 0
// console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]))// ➞ 5

// const oddishOrEvenish = num => {
//   //convert num to a string, so it can be split into arr of each num as a string
//   num = String(num).split('')

//   const total = num.reduce((acc, num) => {
//     //each num is a string, convert back to num to add
//     return acc += Number(num)
//   },0)

//   return total % 2 === 0 ? 'Evenish' : 'Oddish'
// }

// console.log(oddishOrEvenish(43))// ➞ "Oddish" // 4 + 3 = 7  7 % 2 = 1
// console.log(oddishOrEvenish(373))// ➞ "Oddish" // 3 + 7 + 3 = 13 // 13 % 2 = 1
// console.log(oddishOrEvenish(4433))// ➞ "Evenish"// 4 + 4 + 3 + 3 = 14 // 14 % 2 = 0


// const getDays = (day1, day2) => {
//   /* num of milliseconds in one day
//      milliseconds * seconds * minutes * hours */
//   const oneDaysMilli = 1000 * 60 * 60 * 24;

//   //convert both days to milliseconds
//   let day1Milli = day1.getTime();
//   let day2Milli = day2.getTime();

//   return (day2Milli - day1Milli) / oneDaysMilli
// }

// console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")))// ➞ 6
// // Dates may not all be in the same month/year.
// console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")))// ➞ 3
// console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")))// ➞ 10

// const getLength = arr => {

//   // solve with one line, pass infinity to handle and level of nesting

//   // return arr.flat(Infinity).length

//   //or solve recursively
//   let length = 0

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       length += getLength(arr[i]);
//     } else {
//       length++
//     }
//   }
//   return length
// }
// console.log(getLength([1, [2, 3]]))// ➞ 3
// console.log(getLength([1, [2, [3, 4]]]))// ➞ 4
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]))// ➞ 6
// console.log(getLength([1, [2], 1, [2], 1]))// ➞ 5


// //Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c)
// function product(a, b) {
//   return function(c, d) {
//     return function (e, f) {
//       return (a * c * e) + (b * d * f)
//     }
//   }
// }

// console.log(product(1,2)(1,1)(2,3))// ➞ 8 // 1 * 1 * 2 + 2 * 1 * 3
// console.log(product(10,2)(5,0)(2,3))// ➞ 100 // 10 * 5 * 2 + 2 * 0 * 3
// console.log(product(1,2)(2,3)(3,4))// ➞ 30 // 1 * 2 * 3 + 2 * 3 * 4
// console.log(product(1,2)(0,3)(3,0))// ➞ 0 // 1 * 0 * 3 + 2 * 3 * 0


// const allAboutStrings = str => {

//   const result = [];
//   const midpoint = Math.floor(str.length / 2);
//   const middleChar = str.length % 2 === 0 ? str[midpoint -1] + str[midpoint] : str[midpoint];
//   const index = str.indexOf(str[1], 2);

//   result.push(str.length, str[0], str[str.length -1], middleChar, index !== -1 ? `@ index ${index}` : 'not found')

//   return result
// }
// console.log(allAboutStrings("LASA"))// ➞ [4, "L", "A", "AS", "@ index 3"]
// console.log(allAboutStrings("Computer"))// ➞ [8, "C", "r", "pu", "not found"]
// console.log(allAboutStrings("Science"))// ➞ [7, "S", "e", "e", "@ index 5"]


// const colorPatternTimes = arr => {

//   //2 seconds per square
//   timePerSquare = arr.length * 2;

//   //1 second to change colors
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       timePerSquare++
//     }
//   }
//   return timePerSquare

// }
// console.log(colorPatternTimes(["Blue"]))// ➞ 2
// console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]))// ➞ 11
// console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]))// ➞ 13
// console.log(colorPatternTimes(["Green", "Blue", "Blue", "Green", "Blue", "Green", "Blue", "Green", "Red", "Red", "Yellow", "Blue", "Blue", "Blue", "Blue", "Green", "Blue", "Green", "Blue", "Green", "Green", "Blue"]))//, 59)
// console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Blue"]))//, 8)
// console.log(colorPatternTimes(["Red", "Blue", "Red", "Red", "Yellow", "Blue", "Yellow", "Blue", "Red", "Blue", "Green", "Yellow", "Green", "Yellow", "Red", "Red", "Red", "Green", "Red", "Yellow", "Blue", "Yellow", "Green", "Yellow", "Blue", "Green", "Blue", "Red", "Yellow", "Yellow"]))//, 85)

// const numInStr = arr => {
//   resultsArr = [];

//   arr.forEach(item => {
//     if (item.match(/\d/)) {
//       resultsArr.push(item)
//     }
//   })
//   return resultsArr
// }

// console.log(numInStr(["1a", "a", "2b", "b"]))// ➞ ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"]))// ➞ ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))// ➞ ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"]))// ➞ ["test1"]

// const findDiv = str => {

//   const result = str.match(/<div\W/g).length

//   return result === 1 ? result + ' time' : result + ' times'
// }

// console.log(findDiv("<div>Hello.</div><div>My name is <b>George</b>.</div>"))// 2 times
// console.log(findDiv("<div><h1>The Word for Today</h1><div>aardvark</div></div>"))// 2 times
// console.log(findDiv("<div></div>"))// 1 time


// function combinations(...args) {

//   return args.reduce((acc, num) => {
//     if (num === 0) {
//       return acc
//     } else {
//       return acc *= num
//     }
//   })
// }

// console.log(combinations(2, 3))// ➞ 6
// console.log(combinations(3, 7, 4))// ➞ 84
// console.log(combinations(2, 3, 4, 5))// ➞ 120
// console.log(combinations(6, 7, 0))// ➞ 42

// const isPositiveDominant = arr => {

//   //remove duplicates and spread into array
//   const uniqueNums = [...new Set(arr)];

//   let count = 0;

//   uniqueNums.forEach(num => {
//     if (num === 0) {
//      return
//     } if (num > 0) {
//       count++
//     } else {
//       count--
//     }
//   })

//   return count > 0
// }
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))// ➞ false
// console.log(isPositiveDominant([5, 99, 832, -3, -4]))// ➞ true
// console.log(isPositiveDominant([5, 0]))// ➞ true
// console.log(isPositiveDominant([0, -4, -1]))// ➞ false
// console.log(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]))// ➞ false
// console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]))// ➞ false

// function wordedMath (string) {

//   let [num1, operator, num2] = string.toLowerCase().split(' ');
//   const resultsKey = {
//     1: 'One',
//     2: 'Two',
//     0: 'Zero'
//   };
//   const wordsKey = {
//     'one': 1,
//     'two': 2,
//     'zero': 0
//   };

//   for (key in wordsKey) {
//     if (num1 === key) {
//       num1 = wordsKey[key]
//     }
//     if (num2 === key) {
//       num2 = wordsKey[key]
//     }
//   }

//   const result = operator === 'minus' ? num1 - num2 : num1 + num2

//   return resultsKey[result]
// }

// console.log(wordedMath("One plus one"))// ➞ "Two"
// console.log(wordedMath("zero Plus one"))// ➞ "One"
// console.log(wordedMath("one minus one"))// ➞ "Zero"


// const getTotalPrice = arr => {

//   const cost = arr.reduce((acc, item) => acc += (item.quantity * item.price), 0)

//   return Number(cost.toFixed(1))
// }

// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]))// ➞ 1.5

// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]))// ➞ 4

// console.log(getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]))// ➞ 4.5

// console.log(getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]))// ➞ 10.4

// console.log(getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]))// ➞ 0.3

// const isDisarium = num => {
//   const digits = num.toString();
//   let total = 0
//   for (let i = 0; i < digits.length; i++) {
//     // i + 1 because nums are 1 indexed
//     total += Math.pow(digits[i], i + 1)
//   }
//   return total === num
// }

// console.log(isDisarium(75))// ➞ false // 7^1 + 5^2 = 7 + 25 = 32
// console.log(isDisarium(135))// ➞ true // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
// console.log(isDisarium(544))// ➞ false
// console.log(isDisarium(518))// ➞ true
// console.log(isDisarium(8))// ➞ true
// console.log(isDisarium(466))// ➞ false


// const doubleSwap = (str, a, b) => {

//   let result = ''
//   str = str.split('')
//   for (let i = 0; i < str.length; i++ ) {
//     if(str[i] === a) {
//       str.splice(i, 1, b)
//     } else if (str[i] === b) {
//       str.splice(i, 1, a)
//     }
//   }
//   return str.join('')

// }
// console.log(doubleSwap( "aabbccc", "a", "b"))// ➞ "bbaaccc"
// console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&")) //➞ "random w&rds writt#n h#r#"
// console.log(doubleSwap("128 895 556 788 999", "8", "9")) //➞ "129 985 556 799 888"


// function chunkify(arr, n) {
//   const result = []

//   for (let i = 0; i < arr.length; i+=n) {
//     result.push(arr.slice(i, i + n))
//   }
//   return result
// }

// // test data
// console.log(chunkify([2, 3, 4, 5], 2)) // [[2, 3], [4, 5]]
// console.log(chunkify([2, 3, 4, 5, 6], 2)) // [[2, 3], [4, 5], [6]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 3)) // [[2, 3, 4], [5, 6, 7]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 1)) // [[2], [3], [4], [5], [6], [7]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 7)) // [[2, 3, 4, 5, 6, 7]]


// const countNumberOfOccurrences = obj => {

//   const resultsMap = {};
//   for (key in obj) {
//     if (resultsMap[obj[key]] === undefined) {
//       resultsMap[obj[key]] = 1;
//     } else {
//       resultsMap[obj[key]]++;
//     }
//   }
//   return resultsMap
// }
// console.log(countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }))// ➞ { moron: 2, scumbag: 1, idiot: 2 }

// console.log(countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }))// ➞ { moron: 3 }

// console.log(countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }))// ➞ { idiot: 1, scumbag: 1 }

// const sortOdd = str => {
//   str = str.split(' ');
//   const result = str.map(word => word.length % 2 === 0 ? word : word.split('').sort().join(''));

//   return result.join(' ')
// }
// console.log(sortOdd("Bananas"))// ➞ "sananaB"
// console.log(sortOdd("One two three four"))// ➞ "enO owt eerht four"
// console.log(sortOdd("Make sure uoy only esrever sdrow of ddo length")) //➞ "Make sure you only sort words of odd length"



// function trackRobot (...nums) {
  // if (!nums.length) return [0, 0]
  // let upDown = 0;
  // let leftRight = 0;

  // const northSouth = nums.filter((num, index) => {
  //   if (index % 2 === 0) {
  //     return num
  //   }})

  // const eastWest = nums.filter((num, index) => {
  //   if (index % 2 !== 0) {
  //     return num
  //   }})

  // northSouth.forEach((num, index) => {
  //   if (index % 2 === 0) {
  //     upDown += num
  //   } else {
  //     upDown -= num
  //   }
  // })
  // eastWest.forEach((num, index) => {
  //   if (index % 2 === 0) {
  //     leftRight += num
  //   } else {
  //     leftRight -= num
  //   }
  // })

// return [leftRight, upDown]



// for (var i in nums) {
//   let d = i % 4;
//   if (d === 0) upDown += nums[i];
//   if (d === 1) leftRight += nums[i];
//   if (d === 2) upDown -= nums[i];
//   if (d === 3) leftRight -= nums[i];
// }
// return [leftRight, upDown];


// }

// console.log(trackRobot(20, 30, 10, 40))// ➞ [-10, 10]
// console.log(trackRobot())// ➞ [0, 0] // No movement means the robot stays at (0, 0).
// console.log(trackRobot(-10, 20, 10))// ➞ [20, -20]// The amount to move can be negative.
// console.log(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))// [6, 5])



// function doesTriangleFit(arr1, arr2) {
//   if (arr1[0] + arr1[1] < arr1[2]) return false

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > arr2[i]) {
//       return false
//     }
//   }
//   return true
// }
// console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]))// ➞ true
// console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]))// ➞ true
// console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]))// ➞ false
// console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]))// ➞ false


// const highestPair = cards => {

//   //filter to show only duplicate values
//   const duplicates = cards.filter((num, index) => index !== cards.indexOf(num))

//   //if none, return false. then check for each facecard and return, finally return highest number card
//   if (!duplicates.length) return false;
//   if (duplicates.includes('A')) return [true, 'A'];
//   if (duplicates.includes('K')) return [true, 'K'];
//   if (duplicates.includes('Q')) return [true, 'Q'];
//   if (duplicates.includes('J')) return [true, 'J'];
//   return [true, String(Math.max(...duplicates))]

// }

// console.log(highestPair(["A", "A", "Q", "Q", "6" ]))// ➞ [true, "A"]
// console.log(highestPair(["A", "A", "Q", "Q", "6", 'K', 'J', '6' ]))// ➞ [true, "A"]
// console.log(highestPair(["J", "6", "3", "10", "8"]))// ➞ false
// console.log(highestPair(["K", "7", "3", "9", "3", '7']))// ➞ [true, "3"]
// console.log(highestPair(["K", "9", "10", "J", "Q"]))// ➞ false
// console.log(highestPair(["3", "5", "5", "5", "5"]))// ➞ [true, "5"]



// const admirable = num => {

//   let total = 0
//   let divisors = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       total += i;
//       divisors.push(i)
//     }
//     if (total === num) {
//       return 'Perfect'
//     }
//   }
//   //I dont understand this math logic. if a number in divisors were negative and that equaled num, return that number
//   // Dont see how total - num / 2 is how to find if that number is in divisors
// 	if(divisors.includes((total - num) / 2)) {
// 		return (total - num) / 2
//   }

//   return 'Neither'
// }

// console.log(admirable(6)) //➞ "Perfect"
// console.log(admirable(1876))// ➞ 2
// console.log(admirable(18))// ➞ "Neither"


// function maxItems (prices, amount) {
//   //convert arguements from strings to numbers
//   amount = +amount.slice(1);
//   //and sort small to large
//   prices = prices.map(item => Number(item.slice(1))).sort((a, b) => a - b);
//   if (prices[0] > amount) return 'Not enough funds!';

//   let items = 0;
//   let i = 0;
//   while(amount >= prices[i]) {
//     items++
//     amount -= prices[i];
//     i++
//   }
//   return items
// }
// console.log(maxItems(["$1", "$1", "$2"], "$3"))// ➞ 2
// console.log(maxItems(["$10", "$7", "$2", "$60"], "$20"))// ➞ 3
// console.log(maxItems(["$15", "$5", "$30", "$30", "$10"], "$2"))// ➞ "Not enough funds!"
// console.log(maxItems(["$99", "$8"], "$9")) //1
// console.log(maxItems(["$34", "$62", "$62", "$98", "$100"], "$101"))//, 2)
// console.log(maxItems(["$78", "$11", "$37", "$95", "$60", "$11", "$53", "$58", "$97"], "$231"))//, 6)


// const largestSwap = num => {
//   //convert to a string so it can be sortd, then convert back to number
//   const digitSwap = +String(num).split('').sort().join('');

//   //check if num is greater than the sortd num
//   return num >= digitSwap
// }
// console.log(largestSwap(14))// ➞ false
// console.log(largestSwap(53))// ➞ true
// console.log(largestSwap(99))// ➞ true
// console.log(largestSwap(27))// ➞ false
// console.log(largestSwap(43))// ➞ true



// function pairs(arr) {
//   //this one has 3 different solutions
//   if (arr.length === 0) return [];

//   const result = [];

//   //this method splits the arr into 2 halves

//   // const length = Math.round(arr.length / 2);
//   // const frontHalf = arr.slice(0, length);
//   // const backHalf = arr.slice(length).sort()

//   // for (let i = 0; i < frontHalf.length; i++) {
//   //   !backHalf[i] ? backHalf[i] = frontHalf[i] : backHalf[i];
//   //   result.push([frontHalf[i], backHalf[i]])
//   // }


//   //this method loops forward over half the array and using i to decrement the backend

//   // for (let i = 0; i < arr.length / 2; i++) {
//   //   result.push([arr[i], arr[arr.length - 1 - i]])
//   // }


//   //this method has 2 pointers in the loop, start point and end point, start point is less or equal to end so stops at the midpoint
//   for (let i = 0, j = arr.length -1; i <= j; i++, j--) {
//     result.push([arr[i], arr[j]])
//   }


//   return result
// }


// console.log(pairs([1, 2, 3, 4, 5, 6, 7])) // ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]
// console.log(pairs([1, 2, 3, 4, 5, 6])) // ➞ [[1, 6], [2, 5], [3, 4]]
// console.log(pairs([5, 9, 8, 1, 2])) // ➞ [[5, 2], [9, 1], [8, 8]]
// console.log(pairs([])) // ➞ []


// function sevenBoom(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (findSevens(arr[i])) {
//       return 'Boom!'
//     }
//   }
//   return "there is no 7 in the array"
// }
// //helper function
// function findSevens(num) {
//   while (num !== 0) {
//     let n = num % 10;
//     if (n === 7) {
//       return true
//     } else {
//       num = Math.floor(num / 10)
//     }
//   }
//   return false
// }

// // test data
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) // ➞ "Boom!"
// console.log(sevenBoom([8, 6, 33, 100])) // ➞ "there is no 7 in the array"
// console.log(sevenBoom([2, 55, 60, 97, 86])) // ➞ "Boom!"




// var containsDuplicate = function(nums) {
//   //add nums to a set, which removes any duplicates. if size and length do not match, there were duplicates
//   //return new Set(nums).size !== nums.length

//   /* some returns true if any items match the condiion. if theres a duplicate the some index will be
//   different than indexOf which only returns the first match */

//   //return nums.some((num, index) => nums.indexOf(num) !== index)


//   /* create an empty new set, check if current num exists in set, if so, return true, else add current num
//    and continue checking and adding until true, or end of array */

//   //  const numSet = new Set();
//   //  for (let num of nums) {
//   //   if (numSet.has(num)) {
//   //     return true
//   //   } else {
//   //     numSet.add(num)
//   //   }
//   //  }
//   //  return false
// }

// console.log(containsDuplicate([1,2,3,1])) //true
// console.log(containsDuplicate([1,2,3,4])) //false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) //true




// function isAnagram(s, t) {
//   if (s.length !== t.length) return false

//   //convert to an array, sort letters, convert back to string, check if they match
//   // return s.split('').sort().join('') === t.split('').sort().join('')

//   const sMap = {};
//   const tMap = {};

//   //create a map of each string, {letter: occurances}
//   for (let i = 0; i < s.length; i++) {
//     if (!sMap[s[i]]) {
//       sMap[s[i]] = 1
//     } else {
//       sMap[s[i]]++
//     }
//     if (!tMap[t[i]]) {
//       tMap[t[i]] = 1
//     } else {
//       tMap[t[i]]++
//     }
//   }
//   //if the value, number of occurances for each letter key don't match, its not an anagram
//   for (let key in sMap) {
//     if (sMap[key] !== tMap[key]) return false
//   }
//   return true
// };

// console.log(isAnagram('rat', 'tar')) //tree
// console.log(isAnagram('happy', 'yapph')) //true
// console.log(isAnagram('happy', 'happd')) //false
// console.log(isAnagram('orange', 'truck')) //false


// function twoSum(nums, target) {
//   if (nums.length === 2) return [0, 1]

//   ///brute force apporach. check each number against every other bumber to find a match

//   // for (let i = 0; i < nums.length; i++) {
//   //   for (let t= i + 1; t < nums.length; t++) {
//   //     if (nums[i] + nums[t] === target) return [nums[i], nums[t]]
//   //   }
//   // }


//   const map = {};
//   for (let i = 0; i < nums.length; i++) {

//     if (target - nums[i] in map) {
//       //target - the current num is the second value we need
//       //if found in map, return its value along with the current index
//       return [map[target - nums[i]], i]
//     } else {
//       //add the current num to the map and nums index as value
//       map[nums[i]] = i
//     }
//   }

// };

// console.log(twoSum([2, 11, 7, 15], 9)) // [0, 2]
// console.log(twoSum([3, 2, 4], 6)) //[1, 2]
// console.log(twoSum([3, 3], 6)) // [0, 1]




// function isPalindrome(str) {
//   str = str.toLowerCase()
//   //loop over str from both directions
//   for (let i = 0, t = str.length-1; i < t; i++, t--) {
//     //if current left is not a letter, increment until next letter
//     while (str[i] < 'a' || str[i] > 'z') {
//       i++
//     }
//     //if current right is not a letter, decrement until next letter
//     while (str[t] < 'a' || str[t] > 'z') {
//       t--
//     }
//     //if left and right letters dont match, its false
//     if (str[i] !== str[t]) {
//       return false
//     }
//   }
//   //if the loop ends, everything matched, return true
//   return true
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama")) //true
// console.log(isPalindrome("race a car")) //false
// console.log(isPalindrome(' '))//true



// function maxProfit(prices) {

//   //set left and right start point
//   let left = 0, right = 1;
//   //set total profit to zero
//   let totalProfit = 0;
//   //loop until right hits the end of prices
//   while (right < prices.length) {
//     //if right price higher than left price
//     if (prices[right] > prices[left]) {
//       //save that potential profit in a temp variable
//       let possibleProfit = prices[right] - prices[left];
//       //update total profit to be the greater of itself or new potential profit
//       totalProfit = Math.max(totalProfit, possibleProfit)
//       //increment right pointer
//       right++
//     //else
//     } else {
//       //right is lower than left price, update left position to be right and increment right by one
//       left = right;
//       right++
//     }
//   }
//     //return total profit
//     return totalProfit
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]))// 5
// console.log(maxProfit([7, 6, 4, 3, 1]))// 0
// console.log(maxProfit([12, 9, 10, 3, 7, 11]))// 8


// var isValid = function(s) {

//   //create an empty array and an object of bracket pairs
//   const bracketStack = [];
//   const bracketPairs = {
//     '}': '{',
//     ')': '(',
//     ']': '['
//   }
//   //loop over string,
//   for (const item of s) {
//     //if current is a opening bracket, push it into array
//     if (item === '(' || item === '{' || item === '[') {
//       bracketStack.push(item)
//       /* or if current is a closing bracket, check if its opening match is the last value in the array
//        if it is, pop off last value  */
//     } else if (bracketPairs[item] === bracketStack.at(-1)) {
//       bracketStack.pop()
//     } else {
//       //otherwise return false
//       return false
//     }
//   }
//   //array will be empty if all brackets were vaild pairs
//   return bracketStack.length === 0
// };

// console.log(isValid('()')) //true
// console.log(isValid('()[]{}')) //true
// console.log(isValid('(]')) //false



// function reverseList(head) {

//   //create a prev set to null
//   let prev = null;

//   //while head exists
//   while (head) {
//     //save head next in temp value
//     let next = head.next;
//     //set head next to be prev
//     head.next = prev;
//     //reset prev to be current head
//     prev = head;
//     //reset head to be next value saved in temp
//     head = next;
//   }
//   return prev
// }

// console.log(reverseList([1,2,3,4,5])) //[5,4,3,2,1]
// // console.log(reverseList([1,2]))//[2,1]
// // console.log(reverseList([])) //[]



// function mapLetters(str) {

  // const result = {};
  // for (let i = 0; i < str.length; i++) {
  //   //if the key exists, push the current index
  //   if (result[str[i]]) {
  //     result[str[i]].push(i)
  //   } else {
  //     //create the key with the value of index
  //     result[str[i]] = [i]
  //   }
  // }
  // return result


  // return str.split('').reduce((acc, letter, index) => {
  //   if (acc[letter]) {
  //     acc[letter].push(index)
  //   } else {
  //     acc[letter] = [index]
  //   }
  //   return acc
  // }, {})

// }

// console.log(mapLetters("dodo")) // { d: [0, 2], o: [1, 3] }
// console.log(mapLetters("froggy")) // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// console.log(mapLetters("grapes")) // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }


// const removeVowels = str => {
//   const vowelsRegex = /a|e|i|o|u/gi;
//   let result = ''
//   for (let letter of str) {
//     //search will return the index, 0 if its a vowel which is falsy and -1 it its not, truthy, which runs the if statement,
//     if (letter.search(vowelsRegex)) result+= letter
//   }
//   return result
// }

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")) //➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// console.log(removeVowels("We're gonna build a wall!")) //➞ "W'r gnn bld  wll!"
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!")) //➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"


// function diamondArrays(num) {
//   const result = [];
//   let count = 1

//   //build left side of pyramid, while count is less than num
//   while (count < num) {
//     //create an inner array each loop
//     const innerArray = [];
//     //push count into inner array
//     for (let i = 1; i <= count; i++) {
//       innerArray.push(count)
//     }
//     //increment count each loop. ** on the last loop, count will be equal to num **
//     count++
//     //push the inner array into results
//     result.push(innerArray)
//   }

//   //build right side of pyramid, decrement count back down to one, push current count into results array each loop
//   while (count > 0) {
//     //create an inner array each loop
//     const innerArray= [];
//     //push count into inner array
//     for (let i = 1; i <= count; i++) {
//       innerArray.push(count)
//     }
//     //decrement count each loop
//     count--
//     //push the inner arry to results
//     result.push(innerArray)
//   }
//   return result
// }

// console.log(diamondArrays(1)) // ➞ [[1]]
// console.log(diamondArrays(2)) // ➞ [[1], [2, 2], [1]]
// console.log(diamondArrays(5)) // ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]


const colorPatternTimes = colors => {
  //if theres only one color
  if (colors.length === 1) return 2

  let seconds = 0;

  for (let i = 0; i < colors.length; i++) {
    //each loop add 2 seconds per color
    seconds += 2
    //if not on the last color, and current color is different from the next color
    if (colors[i + 1] && colors[i] !== colors[i + 1]) {
      //add 1 second to change pencils
      seconds += 1
    }
  }

  return seconds
}

console.log(colorPatternTimes(["Blue"]))// ➞ 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]))// ➞ 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]))// ➞ 13