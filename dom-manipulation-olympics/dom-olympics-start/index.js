//header title
var header = document.createElement('h1');
header.textContent = 'JavaScript Made This!!';
header.classList.toggle('header');
document.getElementById('header').append(header);

//header subtitle
let subTitle = document.createElement('h4');
subTitle.style.textAlign = 'center';
subTitle.innerHTML = `<span class='name'>Jason</span> wrote the JavaScript`;
document.getElementById('header').appendChild(subTitle);

//replacement messages
let newMessages = [`I'm having a great day.`, `Lets have lunch later!`, `Wonderful, what time?`, `12pm at our usual spot?`];
//replacing old messages with new
let oldMessages = document.getElementsByClassName('message');
for (var i = 0; i < oldMessages.length; i++) {
  oldMessages[i].textContent = newMessages[i];
}

//click event to clear messages
let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  for (var i = 0; i < oldMessages.length; i++) {
    //oldMessages[i].style.display = 'none';   //used this before figuring out padding issue
    oldMessages[i].textContent = '';
    oldMessages[i].style.padding = '0'; //0 padding to remove colored square left by default padding
  }
});

//theme color change
let theme = document.getElementById('theme-drop-down');
theme.onchange = () => {
  //check for right or left and apply new theme
  for (var i = 0; i < oldMessages.length; i++) {
     if (oldMessages[i].classList.contains('right')) {
        oldMessages[i].classList.toggle('right-theme-two');
     } else {
      oldMessages[i].classList.toggle('left-theme-two');
     }
  }
}

//click event for subitting new messages
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  //create new div
  let nextMessage = document.createElement('div');
  //save message from form
  let addMessage = document.getElementById('input').value;
  //assign classes to new div
  nextMessage.classList.add('message', 'right');
  //add message to new div
  nextMessage.textContent = addMessage;
  //append new message to page
  document.getElementsByClassName('messages')[0].append(nextMessage);
  //loop messaged to determine left or right
  if (oldMessages.length % 2 === 1) {
    nextMessage.classList.toggle('right');
    nextMessage.classList.toggle('left');
  }
});
