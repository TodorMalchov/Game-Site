// import { useState,useEffect } from "react";
// import { getAll } from "../../../service/forumService";
import { Link } from "react-router-dom";

export default function GameListItem({
    _id,
    username,
    favGames,
    imageUrl,
}) {
    return (
        <div className="allGames">

        <div className="allGames-info">
            <img src={imageUrl} />
            <h6>{username}</h6>
            <h2>{favGames}</h2>
            <Link to={`/forum/${_id}`} className="details-button">Read More</Link>
        </div>
    </div>
    );
}
