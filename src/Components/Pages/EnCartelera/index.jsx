import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../../Header';
import peliculas from './peliculasData';
import './index.css'
import { useSelector } from 'react-redux';

function EnCartelera() {
  const terminoDeBusqueda = useSelector(state => state.terminoDeBusqueda);

  // Filtrar las películas en función del término de búsqueda
  const peliculasFiltradas = peliculas.filter(pelicula =>
    pelicula.titulo.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
  );
    return (
      <>
        <Header />
        <div className="cine-alternativo-container">
          <h1 className='card-tittle h1-title'>En Cartelera</h1>
          <div className="card-container"> {/* Contenedor para las cards */}
            {peliculasFiltradas.map((pelicula) => (
              <Card key={pelicula.id} className="movie-card">
                <Card.Header className='card-tittle'>{pelicula.titulo}</Card.Header>
                <Card.Body>
                  <Card.Title>{pelicula.genero}</Card.Title>
                  <Card.Text>
                    <div className='img-container'>
                      <img className='img-CA' src={pelicula.imagen} alt="IMG" />
                    </div>
                    <br />
                    {pelicula.descripcion}
                    <br />
                    <br />
                    Estreno: {pelicula.estreno}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default EnCartelera;