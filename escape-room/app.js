const readline = require('readline-sync');
const name = readline.question('What is your name? ')
console.log(`Hello ${name}, lets play a game!`)

let question1 = readline.question(`
  Please select your first move..
  1) Reach your hand into a hole
  2) Find the key
  3) Open the door
`);

let isGameOver = false;

//invoke for hand in hole
let death = function() {
  console.log(`You've suffered a fatal snake bite.. game over. Please try again`);
  //terminate while loop
  isGameOver = true
}

//invoke for finding the key
let foundKey = function() {
  console.log(`You've found a key! What is your next move?`)
  let question2 = readline.question(`
    1) Reach your hand into a hole
    2) Open the door
  `);
  //if hand in hole, invoke death func
  if (question2 === '1') {
    death();
  // else game is complete
  } else {
     console.log(`Hooray! You've escaped the locked room!`)
     //terminate while loop
     isGameOver = true
  }
}

//invoke for locked door
let doorIsLocked = function () {
  console.log(`The door won't open.. now what?`)
  let question3 = readline.question(`
    1) Reach your hand into a hole
    2) Find the key
  `)
  //if hand in hole, invoke death
  if (question3 === '1') {
    death();
  } else {
    foundKey();
  }
}


while (!isGameOver) {
  if (question1 === '1') {
    death();
  }
  if (question1 === '2') {
    foundKey();
  }
  if (question1 === '3') {
    doorIsLocked();
  }
}
