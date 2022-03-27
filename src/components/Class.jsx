import axios from "axios";
import { useState, useEffect } from "react";
import ClassDropdown from './ClassDropdown'
function Class() {
  const [charClass, setCharClass] = useState([]);
  const fetchClass = async () => {
    try {
      const CLASS_URL = "https://www.dnd5eapi.co/api/classes";
      const response = await axios.get(CLASS_URL);
      console.log("response", response.data.results);
        setCharClass(response.data.results);
        console.log(charClass)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchClass();
  }, []);
//loop though charClass array and push .name into a new array 
//have array of just class names

const classObj = charClass.map((item) =>{
    return {
        name:item.name,
        url:item.url,
        proficiency_choices:item.proficiency_choices,
}})
//map through new array with class names to populate dropdown
  return (
  <div>
      <ClassDropdown classObj={classObj} />
      
  </div>
  )
}
export default Class;