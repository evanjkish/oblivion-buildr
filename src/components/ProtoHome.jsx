import React from 'react'

const ProtoHome = () => {
    return (
        <div>
            <div className="header">
                <h1>My Characters</h1>
            </div>
            <div className="container">
                <ul className="characters">
                    {/* this will be a map of the characters in the db in link form */}
                    <li>Champion of Cyrodiil</li>
                    <li>Praxis, the Destroyer</li>
                    <li>Varundil Man-Slayer</li>
                    <li>Steve the Thicc</li>
                </ul>
            </div>
            <button> <a href={"/new/"}>New Character</a></button>

        </div>
    )
}

export default ProtoHome
