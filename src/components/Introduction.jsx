import '../styles/Introduction.scss';

function Introduction() {


    return (
        <div className="introduction">

            <h1 className='title1'>{"/Alexandra Campo"}</h1>

            <h2 className="title-opacity">About me</h2>
            <div className="text">
                <p className="text__box1">
                    ¡Hi! Me llamo Alexandra, vivo en Mallorca y me acabo de graduar en un increíble bootcamp de desarrollo web. Mi trayectoria profesional ha transcurrido principalmente en el ámbito administrativo, me gradué en Administración de Empresas y fué ahí, trabajando en mi TFG, donde descubrí que tenía que desviar mi camino hacia el mundo de la programación.
                </p>
                <p className="text__box2">
                    Me siento con absoluta capacidad de enfrentarme a cualquier reto técnico, me encanta programar y maquetar. Y más allá de la parte técnica, soy una persona comunicativa, responsable, organizada y adaptable a los cambios.
                </p>
                <p className="text__box3">
                    Te invito a navegar por mi web, a seguirme en mis redes sociales y a que contactes conmigo para cualquier consulta o sugerencia, welcome!
                </p>
            </div>
        </div>
    );
};

export default Introduction;