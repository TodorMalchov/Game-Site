import { Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import ForumList from './components/game-list/ForumList'
import GameCreate from "./components/create-game/CreateGame"


function App() {
 
  return (
    <div id='box'>
      
      <Header /> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/forum' element={<ForumList/>} />
          <Route path='/create' element={<GameCreate/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
    </div>
    
  )
}

export default App
