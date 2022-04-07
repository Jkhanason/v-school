//grabs data
const getData = () => {
  axios.get("https://api.vschool.io/jasonkhan/todo")
  //invoke displayData on response data
  .then(response => displayData(response.data))
  .catch(error => console.log(error))
}

getData()

let num = 1;
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


    //adding text content to each
    title.textContent = `${num}) ${item.title}`;
    num++;      //////////this needs fixing
    description.textContent = item.description;
    img.src = item.imgUrl;
    id.textContent = item._id;
    deleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';
    saveBtn.textContent = 'Edit';

    //checking for price added
    if (item.price === null) {
      price.textContent = 'Price: None Listed'
    } else {
      price.textContent = `Price $${item.price}`
    }
    //if todo is already completed
    if (item.completed) {
      title.style.color = "green";
      title.style.textDecoration = 'line-through';
    }
    //checking if user marks item as completed
    checkbox.addEventListener('click', itemCompleted)

    //checking if user deletes a todo
    deleteBtn.addEventListener('click', deleteItem)

    //append everyting to dom
    checkboxDiv.append(title, deleteBtn, description, label, checkbox, id)
    document.getElementsByClassName('listItems')[0].append(checkboxDiv, price, img);
  })
}

const form = document.todoForm;
//event to save todo and post to api
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
const itemCompleted = (event) => {
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


const deleteItem = (event) => {
  const itemId = event.srcElement.parentElement.lastChild.textContent;

  axios.delete(`https://api.vschool.io/jasonkhan/todo/${itemId}`)
    .then(response => {
      console.log(response.data)
      getData()
    })
    .catch(error => console.log(error))

}
