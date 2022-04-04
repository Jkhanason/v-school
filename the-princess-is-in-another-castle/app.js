const statuses = ['Powered Up', 'Big', 'Small', 'Dead'];
class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
  }
  setName(namePicked) {
    const randomNum = Math.floor(Math.random() * 2);
    randomNum === 0 ? namePicked = 'Mario' : namePicked = 'Luigi'
    this.name = namePicked
  }
  gotHit() {
    console.log(`Got hit`);
    if (this.status === statuses[0]) {
      this.status = statuses[1];
      this.hasStar = false
    } else if (this.status === statuses[1]) {
      this.status = statuses[2];
    } else {
      this.status = statuses[3];
      console.log(`You've Died. Game Over`);
      clearInterval(beginGame) //why does it have to be here ?
    }
  }
  gotPowerup() {
    console.log(`Got Power Up`);
    if(this.status === statuses[0]) {
      console.log('You got a Star!');
      this.hasStar = true;
    } else if (this.status === statuses[1]) {
      this.status = statuses[0];
    } else if (this.status === statuses[2]) {
      this.status = statuses[1];
    }
  }
  addCoin() {
    console.log(`Got Coins`);
    this.totalCoins++
  }
  print() {
    console.log(`
      Player: ${this.name}
      TotalCoins: ${this.totalCoins}
      Status: ${this.status}
      HasStar: ${this.hasStar}
    `)
  }
}

const test = new Player('Test', 0, 'Small', false);
test.setName()

const randomRange = () => {
  // if (this.status === statuses[3]) {
  //   clearInterval(beginGame) //instead of here
  // }
  const decisionMaker = Math.floor(Math.random() * 3);
  if (decisionMaker === 0) {
    test.gotHit();
  } else if (decisionMaker === 1) {
    test.gotPowerup();
  } else {
    test.addCoin();
  }
  test.print();
  // if (this.status === statuses[3]) {
  //   clearInterval(beginGame) //or here
  // }
}

const beginGame = setInterval(randomRange, 2000);
