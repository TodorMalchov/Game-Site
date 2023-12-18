import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getOneComment } from "../../service/forumService"
import * as commentService from "../../service/commentService"
import * as forumService from "../../service/forumService"
import AuthContext from "../../contexts/authContext";
import Path from "../../path";

export default function ForumDetails(){
    const {email, userId, isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()
    const {forumId} = useParams()
    const [toForum, setToForum] = useState({})
    const [comments, setComment]= useState([])

    useEffect(() => {
        getOneComment(forumId)
            .then(setToForum)

        commentService.getComments(forumId)
            .then(setComment)
    }, [forumId]);
//game-details = post-details
//game-header = post-header

const commentHandler = async(e) =>{
    e.preventDefault()

    const commentData = new FormData(e.currentTarget)

   const createComment = await commentService.postComment(
        forumId, 
        commentData.get('comment')
    )
    
    setComment(state => [...state, {...createComment, owner: {email}}])
}

const deletePostHandler = async()=>{

    const isSelected = confirm('Are you sure you want to delete this post')

    if(isSelected){
        await forumService.del(forumId)

        navigate(Path.Forum)
    }
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

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({_id, text, owner:{email}}) => (

                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                        
                    </ul>
                </div>

                {userId === toForum._ownerId && (
                    <div className="buttons">
                <Link to={`/forum/${forumId}/edit`} className="button">Edit</Link>
                <button className="button" onClick={deletePostHandler}>Delete</button>
                </div>
                    )}
            </div>
                {isAuthenticated &&(
                    <article className="create-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={commentHandler}>
                            <textarea name="comment" placeholder="Comment......"></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </article>
                )}
                {!isAuthenticated && (
                    <div className="not-login-text">
                    <p>Join the conversation: If you haven't spoken up yet, please log in to share your thoughts. New to the discussion? Register and let your voice be heard!</p>
                    </div>
                )}
        </section>
    );
}
    
    