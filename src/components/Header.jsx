import '../styles/Header.scss';
import menuImage from '../images/menu4.png'
import { useState } from 'react';



function Header(props) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }
    console.log(menu)

    return (
        <div className={`header ${props.theme}`} >
            <div className='header-box-title'>
                <p className="header-name"></p>
                <div className="switch-button">
                    <input
                        type="checkbox"
                        name="switch-button"
                        id="switch-label" className="switch-button__checkbox"
                        onChange={props.prop1}
                    />
                    <label htmlFor="switch-label" className="switch-button__label"></label>
                </div>
            </div>

            <a
                onClick={toggleMenu}
                href={menu}>
                <img
                    className='header-menu-img'
                    src={menuImage}
                    alt="logo menú" />
            </a>
            <ul className={`menu ${menu ? "menu-activo" : ""}`}>
                <li><a>About me</a></li>
                <li><a>Proyectos</a></li>
                <li><a>Herramientas</a></li>
                <li><a>Contacta conmigo</a></li>
            </ul>

        </div>
    );
};

export default Header;