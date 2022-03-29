import axios from "axios";
import { useState, useEffect } from "react";
import SpellDropdown from './SpellDropdown'

function Spells() {
  const [spell, setSpell] = useState([]);
  const fetchSpell = async () => {
    try {
      const SPELL_URL = "https://www.dnd5eapi.co/api/spells";
      const response = await axios.get(SPELL_URL);
      console.log("response", response.data.results);
        setSpell(response.data.results);
        console.log(spell)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSpell();
  }, []);
//loop though spell array and push .name into a new array 
//have array of just class names

const spellObj = spell.map((item) =>{
    return {
        name:item.name,
        url:item.url,
}})
//map through new array with spell names to populate dropdown
  return (
  <div>
      <SpellDropdown spellObj={spellObj} />
      
      
  </div>
  )
}
export default Spells;
