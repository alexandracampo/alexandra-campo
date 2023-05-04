import '../styles/Contact.scss';
import github from '../images/icon-git.png';
import linkedin from '../images/icon-linkedin.png';
import twitter from '../images/icon-tw.png';

function Contact(props) {


    return (
        <div id="contactId" className={`contact ${props.theme}`}>
            <h2 className='title-contact'>Contacto</h2>
            <div className='container'>
                <div className='container-text'>
                    <p className='text-contact' >Aquí te dejo los links a mis redes para que podamos estar conectados. No dudes en escribirme para cualquier consulta, propuesta o sugerencia. See you soon! </p>
                </div>

                <div className='container-links'>

                    <div className={`list-links ${props.theme}`}>
                        <a className='links-contact' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/alexandracampomatilla/'>
                            <img className='icon' src={linkedin} alt="Logo Linkedin" />
                        </a>
                        <a className='links-contact' target="_blank" rel="noopener noreferrer" href='https://github.com/alexandracampo'>
                            <img className='icon' src={github} alt="logo Github" />
                        </a>
                        <a className='links-contact' target="_blank" rel="noopener noreferrer" href='https://twitter.com/AlexFieldCode'>
                            <img className='icon twitter' src={twitter} alt="logo Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;