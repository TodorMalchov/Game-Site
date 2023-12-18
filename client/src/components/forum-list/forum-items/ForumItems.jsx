import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../contexts/authContext";
import Path from "../../../path";

export default function GameListItem({
    _id,
    username,
    favGames,
    imageUrl,
}) {
    const { isAuthenticated }= useContext(AuthContext)
    return (
        <div className="allGames">

        <div className="allGames-info">
            <img src={imageUrl} />
            <h6>{username}</h6>
            <h2>{favGames}</h2>
            {isAuthenticated &&(
                <Link to={`/forum/${_id}`} className="details-button">Read More</Link>
            )}
            {!isAuthenticated &&(
                <Link to={Path.Login} className="details-button">Login</Link>
            )}

        </div>
    </div>
    );
}
