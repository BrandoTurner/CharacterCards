import { useState } from "react"



export default function SpellDropdown(props) {
    const { spellObj} = props
    console.log(props.spellObj)

    const [selectedSpell, setSelectedSpell] = useState([])
    let handleSpellChange = (e) => {
        setSelectedSpell(e.target.value)
    }
        console.log(selectedSpell)
  return (

    <div>
        <label>Spell</label>
        <select onChange={handleSpellChange}>
            {spellObj.map((spellName,index) => {
                return(
                <option value= {spellName.url} key={spellName.name}>
                    {spellName.name}
                    
            </option>
                )
            })}
            
            </select>
             
            
        </div>
        
  )
        }




// set state of selected class
// pass url to a new component
// new component will make fetch rquest to the new url
// render api response