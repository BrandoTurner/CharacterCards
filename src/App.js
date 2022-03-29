import Character from './components/Character';
import  Class  from './components/Class';
import Alignment from './components/Alignment';
import Traits from './components/Traits';
import Equipment from './components/Equipment';
import Spells from './components/Spells';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="Header">
        Create your Character!
      </div>
      <div className="CustomCard">
      <Character/>
      <Class/>
      <Alignment/>
      <Traits/>
      <Equipment/>
      <Spells/>
      </div>
      
    </div>
  );
}

export default App;
