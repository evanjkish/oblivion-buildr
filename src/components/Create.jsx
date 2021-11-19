import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router';

const Create = (props) => {

    let history = useHistory();

    const [name, setName] = useState("")
    const [race, setRace] = useState("Argonian")
    const [gender, setGender] = useState("Male")
    const [birthsign, setBirthsign] = useState("Apprentice")
    const [favAttributes, setFavAttributes] = useState([])
    const [majorSkills, setMajorSkills] = useState([])
    const [minorSkills, setMinorSkills] = useState([])
    const [level, setLevel] = useState(1)

    const [errors, setErrors] = useState([]);



    const createCharacter = (e) => {
        e.preventDefault();

        const newCharacter = {
            name: name,
            race: race,
            gender: gender,
            birthsign: birthsign,
            favAttributes: favAttributes,
            majorSkills: majorSkills,
            minorSkills: minorSkills,
            level: level,
        }
        axios.post("http://localhost:8000/api/characters", newCharacter)
            .then(res => {
                console.log(res.data);
                console.log('Character saved successfully');
                history.push("/");
            })
            .catch(err => {
                console.log("ERROR");
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>New Character</h1>

            <form onSubmit={createCharacter}>

                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p className="name">Name
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                </p>

                <p className="race">Race
                    <select onChange={(e) => setRace(e.target.value)} value={race}>
                        <option value="Argonian">Agonian</option>
                        <option value="Breton">Breton</option>
                        <option value="Dark Elf">Dark Elf</option>
                        <option value="High Elf">High Elf</option>
                        <option value="Imperial">Imperial</option>
                        <option value="Khajiit">Khajiit</option>
                        <option value="Nord">Nord</option>
                        <option value="Orc">Orc</option>
                        <option value="Redguard">Redguard</option>
                        <option value="Wood Elf">Wood Elf</option>
                    </select>
                </p>

                <p className="gender">Gender
                    <select onChange={(e) => setGender(e.target.value)} value={gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </p>

                <p className="birthsigns">Birthsign
                    <select onChange={(e) => setBirthsign(e.target.value)} value={birthsign}>
                        <option value="The Apprentice">The Apprentice</option>
                        <option value="The Atronach">The Atronach</option>
                        <option value="The Lady">The Lady</option>
                        <option value="The Lord">The Lord</option>
                        <option value="The Lover">The Lover</option>
                        <option value="The Mage">The Mage</option>
                        <option value="The Ritual">The Ritual</option>
                        <option value="The Serpent">The Serpent</option>
                        <option value="The Shadow">The Shadow</option>
                        <option value="The Steed">The Steed</option>
                        <option value="The Thief">The Thief</option>
                        <option value="The Tower">The Tower</option>
                        <option value="The Warrior">The Warrior</option>
                    </select>
                </p>

                <div className="attributes">
                    <h3>Favored Attributes</h3>
                    <p>Strength <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Intelligence <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Willpower <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Agility <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Speed <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Endurance <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Personality <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Luck <input type="checkbox" defaultChecked={false} /> </p>
                </div>

                <div className="skills">
                    <h3>Major Skills</h3>
                    <p>Blade <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Bunt <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Hand to Hand <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Alchemy <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Conjuration <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Mysticism <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Alteration <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Destruction <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Restoration <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Marksman <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Security <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Sneak <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Acrobatics <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Athletics <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Light Armor <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Armorer <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Block <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Heavy Armor <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Illusion <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Mercanitle <input type="checkbox" defaultChecked={false} /> </p>
                    <p>Speechcraft <input type="checkbox" defaultChecked={false} /> </p>
                </div>

                {/* <button>Confirm and Save</button> */}
            </form>

            <a href="/character/view">Confirm and Save</a>



        </div>
    )
}

export default Create
