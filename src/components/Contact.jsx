import '../styles/Contact.scss';
import github from '../images/github-i.png';
import linkedin from '../images/linkedin-i.png';
import twitter from '../images/twitter-i.png';

function Contact(props) {


    return (
        <div id="contactId" className={`contact ${props.theme}`}>
            <h2 className='title-contact'>Contacto</h2>

            <div className='container-text'>
                <p className='text-contact' >Aquí te dejo estos links para que podamos estar conectados. No dudes en escribirme para cualquier consulta, propuesta o sugerencia. Hi there! </p>
            </div>
            <div className='container-links'>

                <div className={`list-links ${props.theme}`}>
                    <a className='links-contact' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/alexandracampomatilla/'>
                        <img className='icon' src={linkedin} alt="Logo Linkedin" />
                    </a>
                    <a className={`links-contact ${props.theme}`} target="_blank" rel="noopener noreferrer" href='https://github.com/alexandracampo'>
                        <img className='icon' src={github} alt="logo Github" />
                    </a>
                    <a className={`links-contact ${props.theme}`} target="_blank" rel="noopener noreferrer" href='https://twitter.com/AlexFieldCode'>
                        <img className='icon' src={twitter} alt="logo Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;