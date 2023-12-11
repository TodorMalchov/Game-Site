import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneComment } from "../../service/forumService"

export default function ForumDetails(){
    const {forumId} = useParams()
    const [toForum, setToForum] = useState([]);

    useEffect(() => {
        getOneComment(forumId)
            .then(setToForum);
    }, [forumId]);
//game-details = post-details
//game-header = post-header
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
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                        )}
                </div> */}

                
                {/* <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article> */}
        </section>
    );
}
    
    