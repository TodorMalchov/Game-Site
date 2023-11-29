export default function Login() {
  return (
    <section className="login-page">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        
        <button type="submit" className="btn">Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>

      
    </section>
  )
}