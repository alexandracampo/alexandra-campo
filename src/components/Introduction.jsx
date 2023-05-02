import '../styles/Introduction.scss';

function Introduction(props) {


    return (
        <div id="aboutmeId" className={`introduction ${props.theme}`} >

            <h1 className='title1'>{"About me"}</h1>

            <h2 className="title-opacity">About me</h2>
            <div className="text">
                <p className="text__box1">
                    Hi! Me llamo Alexandra, vivo en Mallorca y me acabo de graduar en un increíble bootcamp de desarrollo web. Mi trayectoria profesional ha transcurrido principalmente en el ámbito administrativo. Me gradué en Administración de Empresas y fué ahí, trabajando en mi TFG, donde por fin decidí que tenía que desviar mi camino hacia el mundo de la programación.
                </p>
                <p className="text__box2">
                    Me encanta programar y maquetar, y más allá de la parte técnica, soy una persona comunicativa, responsable, organizada y totalmente adaptable a los cambios. Todos mis proyectos de equipo se han desarrollado bajo una filosofía Agile, metodología Scrum y en remoto, hemos sido capaces de coordinarnos, organizarnos y practicar entre nosotros una comunicación efectiva donde el feedback era parte importante del trabajo.
                </p>
                <p className="text__box3">
                    Te invito a navegar por mi web, a seguirme en mis redes sociales y a que contactes conmigo para cualquier duda o sugerencia. Welcome!
                </p>
            </div>
        </div>
    );
};

export default Introduction;