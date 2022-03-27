import { useState } from "react"


export default function TraitsDropdown(props) {
    const { traitsObj} = props
    console.log(props.traitsObj)

    const [selectedTrait, setSelectedTrait] = useState([])
    let handleTraitChange = (e) => {
        setSelectedTrait(e.target.value)}
  return (

    <div>
        <select onChange={handleTraitChange}>
            {traitsObj.map((traitName,index) => {
                return(
                <option value= {traitName.name} key={traitName.name}>
                    {traitName.name}
            </option>
                )
            })}
            
            </select>
        </div>
  )
}





