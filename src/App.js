import './App.css';
import React from 'react';
import Acceuil from './pages/Acceuil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="divconteneur">
        <Routes>

          <Route path="/" element={<Acceuil />} />
        </Routes>
      </div>
      {/* <div className="divconteneur"> */}

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
