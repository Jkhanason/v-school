const namesAndAlphabetArray = (people, alphabet) => {

  let resultsArr = [];
  for (var i = 0; i < people.length; i++) {
    resultsArr.push(people[i]);
    for (var t = 0; t < alphabet.length; t++) {
      resultsArr.push(alphabet[t]);
    }
  }
  return resultsArr;
}

var names = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var letters = "abcdefghijklmnopqrstuvwxyz"
console.log(namesAndAlphabetArray(names, letters));