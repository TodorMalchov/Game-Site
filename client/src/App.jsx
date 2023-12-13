import { Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import ForumList from './components/forum-list/ForumList'
import ForumCreate from './components/create-forum/ForumCreate'
import ForumDetails from './components/forum-details/ForumDetails'


function App() {
  const [auth, setAuth]= useState({})

  const loginSubmitHandler = (values) =>{
    console.log(values)
  }
  return (
    <div id='box'>
      
      <Header /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/forum' element={<ForumList/>} />
          <Route path='/create' element={<ForumCreate/>} />
          <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forum/:forumId' element={<ForumDetails/>} />
        </Routes>
    </div>
    
  )
}

export default App
