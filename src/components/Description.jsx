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
          setDescription(response.data.results);
          console.log( description)
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchDesc();
    }, []);
    return(
        <div>
            <p>
            ¯\_(ツ)_/¯
            </p>
        </div>

    )

}