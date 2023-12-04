import { Link } from "react-router-dom"
export default function Header(){
    return (
        <header>
            <h1><Link className="home" to="/">GamePulse</Link></h1>
            <nav>
                <Link to="/forum">Forum</Link>
                <div id="user">
                    <Link to="/create">Add to forum</Link>
                    <Link to="#">Logout</Link>
                    <Link to="#">Special Game</Link>
                </div>
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )}
