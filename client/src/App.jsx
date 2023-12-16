import { Routes, Route, useNavigate, } from 'react-router-dom'
import { useState } from 'react'

import AuthContext, {AuthProvider} from './contexts/authContext'
import * as userService from './service/userService'
import Path from './path'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import ForumList from './components/forum-list/ForumList'
import ForumCreate from './components/create-forum/ForumCreate'
import ForumDetails from './components/forum-details/ForumDetails'


function App() {
  const navigate = useNavigate()
  const [auth, setAuth]= useState(()=>{
    localStorage.removeItem('accessToken')

    return {}
  })

  const loginSubmitHandler = async(values) =>{
    const result = await userService.login(values.email, values.password)
    setAuth(result)
    localStorage.setItem('accessToken',result.accessToken)
    navigate(Path.Home)
  }

  const registerSubmitHandler = async(values) =>{
    const result = await userService.register(values.email, values.password)
    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)
  }

  const logoutHandler = ()=>{
    setAuth({})
    localStorage.removeItem('accessToken')
  }

  const values ={
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email
  }
  return (
      <AuthProvider value={values}>

    <div id='box'>
      
      <Header /> 
        <Routes>
          <Route path={Path.Home} element={<Home/>} />
          <Route path={Path.Forum} element={<ForumList/>} />
          <Route path={Path.Create} element={<ForumCreate/>} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/forum/:forumId' element={<ForumDetails/>} />
        </Routes>
    </div>
    
      </AuthProvider>
  )
}

export default App
