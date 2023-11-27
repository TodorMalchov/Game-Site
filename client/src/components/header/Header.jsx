export default function Header(){
    return (
        <header>
            <h1><a className="home" href="#">Home</a></h1>
            <nav>
                <a href="#">Catalog</a>
                <div id="user">
                    <a href="#">Add Game</a>
                    <a href="#">Logout</a>
                    <a href="#">Special Game</a>
                </div>
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}