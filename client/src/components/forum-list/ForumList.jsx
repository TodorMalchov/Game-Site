import { useEffect, useState } from 'react';
import { getAll } from '../../service/forumService';
import ForumItems from './forum-items/ForumItems';


export default function ForumList() {

    const [forum, setForum] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setForum(result));
    }, []);

    console.log(forum);
    return (
        <section id="catalog-page">

            {forum.map(form => (
                <ForumItems key={form._id}{...form} />
            ))}
           
           {forum.length == 0 && (
                <h1 className='no-articles'> Be a first who post in this forum</h1>
           )}

        </section>
    );
}
