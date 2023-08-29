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
import oppenheimer from '../../../assets/Cartelera/Oppenheimer.jpg'
import summit from '../../../assets/Cartelera/Summit-fever.jpg'
import talk from '../../../assets/Cartelera/Talk-to-me.jpg'
import vampiro from '../../../assets/Cartelera/Vampiro-al-rescate.jpg'
function ProximosEstrenos() {
    return (
        <>
            <Header />
            <div className="cine-alternativo-container">
                <h1 className='card-tittle  h1-title'>Proximos Estrenos</h1>
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
                        <Card.Title>DC COMICS, Ciencia Ficcion</Card.Title>
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
                    <Card.Header className='card-tittle'>Gran Turismo</Card.Header>
                    <Card.Body>
                        <Card.Title>Accion, Aventura, Drama</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Turismo} alt="IMG" />
                            </div>

                            <br />
                            Basada en la historia real de Jann Mardenborough, la película es la historia
                            definitiva de deseos cumplidos de un jugador adolescente de “Gran Turismo”,
                            cuyas habilidades de gaming le llevaron a ganar una serie de competencias de Nissan,
                            hasta convertirse en un verdadero conductor de carros de carreras profesional.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Megalodon 2</Card.Header>
                    <Card.Body>
                        <Card.Title>Ciencia Ficcion, Suspenso, Terror</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Megalodon} alt="IMG" />
                            </div>

                            <br />
                            Una exploración submarina en las profundidades del océano se convierte en una
                            espiral de caos cuando una malévola operación minera amenaza la misión y obliga
                            al equipo de investigación a librar una arriesgada batalla por la supervivencia.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Oppenheimer</Card.Header>
                    <Card.Body>
                        <Card.Title>Thriller</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={oppenheimer} alt="IMG" />
                            </div>

                            <br />
                            Escrita y dirigida por Christopher Nolan, Oppenheimer es un thriller
                            épico que sumerge al público en la trepidante paradoja del enigmático hombre
                            que debe arriesgarse a destruir el mundo para poder salvarlo.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Summit fever</Card.Header>
                    <Card.Body>
                        <Card.Title>Drama</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={summit} alt="IMG" />
                            </div>

                            <br />
                            El audaz sueño de escalar el trío de montañas más desafiante del mundo se convertirá
                            en una terrorífica pesadilla para un grupo de amigos escaladores. Una tormenta mortal
                            los atrapará muy cerca de la cumbre y les impedirá toda esperanza de rescate.
                            Con todo en contra, los montañistas se verán obligados a confiar los unos en los otros,
                            para salvarse en este ascenso al límite. Una aventura cargada de adrenalina, rodada en
                            escenarios reales y que puso a prueba a un equipo técnico de escaladores profesionales.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Hablame</Card.Header>
                    <Card.Body>
                        <Card.Title> Suspenso, Terror</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={talk} alt="IMG" />
                            </div>

                            <br />
                            Mia (Sophie Wilde) ha pasado años evitando el trauma de la muerte de su madre.
                            Esto cambiará cuando sus amigos descubran cómo conjurar espíritus usando una mano
                            embalsamada, lo que la llevará a  enfrentar a un alma que dice ser su madre muerta.
                            La puerta al  mundo de los espíritus ha sido abierta y ahora para sobrevivir, Mía
                            y sus amigos deberán de elegir en quién confiar, ¿en los muertos o los vivos?

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Vampiro al rescate</Card.Header>
                    <Card.Body>
                        <Card.Title>Animación, Aventura, Comedia, Familiar</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={vampiro} alt="IMG" />
                            </div>

                            <br />
                            Por alguna razón, siempre joven y siempre inmaculadamente vestido,
                            Koschey no ha podido encontrar una novia durante trescientos años.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ProximosEstrenos;
