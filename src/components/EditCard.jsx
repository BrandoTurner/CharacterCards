import Character from './Character';
import  Class  from './Class';
import Alignment from './Alignment';
import Traits from './Traits';
import Equipment from './Equipment';
import Spells from './Spells';



const EditCard = () => {
  return (
    <div className="EditCard">
      <div className="Header">
        Create your Character!
      </div>
      <Character/>  
      <Class/>
      <Alignment/>
      <Traits/>
      <Equipment/>
      <Spells/> 
      
    </div>
  );
}

export default EditCard;
