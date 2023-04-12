import logo from '../images/logo12_.png';
import '../styles/Header.scss';


function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt='Logo Alexandra Field'></img>
            <ul className="navbar">
                <li className="navbar__list">
                    <a className="navbar__list--link" href="">About me
                    </a>
                </li>
                <li className="navbar__list">
                    <a className="navbar__list--link" href="">Contact
                    </a>
                </li>
                <li className="navbar__list">
                    <a className="navbar__list--link" href="">Projects
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;