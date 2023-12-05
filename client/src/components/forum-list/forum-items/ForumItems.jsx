import { useState,useEffect } from "react";
import { getAll } from "../../../service/forumService";

export default function GameListItem({
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
            <a className="details-button">Read More</a>
        </div>
    </div>
    );
}
