//import { useNavigate } from 'react-router-dom';

//import * as gameService from '../../services/gameService';

export default function ForumCreate() {
    // const navigate = useNavigate();

    // const createGameSubmitHandler = async (e) => {
    //     e.preventDefault();

    //     const gameData = Object.fromEntries(new FormData(e.currentTarget));

    //     try {
    //         await gameService.create(gameData);

    //         navigate('/games');
    //     } catch (err) {
    //         // Error notification
    //         console.log(err);
    //     }
    // }

    return (

        <section className="create">
            <form id="create-form">
                <h1>Add to forum</h1>
                <div className="input-box">

                    <label htmlFor="gamer-name">Username:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" name="imageUrl" id="imageUrl" />

                    <label htmlFor="fav-games">Favorite Games:</label>
                    <input type="text" name="fav-games" id="fav-games" />

                    <label htmlFor="about-you">Description:</label>
                    <input type="text" name="description" id="description" />
                </div>

                <button type="submit" className="btn">Submit</button>

            </form>
        </section>

    )
}
