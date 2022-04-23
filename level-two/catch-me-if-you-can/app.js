//1a
const sum = (num1, num2) => {
  try {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('arguement supplied is not a number')
    }
  }
  catch(err) {
    console.log(err)
  }
  return num1 + num2
}
console.log(sum(2, 2))

//1b
try {
  sum('1', '2')
}
catch(err) {
  console.log(err)
}

//2a
let user = {username: "sam", password: "123abc"};
const login = (username, password) => {
  try {
    if (username !== password) {
      throw new Error('parameters don\'t match')
    }
    console.log('login successful!')
  }
  catch(err) {
    console.log(err)
  }
}
console.log(login(user.username, user.password))

//2b
try {
  login('match', 'match')
}
catch(err) {
  console.log(err)
}