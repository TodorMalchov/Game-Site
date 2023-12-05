 import { useEffect, useState } from 'react';

import {getAll} from '../../service/forumService';


export default function ForumList() {

    const [forum,setForum] = useState([])

    useEffect(()=>{
        getAll()
            .then(result => setForum(result))
    },[])

    console.log(forum)
    return (
        <section id="catalog-page">
            <div className="allGames">
                <div className="allGames-info">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
                    <h6>Username</h6>
                    <h2>Action, Fantasy, Comedy, Some more genre, And more</h2>
                    <a className="details-button">Read More</a>
                </div>
            </div>
            <div className="allGames">

                <div className="allGames-info">
                    <img src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                    <h6>Username</h6>
                    <h2>Action, Fantasy, Comedy, Some more genre, And more</h2>
                    <a className="details-button">Read More</a>
                </div>
            </div>
            <div className="allGames">

                <div className="allGames-info">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Qgte_cXXTtbrpPXfF8kKW7nQWYD2Bejy7A&usqp=CAU" />
                    <h6>Username</h6>
                    <h2>Action, Fantasy, Comedy, Some more genre, And more, i nekakvi drugi igri</h2>
                    <a className="details-button">Read More</a>
                </div>
            </div>
                
        </section>
    );
}
