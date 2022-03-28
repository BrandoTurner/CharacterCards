import { useState } from "react"


export default function ClassDropdown(props) {
    const { classObj} = props
    console.log(props.classObj)
    

    const [selectedClass, setSelectedClass] = useState([])
    let handleClassChange = (e) => {
        setSelectedClass(e.target.value)}
  return (

    <div>
        <select onChange={handleClassChange}>
            {classObj.map((className,index) => {
                return(
                <option value= {className.name} key={className.name}>
                    {className.name}
            </option>
                )
            })}
            
            </select>
        </div>
  )
}





// set state of selected class
// pass url to a new component
// new component will make fetch rquest to the new url
// render api response