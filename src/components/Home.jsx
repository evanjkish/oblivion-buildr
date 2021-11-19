import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharactersFromDB();
    }, [])

    const getCharactersFromDB = () => {
        axios.get("http://localhost:8000/api/characters/")
            .then(res => {
                setCharacters(res.data);
            })
            .catch(err => console.log(err))
    }

    const deleteCharacter = (characterID) => {
        axios.delete("http://localhost:8000/api/characters/" + characterID)
            .then(res => {
                console.log(res.data);
                setCharacters(characters.filter(character => character._id !== characterID))
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h3>My Characters</h3>

            {
                characters.map((character, i) => {
                    return (
                        <div key={character._id}>
                            <Link to={"/characters/update/" + character._id}>{character.name}</Link>
                            <button onClick={() => deleteCharacter(character._id)}>DELETE</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home
