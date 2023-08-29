import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../../Header';
import peliculas from './peliculasData';
import './index.css'

function EnCartelera() {
    return (
      <>
        <Header />
        <div className="cine-alternativo-container">
          <h1 className='card-tittle h1-title'>En Cartelera</h1>
          <div className="card-container"> {/* Contenedor para las cards */}
            {peliculas.map((pelicula) => (
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