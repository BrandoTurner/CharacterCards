import axios from "axios";
import { useState, useEffect } from "react";


const API_URL = "https://www.dnd5eapi.co/api"

function Dropdown({label, endpoint}) {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const fetchSpell = async () => {
    try {
      const response = await axios.get(`${API_URL}/${endpoint}`);
      console.log("response", response.data.results);
        setItems(response.data.results.map((item) =>{
            return {
                name:item.name,
                url:item.url,
        }}));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSpell();
  }, []);
//loop though spell array and push .name into a new array 
//have array of just class names
let handleChange = (e) => {
    setSelected(e.target.value)
}

//map through new array with spell names to populate dropdown
  return (
    <div>
    <label>{label}</label>
    <select onChange={handleChange} value={selected}>
        {items.map((item,index) => {
            return(
            <option value= {item.url} key={item.name}>
                {item.name}
                
        </option>
            )
        })}
        
        </select>
         
        
    </div>
  )
}
export default Dropdown;
