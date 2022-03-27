import axios from "axios";
import { useState, useEffect } from "react";
import TraitsDropdown from './TraitsDropdown';

function Traits() {
  const [trait, setTrait] = useState([]);
  const fetchTraits = async () => {
    try {
      const TRAITS_URL = "https://www.dnd5eapi.co/api/traits";
      const response = await axios.get(TRAITS_URL);
      console.log("response", response.data.results);
        setTrait(response.data.results);
        console.log(trait)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTraits();
  }, []);

const traitsObj = trait.map((item) =>{
    return {
        name:item.name,
        url:item.url,
        
}})
//map through new array with traits names to populate dropdown
  return (
  <div>
      <TraitsDropdown traitsObj={traitsObj} />
      
  </div>
  )
}
export default Traits;