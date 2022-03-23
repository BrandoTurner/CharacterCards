import { useState } from 'react';

function Character(){

    const [ characterName, setCharacterName] = useState("Laharl the Overlord");
    return (
        <div>
            <input value={characterName}
            onChange={(e) =>  setCharacterName(e.target.value)}
            />
            
        </div>
    )
}

export default Character;