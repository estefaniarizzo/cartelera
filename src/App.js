import './App.css';
import Home from './Components/Home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CineAlternativo from './Components/Pages/CineAlternativo';
import EnCartelera from './Components/Pages/EnCartelera';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cine-alternativo" element={<CineAlternativo />} />
        <Route path="/en-cartelera" element={<EnCartelera />} />
      </Routes>
    </Router>
  );
}

export default App;
