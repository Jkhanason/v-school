let buttons = document.querySelectorAll('button');
let count = 0

//click tracker function
const clickFunc = () => {
  count++
  document.getElementById('counter').textContent = `Current Count: ${count}`;
  localStorage.setItem('clicks', count);
}

//setting click event
for (let button of buttons) {
  button.addEventListener('click', clickFunc)

  //timeout for countdown func
  setTimeout( () => {
    clearInterval(countDown)
    button.removeEventListener('click', clickFunc)
  }, 12000);
}

//display last click on page refresh
document.getElementById('counter').textContent = `Last Count: ${localStorage.getItem('clicks')}`;

//countdown function
let timeLeft = 11;
const countDown = setInterval(() => {
  timeLeft--
  document.getElementById('timer').textContent = `Time left: ${timeLeft}`;
}, 1000);
