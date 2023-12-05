import { useNavigate } from 'react-router-dom';

import {create} from '../../service/forumService';

export default function ForumCreate() {
    const navigate = useNavigate()

    const createForumPostHandler = async(e) => {
        e.preventDefault()

        const forumData = Object.fromEntries(new FormData(e.currentTarget))

        console.log(forumData)

        try {
            await create(forumData)
            navigate('/forum')
        } catch (error) {
            throw new alert('Bad Request')
        }


    }

    return (

        <section className="create">
            <form id="create-form" onSubmit={createForumPostHandler}>
                <h1>Add to forum</h1>
                <div className="input-box">

                    <label htmlFor="gamer-name">Username:</label>
                    <input type="text" id="username" name="username" required/>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" required/>

                    <label htmlFor="favGames">Favorite Games:</label>
                    <input type="text" name="favGames" id="favGames" required/>

                    <label htmlFor="about-you">Description:</label>
                    <input type="text" name="description" id="description" required/>
                    <input type="submit" className="btn" value="Submit" />
                </div>


            </form>
        </section>

    )
}
