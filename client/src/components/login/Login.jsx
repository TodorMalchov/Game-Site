import { Link } from "react-router-dom"
export default function Login() {
  return (
    <div className="border">
    <section className="login-register-page">
      <form action="">
        <h1>LOGIN</h1>
        <div className="input-box">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="password" name="password" id="password" placeholder="Password"/>
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