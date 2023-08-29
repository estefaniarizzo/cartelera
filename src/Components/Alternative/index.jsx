import './index.css'

function Alternative (){
    return(
        <div className='movies-section'>
        <h1 className='h1-section'>Cine Alternativo<a  className='a-link-alternative' href="../cine-alternativo">Ver mas</a></h1>
        <section className="container-alternative">
          <div className="box-alternative">
            <div className="title-alternative">
              <h3>Genero: <br />Documental</h3>
              <h1>Historias de Tokyo</h1>
            </div>
            <div className="desc-alternative">
              <p className='description-movie'>
              Emocionante encuentro con una de las grandes capitales del mundo y su transformación durante los últimos 400 años, cuyo origen es la exposición del Museo Ashmolean de Oxford.
              </p>
            </div>
          </div>
          <div className="box-alternative">
            <div className="title-alternative">
              <h3>Genero: <br />Concierto</h3>
              <h1>Andre Riau</h1>
            </div>
            <div className="desc-alternative">
              <p className='description-movie'>
              El rey del Waltz nos invita a su nuevo concierto en cines “Rodeados de Amor”, desde su bella ciudad natal: Maastricht. André Rieu está de regreso con su glorioso concierto de verano, desde la icónica plaza de Vrijhof. 
              </p>
            </div>
          </div>
          <div className="box-alternative">
            <div className="title-alternative">
              <h3>Genero: <br />Arte</h3>
              <h1>Vermeer</h1>
            </div>
            <div className="desc-alternative">
              <p className='description-movie'>
                Exposicion de pinturas del gran artista Vermeer.
              </p>
            </div>
          </div>
         
          
        </section>
        <br />
      </div>
    )
}
export default Alternative