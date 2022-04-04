import {useState , useEffect} from 'react'
import axios from 'axios';

export default function Description (props){
const { selectedSpell } = props
//console.log(selectedSpell)

const [description, setDescription] = useState([]);
    const fetchDesc = async () => {
      try {
        const DESC_URL = `https://www.dnd5eapi.co${selectedSpell}`;
        const response = await axios.get(DESC_URL);
        
        console.log("response", response);
          setDescription(response.data.desc);
          console.log( description)
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchDesc();
    }, [selectedSpell]);
    return(
        <div>
            <p>
            {description}
            </p>
        </div>

    )

}