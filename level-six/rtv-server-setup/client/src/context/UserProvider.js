import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserContext = React.createContext()

  /*create a new instance of axios that can be customized.
  could name it anything if I wanted*/
  const userAxios = axios.create()

  //set up an interceptor for requests
  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    //just like postman, set headers authorization to the bearers token
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  function UserProvider(props) {
    //to return to home page on log out, used in logout function
    const navigate = useNavigate()

    const initalState = {
      //if user or token are saved in local strorage (saved below) pull from that first, OR default to blank
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || '',
      issues: []
    }

  //state for each user on login/signup
  const [userState, setUserState] = React.useState(initalState);

  //state for ALL issues for public page
  const [allIssues, setAllIssues] = React.useState([])

  //handle sign up
  function signup(credentials) {
    axios.post('/auth/signup', credentials)
      .then(res => {
        //deconstruct response from server
        const {token, user} = res.data
        //save token and user in local storage so info persists page refresh
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user));
        //update user state with incoming response data
        setUserState(prev => {
          return { //used return keyword on a new line
            ...prev,
            token,
            user
          }
        })
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //handle login
  function login(credentials) {
    axios.post('/auth/login', credentials)
      .then(res => {
        const {token, user} = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))

        //as they login, run a get request to pull all their issues
        getAllUserIssues()

        //also once logged in, get request ALL issues for public page
        getAllIssues()

        setUserState(prev => ({ //added parenthesis on opening line instead of using return keyword
          ...prev,
          token,
          user
        }))
      })
      .catch(err => console.log(err.response.data.errorMsg))
  }

  function logout() {
    //reset user state and local storage to remove tokens and user info
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({
      user: {},
      token: '',
      issues: []
    })
    //send user back to login/signup page
    navigate('/')
  }

  //grab all issues from a user
  function getAllUserIssues() {
    userAxios.get('/api/issues/user')
      .then(res =>  setUserState(prevState => ({
        ...prevState,
        //issues and res.data are both arrays, no need for brackets. just set issues to be the incoming array
        issues: res.data
      })))
      .catch(err => console.log(err.response.data.errorMsg))
  }

  //get issues from ALL users
  function getAllIssues() {
    userAxios.get('/api/issues')
      .then(res => setAllIssues(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addIssue(newIssue) {
    //using custom instance of axios with token Authorization already applied
    userAxios.post('/api/issues', newIssue)
      .then(res => setUserState(prevState => ({
        ...prevState,
        issues: [...prevState.issues, res.data]
      })))
      .catch(err => console.log(err.response.data.errorMsg))
  }

  function addComment(newComment, id) {
    userAxios.put(`/api/issues/comments/${id}`, newComment)
      .then(res =>  getAllUserIssues())
      .catch(err => console.log(err.response.data.errorMsg))
  }

  function deleteIssue(id) {
    userAxios.delete(`/api/issues/${id}`)
      .then(res => setUserState(prev => ({
        ...prev,
        issues: [...prev.issues.filter(prev => prev._id !== id)]
      })))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function editIssue(edits, id) {
    userAxios.put(`/api/issues/${id}`, edits)
      .then(res => getAllUserIssues())
      .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState, //spread in state so each item is destructured
        allIssues,
        signup,
        login,
        logout,
        addIssue,
        addComment,
        deleteIssue,
        editIssue,
        getAllIssues
      }}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}