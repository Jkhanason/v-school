const addForm = document.add;

addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let num1 = addForm.num1.value;
  let num2 = addForm.num2.value;
  let total = +num1 + +num2; //new syntax i found for doing math on strings
  document.getElementsByClassName('addResult')[0].textContent = total; //used GEBCN here
  addForm.num1.value = '';
  addForm.num2.value = '';
});

const subtractForm = document.subtract;

subtractForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let num1 = subtractForm.num1.value;
  let num2 = subtractForm.num2.value;
  let total = +num1 - +num2;
  document.querySelector('.subResult').textContent = total; //switched to QS here
  subtractForm.num1.value = '';
  subtractForm.num2.value = '';
});

const multiplyForm = document.multiply;

multiplyForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let num1 = multiplyForm.num1.value;
  let num2 = multiplyForm.num2.value;
  let total = +num1 * +num2;
  document.querySelector('.multResult').textContent = total;
  multiplyForm.num1.value = '';
  multiplyForm.num2.value = '';
});