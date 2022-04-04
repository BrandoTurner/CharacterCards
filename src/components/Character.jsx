import { useState } from 'react';

const Character = () => {

    const [ characterName, setCharacterName] = useState("Laharl the Overlord");
    return (
        <div><label> Name
            <input value={characterName}
            onChange={(e) =>  setCharacterName(e.target.value)}
            /></label>
            
        </div>
    )
}

export default Character;