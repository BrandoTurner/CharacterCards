import Dropdown from './Dropdown'
import Character from './Character';
import  Class  from './Class';
import Alignment from './Alignment';
import Traits from './Traits';
import Equipment from './Equipment';
import Spells from './Spells';
import NavBar from './NavBar';



const EditCard = () => {
  return (<div>
      <NavBar/>
      
  <div className="Header">
        Create your Character!
      </div>
    <div className="EditCard">
      
      <Character/>  
      <Dropdown label="Class Name" endpoint="classes"/>
      <Alignment/>
      <Traits/>
      <Equipment/>
      <Spells/> 
      
    </div>
    </div>
  );
}

export default EditCard;
