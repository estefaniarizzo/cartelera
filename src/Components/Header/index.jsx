import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <nav className='Nav-Item'>
       <Nav.Link className='Nav-Link' href='/'>Inicio</Nav.Link>
      <Nav.Link className='Nav-Link' href='*'>En Cartelera</Nav.Link>
      <Nav.Link className='Nav-Link' href='*'>Proximos Estrenos</Nav.Link>
      <Nav.Link className='Nav-Link'href='cine-alternativo'>Cine Alternativo</Nav.Link>
    </nav>
    
  );
}

export default NavBar;