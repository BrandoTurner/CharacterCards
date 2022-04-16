import { useState } from 'react';

const Character = () => {

    const [ characterName, setCharacterName] = useState("Laharl the Overlord");
    return (
        <div><label> Name</label>
            <input value={characterName}
            onChange={(e) =>  setCharacterName(e.target.value)}
            />
            
        </div>
    )
}

export default Character;