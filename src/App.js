import Character from './components/Character';
import  Class  from './components/Class';
import Alignment from './components/Alignment';
import Traits from './components/Traits';
import Spells from './components/Spells';
import './App.css';


function App() {
  return (
    <div className="App">
      <Character/>
      <Class/>
      <Alignment/>
      <Traits/>
      <Spells/>
      
    </div>
  );
}

export default App;
