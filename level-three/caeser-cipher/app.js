var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//convert input to array and map over
const encrypt = input.split('').map(character => {
  //check if character is a letter
  if (alphabet.includes(character)) {
    //add shift amount to letter index, modulo 26 to loop back to begining from z
    let position = (alphabet.indexOf(character) + shift) % 26
    return alphabet[position]
  } else {
    return character
  }
})

console.log(`
Your encrypted message is:

${encrypt.join('')}
`)
