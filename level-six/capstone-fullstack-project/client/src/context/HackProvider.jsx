import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const HackContext = React.createContext()

/* create a new instance of axios that can be customized.
  it could be named anything */
const userAxios = axios.create()

//set up an interceptor for requests
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  //just like postman, set the headers authorization to the bearers token
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function HackProvider(props) {
  //used in logout function to return to auth page
  const navigate = useNavigate()

  //state to hold user info
  const [userState, setUserState] = React.useState({
    //if user or token are saved in local strorage (saved below) pull from that first
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
    hacks: []
  })

  //state to hold all lifehacks
  const [allLifeHacks, setAllLifeHacks] = React.useState([])

  //state to capture error msgs
  const [error, setError] = React.useState('')

  //handle sign up
  function signup(credentials) {
    axios.post('http://localhost:4545/auth/signup', credentials)
      .then(res => {
        //invoke get request all life hacks
        getAllHacks()
        //deconstruct response from server
        const {token, user} = res.data
        //save token and user info in local storage so it persists page refresh
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        setUserState(prev => ({
          ...prev,
          token,
          user
        }))
      })
      .catch(err => setError(err.response.data.errorMsg))
  }

  //handle login
  function login(credentials) {
    axios.post('http://localhost:4545/auth/login', credentials)
      .then(res => {
        //invoke get requests for all life hacks and this users hacks
        getUserHacks()
        getAllHacks()
        const {token, user} = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prev => ({
          ...prev,
          token,
          user
        }))
      })
      .catch(err => setError(err.response.data.errorMsg))
  }

  //clear error message
  function clearError() {
    setError('')
  }

  //handle logout
  function logout() {
    //clear user data and local storage, return to auth page
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({
      user: {},
      token: '',
      hacks: []
    })
    //send user back to auth page on log out
    navigate('/')
  }

  //request all life hacks, using userAxios that has the Bearer token attached
  function getAllHacks() {
    userAxios.get('http://localhost:4545/api/hacks')
      //sort hacks by up vote count
      .then(res => setAllLifeHacks(res.data.sort((a, b) => b.upvotes.length - a.upvotes.length )))
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //request all life hacks BY USER
  function getUserHacks() {
    userAxios.get('http://localhost:4545/api/hacks/user')
      .then(res => setUserState(prev => ({
        ...prev,
        //res.data is an array
        hacks: res.data
      })))
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //post a new life hack
  function newLifeHack(newhack) {
    userAxios.post('http://localhost:4545/api/hacks', newhack)
      .then(res => {
        getAllHacks()
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //delete a life hack
  function deleteLifeHack(id) {
    userAxios.delete(`http://localhost:4545/api/hacks/${id}`)
      .then(res => {
        getAllHacks()
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //edit a life hack
  function editLifeHack(edits, id) {
    userAxios.put(`http://localhost:4545/api/hacks/${id}`, edits)
      .then(res => {
        getAllHacks()
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //post a comment
  function addComments(comment, id) {
    //comment is a string. convert to obj with key name comment to meet validation requirements
    userAxios.put(`http://localhost:4545/api/hacks/comment/${id}`, {comment: comment})
      .then(res => {
        getAllHacks()
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //edit a comment
  function editComments(comment, hackId, commentId) {
    userAxios.put(`http://localhost:4545/api/hacks/comment/edit/${hackId}/${commentId}`, {comment})
      .then(res => {
        getAllHacks()
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //delete a comment
  function deleteComment(hackId, commentId) {
    userAxios.put(`http://localhost:4545/api/hacks/comment/delete/${hackId}/${commentId}`)
      .then(res => {
        getAllHacks()
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //add an upvote
  function upvote(hackId) {
    userAxios.put(`http://localhost:4545/api/hacks/upvote/${hackId}`)
      .then(res => {
        setAllLifeHacks(prev => {
          /* this will maintain state as it was and simply render the new vote
            which fixes the issue of when filtering by hack category, adding a vote, and
           having state refresh with all hacks and breaking the filter */
          const oldHacks = prev.filter(each => each._id !== res.data._id)
          return [...oldHacks, res.data]
        })
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //add an downvote
  function downvote(hackId) {
    userAxios.put(`http://localhost:4545/api/hacks/downvote/${hackId}`)
      .then(res => {
        setAllLifeHacks(prev => {
           /* this will maintain state as it was and simply render the new vote
            which fixes the issue of when filtering by hack category, adding a vote, and
           having state refresh with all hacks and breaking the filter */
          const oldHacks = prev.filter(each => each._id !== res.data._id)
          return [...oldHacks, res.data]
        })
        getUserHacks()
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //filter hacks by category
  function filterHacks(category) {

    if (category === "Show All") {
      getAllHacks()
    } else {
    userAxios.get(`http://localhost:4545/api/hacks/category/${category}`)
      .then(res => setAllLifeHacks(res.data))
      .catch(err => console.log(err.response.data.errorMsg))
    }
  }

  return (
    <HackContext.Provider
      value={{
        ...userState,
        allLifeHacks,
        signup,
        login,
        error,
        clearError,
        logout,
        newLifeHack,
        deleteLifeHack,
        editLifeHack,
        addComments,
        editComments,
        deleteComment,
        downvote,
        upvote,
        filterHacks
      }}>
      {props.children}
    </HackContext.Provider>
  )
}

export {HackContext, HackProvider}