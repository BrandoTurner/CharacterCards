import { useState } from "react"


export default function EquipmentDropdown(props) {
    const { equipmentObj} = props
    console.log(props.EquipmentObj)

    const [selectedEquipment, setSelectedEquipment] = useState([])
    let handleEquipmentChange = (e) => {
        setSelectedEquipment(e.target.value)}
  return (

    <div>
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





