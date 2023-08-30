import './index.css';
import React from 'react';
import Soon from '../Soon'
import Alternative from '../Alternative'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { IoIosArrowRoundForward } from "react-icons/io";
function CarrouselCartelera() {
  return (
    <div className='movies-section'>
      <br />
      <h1 className='h1-section'>En Cartelera<a  className='a-link' href="../en-cartelera">Ver mas<IoIosArrowRoundForward/></a></h1>
      
      <section className="container-funny">
        <div className="box-funny">
          <div className="title-funny">
            
            <h1>Barbie</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
              Comedia
            </p>
          </div>
        </div>
        <div className="box-funny">
          <div className="title-funny">
            
            <h1>Blue Beetle</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
             DC comics
            </p>
          </div>
        </div>
        <div className="box-funny">
          <div className="title-funny">
            
            <h1>Dracula mar de sangre</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
             Terror
            </p>
          </div>
        </div>
        <div className="box-funny">
          <div className="title-funny">
            
            <h1>Gran Turismo</h1>
          </div>
          <div className="desc-funny">
            <p className='description-movie'>
             Accion
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


