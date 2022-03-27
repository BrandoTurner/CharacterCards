import axios from "axios";
import { useState, useEffect } from "react";
import AlignDropdown from './AlignDropdown'
function Alignment() {
  const [align, setAlign] = useState([]);
  const fetchAlign = async () => {
    try {
      const ALIGN_URL = "https://www.dnd5eapi.co/api/alignments";
      const response = await axios.get(ALIGN_URL);
      console.log("response", response.data.results);
        setAlign(response.data.results);
        console.log(align)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAlign();
  }, []);


const alignObj = align.map((item) =>{
    return {
        name:item.name,
        url:item.url,
        
}})

  return (
  <div>
      <AlignDropdown alignObj={alignObj} />
      
  </div>
  )
}
export default Alignment;