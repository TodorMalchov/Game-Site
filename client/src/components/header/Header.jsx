import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext"

export default function Header(){
    const {
        isAuthenticated 
    } = useContext(AuthContext)
    
    return (
        <header>
            <h1><Link className="home" to="/">GamePulse</Link></h1>
            <nav>
                <Link to="/forum">Forum</Link>
                {isAuthenticated &&(
                    <div id="user">
                    <Link to="/create">Add to forum</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="#">Special Game</Link>
                </div>
                )}
                {!isAuthenticated &&(
                    <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                )}
            </nav>
        </header>
    )}
