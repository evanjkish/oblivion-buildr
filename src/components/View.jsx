import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory, Link, Redirect } from 'react-router';
import style from './View.Module.css'

const View = (props) => {

    // const [pirate, setPirate] = useState('');
    // const { id } = useParams();
    // const history = useHistory();

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/pirates/" + id)
    //         .then(res => setPirate(res.data))
    //         .catch(err => console.log(err));
    // }, [])


    return (
        <div>
            <div className="header">
                <h1>Eggy Boi - Level 1</h1>
            </div>
            <div className={style.stats}>
                <div>
                    <h2>Attributes</h2>
                    <table className={style.table}>
                        <tr>
                            <td>Strength</td>
                            <td>40 (+0)</td>
                        </tr>
                        <tr>
                            <td>Intelligence</td>
                            <td>40 (+0)</td>
                        </tr>
                        <tr>
                            <td>Willpower</td>
                            <td>30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Agility</td>
                            <td>50 (+0)</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td>50 (+0)</td>
                        </tr>
                        <tr>
                            <td>Endurance</td>
                            <td>30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Personality</td>
                            <td>30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Luck</td>
                            <td>50</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h2>Skills</h2>
                    <table className={style.skillTable}>
                        <tr>
                            <th className="tableSub">Major Skills</th>
                            <td>0/10</td>
                        </tr>
                        <tr>
                            <td>Blade</td>
                            <td> <button>+</button><button>-</button> 30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Marksman</td>
                            <td> <button>+</button><button>-</button> 30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Security</td>
                            <td> <button>+</button><button>-</button> 40 (+0)</td>
                        </tr>
                        <tr>
                            <td>Sneak</td>
                            <td> <button>+</button><button>-</button> 30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Acrobatics</td>
                            <td> <button>+</button><button>-</button> 30 (+0)</td>
                        </tr>
                        <tr>
                            <td>Block</td>
                            <td> <button>+</button><button>-</button> 25 (+0)</td>
                        </tr>
                        <tr>
                            <td>Speechcraft</td>
                            <td> <button>+</button><button>-</button> 30 (+0)</td>
                        </tr>
                        <tr className="tableSub">
                            <th>Minor Skills</th>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Blunt</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Hand to Hand</td>
                            <td> <button>+</button><button>-</button> 10 (+0)</td>
                        </tr>
                        <tr>
                            <td>Alchemy</td>
                            <td> <button>+</button><button>-</button> 10 (+0)</td>
                        </tr>
                        <tr>
                            <td>Conjuration</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Mysticism</td>
                            <td> <button>+</button><button>-</button> 10 (+0)</td>
                        </tr>
                        <tr>
                            <td>Alteration</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Destruction</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Restoration</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Athletics</td>
                            <td> <button>+</button><button>-</button> 15 (+0)</td>
                        </tr>
                        <tr>
                            <td>Light Armor</td>
                            <td> <button>+</button><button>-</button> 10 (+0)</td>
                        </tr>
                        <tr>
                            <td>Armorer</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Heavy Armor</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                        <tr>
                            <td>Illusion</td>
                            <td> <button>+</button><button>-</button> 10 (+0)</td>
                        </tr>
                        <tr>
                            <td>Mercantile</td>
                            <td> <button>+</button><button>-</button> 5 (+0)</td>
                        </tr>
                    </table>
                </div>
                <p>
                    Track your skill increases here. Ideally, you will want to focus on 3 skill-governing attributes (all except Luck), or two skill-governing attributes and Luck every level. Each level, aim to get 10 skill increases total with these attribute's governed skills (i.e. 5 block, 3 armorer, 2 heavy armor for 10 total Endurance skills leveled up), but be careful to not increase major skills 10 times before you're done getting 10 levels under each of your chosen attributes, as this will force a level-up prematurely. Once an attribute has had 10 skill increases, it can be increased by 5 upon leveling up. If you fail acquire all 10 desired skill increases before leveling, the atribute can still be increased depending on how many skill-ups were acquired. 1-4 skill increases results in a +2 bonus, 5-7 skill increases will grant a +3 bonus, and 8-9 skill increases will grant a +4.

                    (Tip: your HP increases every level by a percentage based on your Endurance. Therefore, maxing out Endurance as early as possible is highly recommended!)
                </p>
            </div>
        </div>
    )
}

export default View
