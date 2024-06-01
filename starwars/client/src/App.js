import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Planets from './components/Planets/Planets';
import Characters from './components/Characters/Characters';
import Starships from './components/Starships/Starships';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/planets" element={<Planets />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </Router>
  );
}
export default App;
