import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOneComment } from "../../service/forumService"
import {commentService} from "../../service/commentService"

export default function ForumDetails(){
    const {forumId} = useParams()
    const [toForum, setToForum] = useState([]);

    useEffect(() => {
        getOneComment(forumId)
            .then(setToForum);
    }, [forumId]);
//game-details = post-details
//game-header = post-header

const commentHandler = async(e) =>{
    e.preventDefault()

    const commentData = new FormData(e.currentTarget)

   const createComment = await commentService(
        forumId, 
        commentData.get('username'),
        commentData.get('comment')
    )
    return Object.values(createComment)
    
}

    return (
        <section id="post-details">
            <div className="info-section">
                <div className="post-header">
                    <img className="game-img" src={toForum.imageUrl}/>
                    <h1>{toForum.username}</h1>
                   
                    <p className="type">{toForum.favGames}</p>
                </div>

                <p className="text">{toForum.description}</p>

                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        
                            <li className="comment">
                                <p></p>
                            </li>
                    
                    </ul>
                </div> */}

                
                {/* <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}
    
    