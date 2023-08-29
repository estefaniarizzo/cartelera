import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Importa tus estilos CSS locales si es necesario
import Barbie from '../../../assets/Cartelera/Barbie.jpg'
import Blue from '../../../assets/Cartelera/Blue-bettle.jpg'
import Dracula from '../../../assets/Cartelera/Dracula.jpg'
import Turismo from '../../../assets/Cartelera/Gran-turismo.jpg'
import Megalodon from '../../../assets/Cartelera/Megalodon2.jpg'
import oppenheimer from '../../../assets/Cartelera/Oppenhaimer.jpg'
import summit from '../../../assets/Cartelera/Summit-fever.jpg'
import talk from '../../../assets/Cartelera/Talk-to-me.jpg'
import vampiro from '../../../assets/Cartelera/Vampiro-al-rescate.jpg'
function EnCartelera() {
    return (
        <>
            <Header />
            <div className="cine-alternativo-container">
                <h1 className='card-tittle  h1-title'>En Cartelera</h1>
                <Card>
                    <Card.Header className='card-tittle'>Barbie</Card.Header>
                    <Card.Body>
                        <Card.Title>Comedia</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Barbie} alt="IMG" />
                            </div>
                            <br />
                            'Barbie' nos transporta directos a 'Barbieland', el utópico paraíso en el que viven todas
                             las Barbies jamás inventadas (sí, también aquellas que fueron rápidamente sacadas del 
                             mercado). Allí conoceremos a 'Barbie Estereotípica', la muñeca de Mattel original, 
                             interpretada por Margot Robbie, que empezará a experimentar una serie de "defectos"
                              que la alejan de la perfección que se espera de ella.

                            En un mundo donde todo funciona como un reloj, y donde los rostros siempre tienen dibujada 
                            una sonrisa, los pensamientos trascendentales sobre la muerte y la celulitis no tienen 
                            cabida.

                            Para encontrar una solución a su problema, Barbie tendrá que salir al mundo real y 
                            encontrar la causa que ha provocado su "fallo de funcionamiento". Al hacerlo, descubrirá 
                            un mundo completamente nuevo. Con sus ventajas... y sus inconvenientes.

                            La acompañará su Ken asignado, Ryan Gosling, que también experimentará toda una 
                            revelación al descubrir que en el mundo humano no es "solo Ken" sino que es un hombre,
                            con todos los privilegios que ello supone (algo que nada habitual en su tierra natal).
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header className='card-tittle'>Blue Beetle</Card.Header>
                    <Card.Body>
                        <Card.Title>DC COMICS</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Blue} alt="IMG" />
                            </div>

                            <br />
                            Jaime Reyes, recién graduado de la universidad, regresa a casa lleno de aspiraciones 
                            para su futuro, solo para descubrir que su hogar no es exactamente como lo dejó. 
                            En su búsqueda por encontrar su propósito en el mundo, el destino interviene cuando Jaime 
                            se encuentra inesperadamente en posesión de una antigua reliquia de biotecnología 
                            alienígena: el escarabajo. Cuando el escarabajo elige repentinamente a Jaime como huésped 
                            simbiótico, le otorga una increíble armadura capaz de adquirir poderes extraordinarios e 
                            impredecibles, cambiando para siempre su destino al convertirse en el superhéroe 
                            BLUE BEETLE.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header className='card-tittle'>Dracula Mar de Sangre</Card.Header>
                    <Card.Body>
                        <Card.Title >Terror</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Dracula} alt="IMG" />
                            </div>

                            <br />
                            Basada en un escalofriante capítulo de Drácula, la novela clásica de Bram Stoker. 
                            Drácula: Mar de sangre cuenta la aterradora historia del barco mercante Demeter, 
                            encargado de transportar una carga privada de 50 cajas de madera sin marcar, de Carpatia
                            a Londres.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Vermeer</Card.Header>
                    <Card.Body>
                        <Card.Title>Arte</Card.Title>
                        <Card.Text>
                        <div className='img-container'>
                                <img className='img-CA' src={Turismo} alt="IMG" />
                            </div>
                            
                            <br />
                            La presentacion de las obras de arte mas exitosas ahora en cines,
                            ideal para toda la familia, sumergete y conoce el mundo de Vermeer 
                            facinantes pinturas que te cautivaran, explora el mundo del arte.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Vermeer</Card.Header>
                    <Card.Body>
                        <Card.Title>Arte</Card.Title>
                        <Card.Text>
                        <div className='img-container'>
                                <img className='img-CA' src={Megalodon} alt="IMG" />
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

export default EnCartelera;
