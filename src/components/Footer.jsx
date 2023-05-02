import '../styles/Footer.scss';
import AnchorLink from "react-anchor-link-smooth-scroll";
import iconUp from '../images/icon-up.png'


function Footer(props) {


    return (
        <div className={`footer ${props.theme}`}>
            <p className='copyright'>&copy; Alexandra Campo 2023</p>
            <AnchorLink className='btn-up' offset={() => 300} href='#aboutmeId'><img src={iconUp} /></AnchorLink>
        </div>
    );
};

export default Footer;