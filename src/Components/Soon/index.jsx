import './index.css'
import { IoIosArrowRoundForward } from "react-icons/io";
function Soon (){
    return (
<div className='movies-section'>
    
      <h1 className='h1-section'>Proximos Estrenos <a  className='a-link-soon' href="../proximos-estrenos">Ver mas<IoIosArrowRoundForward/></a></h1>
      <section className="container-soon">
        <div className="box-soon">
          <div className="title-soon">
           
            <h1>Saw 10</h1>
          </div>
          <div className="desc-soon">
            <p className='description-movie'>
         Terror
            </p>
          </div>
        </div>
        <div className="box-soon">
          <div className="title-soon">
          
            <h1>Caceria en Venecia</h1>
          </div>
          <div className="desc-soon">
            <p className='description-movie'>
          Misterio
            </p>
          </div>
        </div>
        <div className="box-soon">
          <div className="title-soon">
           
            <h1>Contrareloj</h1>
          </div>
          <div className="desc-soon">
            <p className='description-movie'>
          Accion
            </p>
          </div>
        </div>
        <div className="box-soon">
          <div className="title-soon">
            
            <h1>Los juegos del Hambre</h1>
          </div>
          <div className="desc-soon">
            <p className='description-movie'>
          Fantasia
            </p>
          </div>
        </div>
      </section>
      <br />
    
     
    </div>
    )
}

export default Soon