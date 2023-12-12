import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="border">
        <section className="login-register-page">
          <form action="">
            <h1>REGISTER</h1>
            <div className="input-box">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="password" name="password" id="password" placeholder="Password"/>
            </div>
            <div className="input-box">
              <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm-Password"/>
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
