function oneWordOnly(words){

let results = words.filter(word => {
  return word.indexOf(' ') === -1
})
return results
}
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog", "word"])) //=>["bird", "dog", "word"]

