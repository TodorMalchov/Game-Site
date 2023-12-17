import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useForm from '../../custom-hooks/useForm';
import * as forumService from '../../service/forumService'

export default function ForumPostEdit(){
    const navigate = useNavigate()
    const {forumId} = useParams()
    const [forum , setForum] = useState({
        username: '',
        imageUrl: '',
        favGames: '',
        description: '',
    })

    useEffect(()=>{
        forumService.getOneComment(forumId)
            .then(response => {
                setForum(response)
            })
    },[forumId])

    const editForumPostHandler = async(values) => {

        try {
            await forumService.edit(forumId , values)
            navigate('/forum')
        } catch (error) {
            console.log(error)
        }


    }

    const {values, onChange, onSubmit} = useForm(editForumPostHandler, forum)

    return (

        <section className="create">
            <form id="create-form" onSubmit={onSubmit}>
                <h1>Add to forum</h1>
                <div className="input-box">

                    <label htmlFor="gamer-name">Username:</label>
                    <input type="text" id="username" name="username" value={values.username} onChange={onChange} required/>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={values.imageUrl} onChange={onChange} required/>

                    <label htmlFor="favGames">Favorite Games:</label>
                    <input type="text" name="favGames" id="favGames" value={values.favGames} onChange={onChange} required/>

                    <label htmlFor="about-you">Description:</label>
                    <input type="text" name="description" id="description" value={values.description} onChange={onChange} required/>
                    <input type="submit" className="btn" value="Edit" />
                </div>


            </form>
        </section>

    )
}