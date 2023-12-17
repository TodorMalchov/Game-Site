import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext"
import useForm from "../../custom-hooks/useForm"
import formKeys from "../../service/formKeys"

export default function Register() {
  const{registerSubmitHandler} = useContext(AuthContext)
  const initialValues = useMemo(()=>({
    [formKeys.Email]: '',
    [formKeys.Password]: '',
    [formKeys.ConfirmPassword]: ''
  }),[])
  const{values, onChange, onSubmit}= useForm(registerSubmitHandler,initialValues)
    return (
        <div className="border">
        <section className="login-register-page">
          <form id="register" onSubmit={onSubmit}>
            <h1>REGISTER</h1>
            <div className="input-box">
              <input 
                type={formKeys.Email} 
                id={formKeys.Email} 
                name={formKeys.Email} 
                placeholder="Email" 
                onChange={onChange}
                value={values[formKeys.Email]}/>
            </div>
            <div className="input-box">
              <input 
                type={formKeys.Password} 
                name={formKeys.Password} 
                id={formKeys.Password} 
                placeholder="Password" 
                onChange={onChange}
                value={values[formKeys.Password]}/>
            </div>
            <div className="input-box">
              <input 
                type={formKeys.Password} 
                name={formKeys.ConfirmPassword} 
                id={formKeys.ConfirmPassword} 
                placeholder="Confirm-Password" 
                onChange={onChange}
                value={values[formKeys.ConfirmPassword]}/>
            </div>
            
            <button type="submit" className="btn">Register</button>
    
            <div className="create-login-link">
              <p>If you already have profile click <Link to="/login">Login</Link></p>
            </div>
          </form>
        </section>
        </div>
      )
}
