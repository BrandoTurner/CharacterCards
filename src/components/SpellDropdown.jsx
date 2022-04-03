import { useState } from "react"
import Description from "./Description"


export default function SpellDropdown(props) {
    const { spellObj} = props
    console.log(props.spellObj)

    const [selectedSpell, setSelectedSpell] = useState([])
    let handleSpellChange = (e) => {
        setSelectedSpell(e.target.value)}
        console.log(selectedSpell)
  return (

    <div>
        <label>Spell
        <select onChange={handleSpellChange}>
            {spellObj.map((spellName,index) => {
                return(
                <option value= {spellName.url} key={spellName.name}>
                    {spellName.name}
                    
            </option>
                )
            })}
            
            </select>
            </label> 
            
        <div>
        <Description selectedSpell={selectedSpell}/>
        </div>
        </div>
  )
        }




// set state of selected class
// pass url to a new component
// new component will make fetch rquest to the new url
// render api response