export default function Login() {
    return(
        <div classname="login-register">
    <label htmlFor="uname">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="uname" required="" />
    <label htmlfor="psw">
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      required=""
    />
    <button type="submit">Login</button>

  </div>
    )
}