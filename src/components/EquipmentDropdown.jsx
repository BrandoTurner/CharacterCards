import { useState } from "react"


export default function EquipmentDropdown(props) {
    const { equipmentObj} = props
    console.log(props.equipmentObj)

    const [selectedEquipment, setSelectedEquipment] = useState([])
    let handleEquipmentChange = (e) => {
        setSelectedEquipment(e.target.value)}
  return (

    <div><label>Equipment</label>
        <select onChange={handleEquipmentChange}>
            {equipmentObj.map((equipmentName,index) => {
                return(
                <option value= {equipmentName.name} key={equipmentName.name}>
                    {equipmentName.name}
            </option>
                )
            })}
            
            </select>
            
        </div>
  )
}





