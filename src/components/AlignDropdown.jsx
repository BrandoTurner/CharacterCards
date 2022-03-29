import { useState } from "react"


export default function AlignDropdown(props) {
    const { alignObj} = props
    console.log(props.alignObj)

    const [selectedAlign, setSelectedAlign] = useState([])
    let handleAlignChange = (e) => {
        setSelectedAlign(e.target.value)}
  return (

    <div>
        <label>Alignment
        <select onChange={handleAlignChange}>
            {alignObj.map((alignName,index) => {
                return(
                <option value= {alignName.name} key={alignName.name}>
                    {alignName.name}
            </option>
            
                )
            })}
            
            </select>
            </label>
        </div>
  )
}





// set state of selected align
// pass url to a new component
// new component will make fetch rquest to the new url
// render api response