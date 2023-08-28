import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Importa tus estilos CSS locales si es necesario
import Historias from '../../../assets/Cine alternativo/historiasdetokio.png'
import Andre from '../../../assets/Cine alternativo/andre-rieu.jpg'
import Vermeer from '../../../assets/Cine alternativo/vermeer.png'
function CineAlternativo() {
    return (
        <>
            <Header />
            <div className="cine-alternativo-container">
                <h1 className='card-tittle  h1-title'>Cine Alternativo</h1>
                <Card>
                    <Card.Header className='card-tittle'>Historias de Tokyo</Card.Header>
                    <Card.Body>
                        <Card.Title>Documental</Card.Title>
                        <Card.Text>
                        <div className='img-container'>
                                <img className='img-CA' src={Historias} alt="IMG" />
                            </div>
                            <br />
                            Emocionante encuentro con una de las grandes capitales del mundo y su transformación
                            durante los últimos 400 años, cuyo origen es la exposición del Museo Ashmolean de Oxford.
                            Cuatro siglos de un arte dinámico y memorable: desde las delicadas xilografías de Hokusai e Hiroshige,
                            hasta los carteles del Arte Pop y la fotografía contemporáneos, el Manga, el cine y las obras urbanas de sus calles.
                            Esta exposición es un viaje
                            al corazón de la vibrante Tokio, para explorar más a fondo su arte y sus artistas.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header className='card-tittle'>Andre-Riu</Card.Header>
                    <Card.Body>
                        <Card.Title>Concierto</Card.Title>
                        <Card.Text>
                        <div className='img-container'>
                                 <img className='img-CA' src={Andre} alt="IMG" />
                            </div>
                           
                            <br />
                            El rey del Waltz nos invita a su nuevo concierto en cines “Rodeados de Amor”,
                            desde su bella ciudad natal: Maastricht. André Rieu está de regreso con su glorioso
                            concierto de verano, desde la icónica plaza de Vrijhof. Será una celebración con música
                            conmovedora y amorosa, que abarcan desde canciones clásicas, canciones populares para
                            cantar y vals que los pondrán a bailar . Acompañado de su Orquesta Johann Strauss,
                            André tendrá al encantador Gospel Choir y varios invitados sorpresa, convirtiendo las
                            salas de cine en una gran fiesta. Una experiencia llena de música, baile, amor y felicidad,
                            para celebrar el "amor y la amistad". ¡Solo en cines!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header className='c'>Vermeer</Card.Header>
                    <Card.Body>
                        <Card.Title>Arte</Card.Title>
                        <Card.Text>
                        <div className='img-container'>
                                <img className='img-CA' src={Vermeer} alt="IMG" />
                            </div>
                            
                            <br />
                            La presentacion de las obras de arte mas exitosas ahora en cines,
                            ideal para toda la familia, sumergete y conoce el mundo de Vermeer 
                            facinantes pinturas que te cautivaran, explora el mundo del arte.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default CineAlternativo;
