//grabs data
function getData() {
  axios.get("https://api.vschool.io/jasonkhan/todo")
  //invoke displayData on response data
  .then(response => displayData(response.data))
    .catch(error => console.log(error))
}

//displays data returned from above
let num = 1;
const displayData = data => {
  //clear div on each run to prevent duplicates
  document.getElementsByClassName('listItems')[0].innerHTML = '';
  //loop array and for each todo, do these steps
  data.forEach(item => {
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const img = document.createElement('img');

    //adding text content to each
    h4.textContent = `${num}) ${item.title}`;
    num++
    p.textContent = item.description;
    img.src = item.imgUrl;
    console.log(img.src)
    //checking for completed items
    if (item.completed) {
      h4.style.textDecoration = 'line-through'
    }

    document.getElementsByClassName('listItems')[0].append(h4, p, img);
  })
}

getData()

const form = document.todoForm;
//event to save input and post to api
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTodo = {
    title: form.title.value,
    description: form.description.value,
    imgUrl: form.imgUrl.value
  }
  form.title.value = '';
  form.description.value = '';
  form.imgUrl.value = '';

  axios.post("https://api.vschool.io/jasonkhan/todo", newTodo)
    .then(response => getData())
    .catch(error => console.log(error))
});