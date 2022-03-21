const readline = require('readline-sync');

//greeting
console.log('Welcome traveler. The path ahead is one of great risk, but also great reward!');
//player name
const name = readline.question('What name do you go by? ');
//game begins
console.log(`Very well ${name}, lets begin..`);
let begin = readline.question('Select "w" to start down the path. ', {limit: 'w'});

//starting stats
let isAlive = true;
let playerDamage = 0;
let enemyDamage = 0;
let damageCalculator;
let currentEnemy;
let fightOrFlight;
let playerAwards = [];
let enemies = ['Thief', 'Wild Boar', 'Snake', 'Rival Traveler'];
let playerDamages = [5, 3, 4, 2];
let enemyDamages = [20, 15, 10, 5];
let awards = ['Gold Coin', 'Back Pack', 'Flashlight', 'Knife'];
let p = {
  name,
  playerDamage,
  playerAwards
};

//walk func, determines if attack will happen
const walk = () => {
  let attackCalculator = Math.floor(Math.random() * 3); // 1 in 3 chance
  let enemyGenerator = Math.floor(Math.random() * 4);
  currentEnemy = enemies[enemyGenerator];

  //choose to fight or run
  if (attackCalculator === 0) {
    console.log(`Look out! A ${currentEnemy} is blocking your path.`);
    fightOrFlight = readline.question(`
      Do you run or do you fight!?
      1) Fight!
      2) Run!
    `, {limit: ['1','2']});
  } else {
    let nestStep = readline.question('Select "w" to continue moving down the path ', {limit: 'w'});
  }

  if (fightOrFlight === '1') {
    fight();
  } else if (fightOrFlight === '2') {
    run()
  }
}

//invoke for fights
const fight = () => {
  console.log(`The fight begins.. `);
  while (playerDamage < 30 && enemyDamage < 30) {
    damageCalculator = Math.floor(Math.random() * 4);
    enemyDamage += enemyDamages[damageCalculator];
    playerDamage += playerDamages[damageCalculator];
    console.log(`
      You've hurt the ${currentEnemy}! Their damage is now at ${enemyDamage} points. Keep fighting!
      The ${currentEnemy} landed a blow, your damage is at ${playerDamage} points. Be careful!
    `);
    let nextAttack = readline.question(` Select "a" to launch your next attack `, {limit: 'a'});
  }
  //mutual death
  if (playerDamage === enemyDamage) {
    console.log(`You've been fataly injured! Your journey ends here ${name} but you've taken the ${currentEnemy} with you!`);
    isAlive = false;
  // player death
  } else if (playerDamage > enemyDamage) {
    console.log(`The ${currentEnemy} has defeated you! Your adventure comes to an end ${name}. Continue training and try to complete the adventure again!`);
    isAlive = false;
  //game continues
  } else {
    playerDamage -= Math.floor(playerDamage / 2);
    playerAwards.push(awards[damageCalculator]);
    console.log(`Well done ${name}, you defeated the ${currentEnemy}! As a reward, you've earn health points.
      Your damage is lowered to ${playerDamage} points and you've been awarded a ${awards[damageCalculator]}!
    `);
    let walkAgain = readline.question(`Select "w" to continue moving down the path `, {limit: 'w'});
    fightOrFlight = '';
    enemyDamage = 0;
    walk()
  }
}

//invoke for running
const run = () => {
  let escapeCalculator = Math.floor(Math.random() * 2); // 50% chance
  if (escapeCalculator === 0) {
    fightOrFlight = '';
    damageCalculator = Math.floor(Math.random() * 4);
    playerDamage += playerDamages[damageCalculator] / 2; //glancing blow as you run
    let walkAgain = readline.question(`Well done ${name}, you escaped the ${currentEnemy}! But you sustained ${playerDamages[damageCalculator] / 2} damage points. Your current damage is ${playerDamage} points. Select "w" to continue moving down the path `, {limit: 'w'});
    walk();
  } else {
    console.log(`The ${currentEnemy} was too fast! There is no escape, you must fight!`);
    let beginFight = readline.question(`Select 'a' to begin the fight! `, {limit: 'a'});
    fight();
  }
}

while (isAlive) {
  walk();
  // const status = readline.keyIn('[p]Print', {limit: 'p'});
  // if (status == 'p') {
  //   console.log(p);
  // };
}