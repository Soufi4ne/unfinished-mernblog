import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Apropos from './pages/Apropos';
import ListeArticles from './pages/ListeArticles';
import Article from './pages/Article';

function App() {
  return (

    <BrowserRouter>
      <div className="divconteneur">
        <Routes>

          <Route path="apropos" element={<Apropos />} />
          <Route path="/listearticles" element={<ListeArticles />} />
          <Route path="/" element={<Acceuil />} />
          <Route path="acceuil" element={<Acceuil />} />

          <Route path="/article" element={<Article />} />

        </Routes>
      </div>
      {/* <div className="divconteneur"> */}

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
