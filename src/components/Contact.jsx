import '../styles/Contact.scss';
import github from '../images/github-i.png';
import linkedin from '../images/linkedin-i.png';
import twitter from '../images/twitter-i.png';


function Contact(props) {


    return (
        <div id="contactId" className={`contact ${props.theme}`}>
            <h2 className='title-contact'>Contacto</h2>

            <a className='links-contact' href='https://www.linkedin.com/in/alexandracampomatilla/'>Linkedin<img className='icon' src={linkedin} alt="Logo Linkedin" /></a>
            <a className='links-contact' href='https://github.com/alexandracampo'>Github<img className='icon' src={github} alt="logo Github" /></a>
            <a className='links-contact' href='https://twitter.com/AlexFieldCode'>Twitter<img className='icon' src={twitter} alt="logo Twitter" /></a>

            {/*   <a className='links-contact' href="https://www.linkedin.com/in/alexandracampomatilla" target="_blank" rel="noopener noreferrer" >Linkedin</a>
            <a className='links-contact' href="https://github.com/alexandracampo" target="_blank" rel="noopener noreferrer" >Github</a>
            <a className='links-contact' href="https://twitter.com/AlexFieldCode" target="_blank" rel="noopener noreferrer" >Twitter</a> */}

        </div>
    );
};

export default Contact;