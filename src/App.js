import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditCard from './components/EditCard';
import FrontCard from './components/FrontCard';
import BackCard from './components/BackCard';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<EditCard/>}/>
      <Route path="/Frontcard" element={<FrontCard/>}/>
      <Route path="/BackCard" element={<BackCard/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
