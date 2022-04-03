import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditCard from './components/EditCard';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<EditCard/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
