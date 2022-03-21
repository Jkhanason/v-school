const largestNum = (nums) => {
  nums = nums.sort((a, b) => b - a);
  return nums[0];
}
//console.log(largestNum([17, 52, 3, 43]));

const wordSearch = (wordsArr, char) => {
  let charMatch = [];
  for (let word of wordsArr) {
    if (word.indexOf(char) > -1) {
      charMatch.push(word);
    }
  }
  return charMatch
}

//console.log(wordSearch(['recall', 'truck', 'header', 'pallet'], 'c'));

const isDivisible = (num1, num2) => {
  return num1 % num2 === 0
}
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false