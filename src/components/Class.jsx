import axios from 'axios';
import React, {useState , useEffect} from 'react';
import './App.css';

function Class(){
    const [class, setClass] = useState([]);
    
const fetchClass = async () => {
    
    try {
    const CLASS_URL = 'https://www.dnd5eapi.co/api/classes';
    const response = await axios.get(CLASS_URL);
    setClass(response.data.name);
    } catch (error){
            console.log(error);
        }
}
        console.log(fetchClass)
        //return class;
        };
   

    //useEffect(() => {
        //fetchClass = (e) => {
            //setClass(e.target.value)
     //}, [])
   /* return (
        <div>
        
        
        <select onClick={fetchClass}>
             <option value={class.map((class) => {class.value}}></option>)
        </select>
        </div>
    )
   */
   
export default Class;