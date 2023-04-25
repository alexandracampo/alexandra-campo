import '../styles/Footer.scss';


function Footer(props) {


    return (
        <div className={`footer ${props.theme}`}>
            <p>hola soy el footer</p>
            <button>Botón para subir a la primera sección</button>
        </div>
    );
};

export default Footer;