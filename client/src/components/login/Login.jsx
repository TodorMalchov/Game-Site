import useForm from "../../custom-hooks/useForm"
import AuthContext from "../../contexts/authContext"


import { Link } from "react-router-dom"
import { useContext } from "react"

export default function Login() {

  const {loginSubmitHandler} = useContext(AuthContext)
  const {values, onChange, onSubmit}= useForm(loginSubmitHandler,{
    email: '',
    password: '',
  })

  return (
    <div className="border">
    <section className="login-register-page">
      <form id="login" onSubmit={onSubmit}>
        <h1>LOGIN</h1>
        <div className="input-box">
          <input type="email" id="email" name="email" placeholder="Email" onChange={onChange} value={values.email}/>
        </div>
        <div className="input-box">
          <input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={values.password}/>
        </div>
        
        <button type="submit" className="btn">Login</button>

        <div className="create-login-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </section>
    </div>
  )
}