let form = document.addItem;
sessionStorage.setItem('newItem', 'form');

const addToList = function () {
  event.preventDefault();
  //this adds new lets to the list
  let newList = document.createElement('li');
  let newDiv = document.createElement('div');
  let editBtn = document.createElement('button');
  let xBtn = document.createElement('button');
  let saveBtn = document.createElement('button');
  let editBox = document.createElement('input');

  let newItem = form.title.value.toUpperCase();
  editBtn.textContent = 'Edit';
  xBtn.textContent = 'X';
  newDiv.textContent = newItem;
  form.title.value = '';

  newList.append(newDiv, editBtn, xBtn);
  document.getElementById('list').append(newList);

  //this removes items from list
  xBtn.addEventListener('click', () => {
    newList.remove();
  });

  //this edits items already in the list
  editBtn.addEventListener('click', () => {
    editBtn.style.display = 'none';
    editBox.classList.add('editbox');
    saveBtn.textContent = 'Save';
    editBox.value = newDiv.textContent;
    newList.append(saveBtn, editBox);
    editBox.style.display = 'inline';
    saveBtn.style.display = 'inline';
  });

  //this saves the edits made
  saveBtn.addEventListener('click', () => {
    saveBtn.style.display = 'none';
    editBox.style.display = 'none';
    newDiv.textContent = editBox.value.toUpperCase();
    editBtn.style.display = 'inline';
    editBox.value = ''; //this doesnt work..why?
  });
}


form.addEventListener('submit', addToList)

