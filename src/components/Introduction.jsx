import '../styles/Introduction.scss';

function Introduction(props) {


    return (
        <div id="aboutmeId" className={`introduction ${props.theme}`} >

            <h1 className='title1'>{"About me"}</h1>

            <div className="text">
                <p className="text__box1">
                    Hi there! ⚡
                    <br />
                    <br />
                    Soy Alexandra y si has llegado hasta aquí es porque te interesa la programación o porque te he enviado el link a traición para que me aumente el número de visitas de la web.  Sea como sea, te quiero contar un par de cosas sobre mí:
                </p>
                <p className="text__box2">
                    Soy inquieta por naturaleza, me gusta el movimiento, tanto físico como mental, lo cual se refleja en que me encanta viajar y me encanta programar. Lo de viajar lo descubrí hace muchos años y en todo este tiempo he viajado a lugares como Japón, California, China y muchos países de Europa. Sin embargo, mi pasión por la programación la descubrí hace menos tiempo, pero a día de hoy puedo decir que tengo una base sólida que me permite utilizar Javascript, HTML, CSS, o React, entre otras herramientas.
                </p>
                <p className="text__box3">
                    Creo que la mejor forma de que veas lo que soy capaz de hacer es visitando mis proyectos, por eso más abajo tienes acceso a ellos, tanto al repositorio de Github como a la propia web del proyecto. Te animo a que los visites y a que contactes conmigo para cualquier duda o sugerencia que tengas sobre ellos o sobre cualquier cosa. También puedes seguirme en mis redes sociales, en el apartado 'Contacto' tienes los enlaces. ¡Bienvenid@!
                </p>
            </div>
        </div>
    );
};

export default Introduction;