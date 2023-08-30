import './index.css'
import { IoIosArrowRoundForward } from "react-icons/io";
function Alternative (){
    return(
        <div className='movies-section'>
        <h1 className='h1-section'>Cine Alternativo<a  className='a-link-alternative' href="../cine-alternativo">Ver mas<IoIosArrowRoundForward/></a></h1>
        <section className="container-alternative">
          <div className="box-alternative">
            <div className="title-alternative">
              
              <h1>Historias de Tokyo</h1>
            </div>
            <div className="desc-alternative">
              <p className='description-movie'>
            Documental
              </p>
            </div>
          </div>
          <div className="box-alternative">
            <div className="title-alternative">
             
              <h1>Andre Riau</h1>
            </div>
            <div className="desc-alternative">
              <p className='description-movie'>
           Concierto
              </p>
            </div>
          </div>
          
          
          
        </section>
        <br />
      </div>
    )
}
export default Alternative