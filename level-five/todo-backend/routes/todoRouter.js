const express = require('express');
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

const todos = [
  {
    "name": "Todo number one",
    "description": "This is a task I need to complete.",
    "imageUrl": "https://www.wallpapers13.com/wp-content/uploads/2019/07/Sunrise-landscape-photography-early-morning-swamp-evaporation-streaming-sky-Download-4k-wallpaper-images-for-your-desktop-background-840x525.jpg",
    "completed": false,
    "_id": uuidv4()
},
{
  "name": "Todo number two",
  "description": "This is a task I need to complete.",
  "imageUrl": "https://www.wallpapers13.com/wp-content/uploads/2019/07/Sunrise-landscape-photography-early-morning-swamp-evaporation-streaming-sky-Download-4k-wallpaper-images-for-your-desktop-background-840x525.jpg",
  "completed": true,
  "_id": uuidv4()
},
{
  "name": "Todo number three",
  "description": "This is a task I need to complete.",
  "imageUrl": "https://www.wallpapers13.com/wp-content/uploads/2019/07/Sunrise-landscape-photography-early-morning-swamp-evaporation-streaming-sky-Download-4k-wallpaper-images-for-your-desktop-background-840x525.jpg",
  "completed": false,
  "_id": uuidv4()
}
];

todoRouter.route('/')
  .get((req, res) => {
    res.send(todos)
  })
  .post((req, res) => {
    req.body._id = uuidv4();
    todos.push(req.body);
    res.send(req.body)
  });

todoRouter.route('/:todoId')
  .delete((req, res) => {
    const id = req.params.todoId;
    const index = todos.findIndex(todo => todo._id === id);
    todos.splice(index, 1);
    res.send(`Todo with ID: ${id} is deleted.`);
  })
  .get((req, res) => {
    const id = req.params.todoId;
    const index = todos.findIndex(todo => todo._id === id);
    res.send(todos[index]);
  })
  .put((req, res) => {
    const id = req.params.todoId;
    const index = todos.findIndex(todo => todo._id === id);
    const updatedTodo = Object.assign(todos[index], req.body);
    res.send(updatedTodo);
  });

module.exports = todoRouter