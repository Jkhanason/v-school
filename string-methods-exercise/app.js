const capilizeAndLowercase = string => {
  return string.toUpperCase() + string.toLowerCase();
}
//console.log(capilizeAndLowercase('bedtime'));

const findMiddleIndex = string => {
  return Math.floor(string.length / 2);
}
//console.log(findMiddleIndex('bedtime'));

const returnFirstHalf = string => {
  let middleIndex = findMiddleIndex(string);
  return string.slice(0, middleIndex);
}
//console.log(returnFirstHalf('bedtime'));

const capilizeAndLowercase2 = string => {
  let middleIndex = findMiddleIndex(string);
  return string.slice(0, 3).toUpperCase() + string.slice(3);
}
//console.log(capilizeAndLowercase2('bedtime'));

const capitalize = string => {
  let words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
let str = "hey friends! practice practice practice!";
console.log(capitalize(str));