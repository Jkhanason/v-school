let square = document.getElementById('color-box');

//mouse over blue
square.addEventListener('mouseenter', function() {
  square.style.backgroundColor = 'blue';
  //mouse out back to normal
  square.addEventListener('mouseleave', function() {
    square.style.backgroundColor = 'white';
  });
});

//mouse held down
square.addEventListener('mousedown', function() {
  square.style.backgroundColor = 'red';
});

//mouse let go
square.addEventListener('mouseup', () => {
  square.style.backgroundColor = 'yellow';
});

//mouse double click
square.addEventListener('dblclick', () => {
  square.style.backgroundColor = 'green';
});

//mouse scroll
document.body.addEventListener('wheel', () => {
  square.style.backgroundColor = 'orange';
});

//keydown first letter of colors
document.body.addEventListener('keydown', () => {
  console.log(event.which);
  if (event.which === 66) {
    square.style.backgroundColor = 'blue';
  } else if (event.which === 82) {
    square.style.backgroundColor = 'red';
  } else if (event.which === 89) {
    square.style.backgroundColor = 'yellow';
  } else if (event.which === 71) {
    square.style.backgroundColor = 'green';
  } else if (event.which === 79) {
    square.style.backgroundColor = 'orange';
  }
});