import './App.css';
import Home from './Components/Home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CineAlternativo from './Components/Pages/CineAlternativo';
import EnCartelera from './Components/Pages/EnCartelera';
import ProximosEstrenos from './Components/Pages/ProximosEstrenos';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cine-alternativo" element={<CineAlternativo />} />
        <Route path="/en-cartelera" element={<EnCartelera />} />
        <Route path="/proximos-estrenos" element={<ProximosEstrenos />} />
      </Routes>
    </Router>
  );
}

export default App;
