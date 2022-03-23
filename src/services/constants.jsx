import axios from "axios";

export async function Constants(){
    const result = await axios.get('https://www.dnd5eapi.co/api/')
    .then(({ data }) => {
        return data;
      });
    return Result;
    
}
