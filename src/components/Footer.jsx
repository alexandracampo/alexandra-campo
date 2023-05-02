import '../styles/Footer.scss';
import AnchorLink from "react-anchor-link-smooth-scroll";
import iconUp from '../images/icon-up.png'


function Footer(props) {


    return (
        <div className={`footer ${props.theme}`}>
            <div className='box-copy'>
                <p className='copyright'>&copy; Alexandra Campo 2023</p>
            </div>
            <AnchorLink className='link-btn' offset={() => 300} href='#aboutmeId'>
                <img className='btn-up' src={iconUp} alt='imagen flecha arriba'></img>
            </AnchorLink>


        </div>
    );
};

export default Footer;