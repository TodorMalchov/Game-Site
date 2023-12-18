import { useContext } from "react";
import AuthContext from "../../contexts/authContext"


export default function Home() {
    const { isAuthenticated, email} = useContext(AuthContext)
    return (
        
        <div className="home-page">
            {isAuthenticated &&(
            <h1>Welcome: {email}</h1>
            )}
            {!isAuthenticated &&(
            <h1>Welcome to the largest forum for sharing opinions about video games</h1>
            )}
            <img id="image-wrap" src="public/images/fc6.webp"/>
        </div>
    );
}
