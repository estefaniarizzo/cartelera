import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Importa tus estilos CSS locales si es necesario
import Caceria from '../../../assets/Proximos estrenos/caceria.png'
import Contrareloj from '../../../assets/Proximos estrenos/Contrareloj.png'
import Justiciero from '../../../assets/Proximos estrenos/El-justiciero3.jpg'
import Monja from '../../../assets/Proximos estrenos/La-monja2.jpg'
import Hada from '../../../assets/Proximos estrenos/La-traviesa-hada-de-los-dientes.jpg'
import Juegos from '../../../assets/Proximos estrenos/juegos.jpg'
import Saw from '../../../assets/Proximos estrenos/saw.png'
import Aire from '../../../assets/Proximos estrenos/sin-aire.png'
import Libertad from '../../../assets/Proximos estrenos/Sonido-de-libertad.jpg'
function ProximosEstrenos() {
    return (
        <>
            <Header />
            <div className="cine-alternativo-container">
                <h1 className='card-tittle  h1-title-soon'>Proximos Estrenos</h1>
                <Card>
                    <Card.Header className='card-tittle'>Caceria en Venecia</Card.Header>
                    <Card.Body>
                        <Card.Title>Crimen, Drama, Misterio</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Caceria} alt="IMG" />
                            </div>
                            <br />
                            En la Venecia posterior a la Segunda Guerra Mundial, Poirot, ahora retirado y viviendo
                            en su propio exilio, asiste a regañadientes a una sesión de espiritismo. Cuando uno de
                            los invitados es asesinado, depende del ex detective descubrir una vez más al asesino.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header className='card-tittle'>Contrarreloj</Card.Header>
                    <Card.Body>
                        <Card.Title>Acción, Crimen, Drama</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Contrareloj} alt="IMG" />
                            </div>

                            <br />
                            Matt Truner (Liam Neeson), un ejecutivo bancario, recibe una amenaza de bomba
                            mientras conduce a sus hijos a la escuela. Su pasado inescrupuloso ha vuelto
                            para cobrar venganza y ahora ha puesto a sus hijos en peligro. Si se detienen,
                            si no siguen las instrucciones o si alguno de ellos sale del auto, este explotará.
                            Lo único que le quedará a Matt es hacer todo lo que esté a su alcance para salvar
                            a sus hijos. Pero el reloj no se detiene. Nueva versión de la película española
                            del 2015 "El Desconocido".
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Header className='card-tittle'>El Justiciero 3</Card.Header>
                    <Card.Body>
                        <Card.Title >Acción, Thriller</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Justiciero} alt="IMG" />
                            </div>

                            <br />
                            Desde que dejó atrás su vida como asesino del gobierno, Robert McCall
                            (Denzel Washington) ha tenido dificultades para reconciliarse con las
                            cosas horribles que ha hecho en el pasado, y encuentra un extraño consuelo
                            en hacer justicia a nombre de los oprimidos. Sintiéndose, sorprendentemente,
                            como en casa en el sur de Italia, descubre que sus nuevos amigos están bajo
                            el control de jefes criminales locales. Cuando la situación se torna mortal,
                            McCall sabe qué tiene que hacer: convertirse en el protector de sus amigos
                            enfrentándose a la mafia.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>La Monja 2</Card.Header>
                    <Card.Body>
                        <Card.Title>Terror</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Monja} alt="IMG" />
                            </div>

                            <br />
                            1956 – Francia. Un sacerdote es asesinado. Un mal se está extendiendo.
                            La hermana Irene una vez más se encuentra cara a cara con Valak, la
                            monja demonio. Secuela de "La monja" (2018).
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>La traviesa hada de los dientes</Card.Header>
                    <Card.Body>
                        <Card.Title>Animación, Aventura</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Hada} alt="IMG" />
                            </div>

                            <br />
                            Cuando Violetta pierde de forma catastrófica su examen de hada de los dientes,
                            la traviesa criatura no acepta el resultado y se cuela en el mundo de los
                            humanos. Llega directamente a la habitación de Maxie, una niña de 12 años que
                            acaba de mudarse del campo a la ciudad y que echa de menos su antiguo y verde hogar.
                            A su lado, Violetta descubrirá su verdadera vocación.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Los juegos del hambre: La balada de pajaros cantores y serpientes</Card.Header>
                    <Card.Body>
                        <Card.Title>Acción, Aventura, Drama</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Juegos} alt="IMG" />
                            </div>

                            <br />
                            Son los décimos Juegos del Hambre y Coriolanus Snow, de dieciocho años,
                            se está preparando para su única oportunidad de gloria como mentor en
                            este encuentro decisivo. Sin embargo, las probabilidades están en su contra,
                            ya que se le asignada la humillante tarea de ser el mentor del carismático
                            tributo femenino del Distrito 12, Lucy Gray Baird. Sus destinos se verán
                            entrelazados: cada elección que hace Coriolanus podría conducir al éxito o
                            al fracaso, al triunfo o a la ruina. En de la arena, será una pelea a muerte.
                            Y fuera de ella, comenzará a preocuparse por su tributo condenado.
                            Coriolanus deberá considerar su necesidad de seguir las reglas, contra su deseo
                            de sobrevivir sin importar lo que cueste.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Saw 10</Card.Header>
                    <Card.Body>
                        <Card.Title>Terror</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Saw} alt="IMG" />
                            </div>

                            <br />
                            John Kramer (Tobin Bell) está de vuelta. La entrega más perturbadora de
                            la franquicia de SAW explora el capítulo nunca antes contado del juego
                            más personal de Jigsaw. Toma lugar entre los eventos ocurridos de SAW I
                            (El juego del miedo) y SAW II (El juego del miedo 2), un enfermo y
                            desesperado John viaja a México por un arriesgado y experimental
                            procedimiento médico con la esperanza de encontrar milagrosamente una
                            cura para su cáncer, solo para descubrir que toda la operación es una
                            estafa y defrauda a los más vulnerables. Armado de un nuevo propósito,
                            el infame asesino serial regresa a su trabajo, intercambiando papeles
                            con los estafadores en su característico estilo visceral a través de
                            tortuosas, trastornadas e ingeniosas trampas.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Sin Aire</Card.Header>
                    <Card.Body>
                        <Card.Title> Suspenso</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Aire} alt="IMG" />
                            </div>

                            <br />
                            El buceo más espectacular se convierte en una pesadilla para dos hermanas,
                            cuando a una profundidad de 28 metros ocurre un deslizamiento de rocas
                            dejando atrapada a una de ellas. Con poco oxígeno, temperatura muy baja
                            y condiciones adversas, ambas empezarán una lucha contra el tiempo para
                            sobrevivir a este accidente. ¿Podrán aguantar la tensión de cada segundo
                            mientras se quedan sin aire?
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card className='card-container'>
                    <Card.Header className='card-tittle'>Sonido de libertad</Card.Header>
                    <Card.Body>
                        <Card.Title>Acción, Thriller</Card.Title>
                        <Card.Text>
                            <div className='img-container'>
                                <img className='img-CA' src={Libertad} alt="IMG" />
                            </div>

                            <br />
                            Sonido De Libertad, basada en una increíble historia real, trae luz y
                            esperanza al oscuro mundo del tráfico de menores. Después de rescatar
                            a un niño de los traficantes, un agente federal descubre que la hermana
                            del niño todavía está cautiva y decide embarcarse en una peligrosa misión
                            para salvarla. Con el tiempo en su contra, renuncia a su trabajo y se
                            adentra en lo profundo de la selva colombiana, poniendo su vida en riesgo
                            para liberarla y traerla de vuelta a casa.

                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default ProximosEstrenos;
