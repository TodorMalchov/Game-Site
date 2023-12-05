import { Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import ForumList from './components/forum-list/ForumList'
import ForumCreate from "./components/create-forum/ForumCreate"


function App() {
 
  return (
    <div id='box'>
      
      <Header /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/forum' element={<ForumList/>} />
          <Route path='/create' element={<ForumCreate/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
    </div>
    
  )
}

export default App
