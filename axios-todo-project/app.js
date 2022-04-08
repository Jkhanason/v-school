//grabs data
const getData = () => {
  axios.get("https://api.vschool.io/jasonkhan/todo")
  //invoke displayData on response data
  .then(response => displayData(response.data))
  .catch(error => console.log(error))
}

getData()

//displays data returned from above
const displayData = data => {
  //clear div on each run to prevent duplicates
  document.getElementsByClassName('listItems')[0].innerHTML = '';

  //loop array and for each todo, do these steps
  data.forEach(item => {
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const img = document.createElement('img');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const checkboxDiv = document.createElement('div');
    const id = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const saveBtn = document.createElement('button');

    checkbox.type = "checkbox";
    checkbox.id = "completed";
    label.htmlFor = "completed";
    label.textContent = "Completed:";
    checkboxDiv.id = 'checkboxDiv';
    id.classList.add('id');
    deleteBtn.classList.add('deleteBtn');
    editBtn.classList.add('editBtn');
    saveBtn.classList.add('saveBtn');
    editBtn.id = item.id;


    //adding text content to each
    title.textContent = item.title;
    description.textContent = item.description;
    img.src = item.imgUrl;
    id.textContent = item._id;
    deleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';
    saveBtn.textContent = 'save';

    //checking for price added
    if (item.price === null) {
      price.textContent = 0;
    } else {
      price.textContent = item.price;
    }
    //if todo is already completed
    if (item.completed) {
      title.style.color = "green";
      title.style.textDecoration = 'line-through';
    }
    //if user marks item as completed
    checkbox.addEventListener('click', itemCompleted)

    //if user deletes a todo
    deleteBtn.addEventListener('click', deleteItem)

    //if user edits a todo
    editBtn.addEventListener('click', editItem)

    //append everyting to dom
    checkboxDiv.append(title, deleteBtn, editBtn, saveBtn, description, label, checkbox, price, img, id)
    document.getElementsByClassName('listItems')[0].append(checkboxDiv);
  })
}

//event to save new todo and post to api
const form = document.todoForm;
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTodo = {
    title: form.title.value,
    description: form.description.value,
    imgUrl: form.imgUrl.value,
    price: form.price.value
  };
  form.title.value = '';
  form.description.value = '';
  form.imgUrl.value = '';
  form.price.value = '';

  axios.post("https://api.vschool.io/jasonkhan/todo", newTodo)
    .then(response => getData())
    .catch(error => console.log(error))
});

//event to mark items as completed and update the api
const itemCompleted = event => {
  const itemTitle = event.srcElement.parentElement.firstChild;
  const itemId = event.srcElement.parentElement.lastChild.textContent;
  const isComplete = {
    "completed": true
  }
  const notComplete = {
    "completed": false
  }

  if (event.srcElement.checked) {
    itemTitle.style.color = 'green';
    itemTitle.style.textDecoration = 'line-through';
    axios.put(`https://api.vschool.io/jasonkhan/todo/${itemId}`, isComplete)
    .then(response => console.log(response.data)) //i dont need this response, can i remove??
    .catch(error => console.log(error))
  } else {
    itemTitle.style.color = 'black';
    itemTitle.style.textDecoration = 'none';
    axios.put(`https://api.vschool.io/jasonkhan/todo/${itemId}`, notComplete)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }
}

//event to delete todos and update api
const deleteItem = event => {
  const itemId = event.srcElement.parentElement.lastChild.textContent;

  axios.delete(`https://api.vschool.io/jasonkhan/todo/${itemId}`)
    .then(response => {
      console.log(response.data)
      getData()
    })
    .catch(error => console.log(error))
}

//event to edit todos
const editItem = event => {
  const saveBtn = event.srcElement.nextSibling;
  const editBtn = event.srcElement;
  const title = event.srcElement.parentElement.firstChild;
  const id = event.srcElement.parentElement.lastChild.textContent;
  const description = event.srcElement.parentElement.children[4];
  const price = event.srcElement.parentElement.children[7];
  const img = event.srcElement.parentElement.children[8];
  const div = event.srcElement.parentElement;
  const label = event.srcElement.parentElement.children[5];
  const checkbox = event.srcElement.parentElement.children[6];

  saveBtn.style.display = 'block'
  editBtn.style.display = 'none'
  title.style.display = 'none';
  description.style.display = 'none';
  price.style.display = 'none';
  img.style.display = 'none';
  label.style.display = 'none';
  checkbox.style.display = 'none';
  div.style.display = 'block';

  //creating inputs and setting value as current todo textcontent
  const currentInfo = [title, description, price, img];
  for (let i = 0; i < currentInfo.length; i++) {
    const input = document.createElement('input');
    if (i === 2) {
      input.type = "number";
      input.value = Number(price.textContent);
    }
    input.classList.add('editInput');
    input.style.fontSize = '15px';
    //this is bc the img has a src not a textcontent
    if (i === 3) {
      input.value = currentInfo[i].src;
    } else {
      input.value = currentInfo[i].textContent;
    }
    div.append(input);
  }
    saveBtn.addEventListener('click', () => {
      savedTest(saveBtn, editBtn, title, id, description, img, price)


    })
}


  //event to display edits and save to api
  // saveBtn.addEventListener('click', (event) => {


  //   console.log({currentInfo}) ///trying to find error
  //   const allInputs = document.getElementsByClassName('editInput');
  //   console.log({allInputs})

  //   for (let i = 0; i < allInputs.length; i++) {
  //     console.log(currentInfo[i])  ///trying to find error
  //     allInputs[i].style.display = 'none';
  //     if (i === 3) {
  //       currentInfo[i].src = allInputs[i].value;    ///  const currentInfo = [title, description, price, img];
  //     } else {
  //       console.log(allInputs[i])
  //       currentInfo[i].textContent = allInputs[i].value;
  //     }
  //   }
  //   saveBtn.style.display = 'none'
  //   editBtn.style.display = 'block';
  //   title.style.display = 'block';
  //   description.style.display = 'block';
  //   price.style.display = 'block';
  //   img.style.display = 'block';
  //   label.style.display = 'block';
  //   checkbox.style.display = 'block';
  //   div.style.display = 'grid';

  //   const editedTodo = {
  //     title: title.textContent,
  //     description: description.textContent,
  //     imgUrl: img.src,
  //     price: price.textContent
  //   };

  //   axios.put(`https://api.vschool.io/jasonkhan/todo/${id}`, editedTodo)
  //   .then(response => {
  //     console.log(response.data)
  //     getData()
  //   })
  //   .catch(error => console.log(error))
  // })



const savedTest = ((saveBtn, editBtn, title, id, description, img, price) => {
  console.log(saveBtn)
    console.log(price)
     const editedTodo = {
      title: title.textContent,
      description: description.textContent,
      imgUrl: img.src,
      price: price.textContent
    };
  axios.put(`https://api.vschool.io/jasonkhan/todo/${id}`, editedTodo)
    .then(response => {
    console.log(response.data)
    getData()
  })
  .catch(error => console.log(error.response.data))


})

