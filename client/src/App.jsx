import { Routes, Route, useNavigate, } from 'react-router-dom'
import { useState } from 'react'

import AuthContext from './contexts/authContext'
import * as userService from './service/userService'
import Path from './path'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import ForumList from './components/forum-list/ForumList'
import ForumCreate from './components/create-forum/ForumCreate'
import ForumDetails from './components/forum-details/ForumDetails'


function App() {
  const navigate = useNavigate()
  const [auth, setAuth]= useState({})

  const loginSubmitHandler = async(values) =>{
    const result = await userService.login(values.email, values.password)
    setAuth(result)
    navigate(Path.Home)
  }
  const registerSubmitHandler = async(values) =>{
   console.log(values)
  }
  const values ={
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email
  }
  return (
      <AuthContext.Provider value={values}>

    <div id='box'>
      
      <Header /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/forum' element={<ForumList/>} />
          <Route path='/create' element={<ForumCreate/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forum/:forumId' element={<ForumDetails/>} />
        </Routes>
    </div>
    
      </AuthContext.Provider>
  )
}

export default App
