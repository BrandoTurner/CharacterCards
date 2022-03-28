import axios from "axios";
import { useState, useEffect } from "react";
import EquipmentDropdown from './EquipmentDropdown'

function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const fetchEquipment = async () => {
    try {
      const EQUIPMENT_URL = "https://www.dnd5eapi.co/api/equipment";
      const response = await axios.get(EQUIPMENT_URL);
      console.log("response", response.data.results);
        setEquipment(response.data.results);
        console.log(equipment)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEquipment();
  }, []);


const equipmentObj = equipment.map((item) =>{
    return {
        name:item.name,
        url:item.url,
        
}})
//map through new array with Equipment names to populate dropdown
  return (
  <div>
      <EquipmentDropdown equipmentObj={equipmentObj} />
      
  </div>
  )
}
export default Equipment;