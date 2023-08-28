import './index.css';
import React from 'react';
import Soon from '../Soon'
import Alternative from '../Alternative'

function CarrouselCartelera() {
  return (
    <div className='movies-section'>
      <h1 className='h1-section'>En Cartelera</h1>
      <section className="container-funny">
        <div className="box-funny">
          <div className="title-funny">
            <h3>Genero: <br />Comedia</h3>
            <h1>Barbie</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
              Vivir en Barbie Land es ser un ser perfecto en un lugar perfecto, a menos que tengas una crisis existencial total, o seas un Ken.
            </p>
          </div>
        </div>
        <div className="box-funny">
          <div className="title-funny">
            <h3>Genero: <br />Ciencia Ficción</h3>
            <h1>Blue Beetle</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
              En su búsqueda por encontrar su propósito en el mundo, el destino interviene cuando Jaime se encuentra inesperadamente en posesión de una antigua reliquia de biotecnología alienígena: el escarabajo.
            </p>
          </div>
        </div>
        <div className="box-funny">
          <div className="title-funny">
            <h3>Genero: <br />Terror</h3>
            <h1>Dracula mar de sangre</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
              Historia del barco mercante Demeter, encargado de transportar una carga privada de 50 cajas de madera sin marcar.
            </p>
          </div>
        </div>
        <div className="box-funny">
          <div className="title-funny">
            <h3>Genero: <br />Accion</h3>
            <h1>Gran Turismo</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
              Historia definitiva de deseos cumplidos de un jugador adolescente de “Gran Turismo”, cuyas habilidades de gaming le llevaron a ganar una serie de competencias de Nissan
            </p>
          </div>
        </div>
      </section>
      <br />
      <Soon/>
     <Alternative/>
      
      
    </div>
  );
}

export default CarrouselCartelera;


