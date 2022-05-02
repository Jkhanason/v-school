const axios = require('axios');
console.log(axios)
axios.get("https://api.vschool.io/jasonkhan/todo")
  .then(response => console.log(response.data))
  .catch(error => console.log(error));