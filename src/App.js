import './App.css';
import Home from './Components/Home/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CineAlternativo from './Components/Pages/CineAlternativo';
import EnCartelera from './Components/Pages/EnCartelera';
import ProximosEstrenos from './Components/Pages/ProximosEstrenos';
import Page_error404 from './Components/Error404';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cine-alternativo" element={<CineAlternativo />} />
        <Route path="/en-cartelera" element={<EnCartelera />} />
        <Route path="/proximos-estrenos" element={<ProximosEstrenos />} />
        <Route path='*' element={<Page_error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
