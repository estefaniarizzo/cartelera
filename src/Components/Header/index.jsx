import Nav from 'react-bootstrap/Nav';

import './index.css';

function NavBar() {
  return (
    <nav className='Nav-Item'>
       <Nav.Link className='Nav-Link' href='/'>Inicio</Nav.Link>
      <Nav.Link className='Nav-Link' href='/home'>En Cartelera</Nav.Link>
      <Nav.Link className='Nav-Link' eventKey='link-1'>Proximos Estrenos</Nav.Link>
      <Nav.Link className='Nav-Link' eventKey='link-2'>Cine Alternativo</Nav.Link>
    </nav>
    
  );
}

export default NavBar;