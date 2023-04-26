import '../styles/Header.scss';
import menuImage from '../images/menu4.png';
import menuImageCross from '../images/icon-cross.png';
import { useState } from 'react';



function Header(props) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

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

            <img
                className='header-menu-img'
                src={menu ? menuImageCross : menuImage}
                alt="logo menú"
                onClick={toggleMenu} />

            <ul className={`${menu ? "menu-activo" : "menu"}`}>
                <li><a className='menu-link'>About me</a></li>
                <li><a className='menu-link'>Proyectos</a></li>
                <li><a className='menu-link'>Herramientas</a></li>
                <li><a className='menu-link'>Contacta conmigo</a></li>
            </ul>

        </div>
    );
};

export default Header;