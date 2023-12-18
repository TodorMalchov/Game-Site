import { Routes, Route} from 'react-router-dom'

import {AuthProvider} from './contexts/authContext'
import Path from './path'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import ForumList from './components/forum-list/ForumList'
import ForumCreate from './components/create-forum/ForumCreate'
import ForumDetails from './components/forum-details/ForumDetails'
import ForumPostEdit from './components/forum-post-edit/ForumPostEdit'
import AuthGuards from './authGuards/AuthGuards'
import TicTacToe from './components/special-game/TicTacToe'


function App() {
 
  return (
      <AuthProvider >

    <div id='box'>
      
      <Header /> 
        <Routes>
          <Route path={Path.Home} element={<Home/>} />
          <Route path={Path.Forum} element={<ForumList/>} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register/>} />

          <Route element={<AuthGuards/>}>
            <Route path={Path.Create} element={<ForumCreate/>} />
            <Route path={Path.Logout} element={<Logout/>} />
            <Route path={Path.ForumPost} element={<ForumDetails/>} />
            <Route path={Path.TicTacToe} element={<TicTacToe/>} />
            <Route path={Path.PostEdit} element={<ForumPostEdit/>} />
          </Route>

        </Routes>
    </div>
    
      </AuthProvider>
  )
}

export default App
