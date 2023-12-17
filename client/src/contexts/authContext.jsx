import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import * as userService from '../service/userService'
import Path from "../path";
import usePersistedState from "../custom-hooks/usePersistedState";

const AuthContext = createContext()

export const AuthProvider = ({
    children,
})=>{

    const navigate = useNavigate()
    const [auth, setAuth]= usePersistedState('auth',{})
  
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
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
    )
}
AuthContext.displayName = "AuthContext"

export default AuthContext