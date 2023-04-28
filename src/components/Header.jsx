import '../styles/Header.scss';
import menuImage from '../images/menu4.png';
import menuImageCross from '../images/icon-cross.png';
import { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";



function Header(props) {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleCloseMenu = () => {
        if (menu === true) {
            setMenu(false)
        }
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

            <ul className={`${menu ? "menu-activo" : "menu"} ${props.theme}`}>

                <li><AnchorLink onClick={handleCloseMenu} offset={() => 300} href='#aboutmeId' className='menu-link'>About me</AnchorLink></li>
                <li><AnchorLink onClick={handleCloseMenu} offset={() => 200} href='#projectId' className='menu-link'>Proyectos</AnchorLink></li>
                <li><AnchorLink onClick={handleCloseMenu} offset={() => 200} href='#technologiesId' className='menu-link'>Herramientas</AnchorLink></li>
                <li><AnchorLink onClick={handleCloseMenu} offset={() => 200} href='#contactId' className='menu-link'>Contacta conmigo</AnchorLink></li>
            </ul>

        </div>
    );
};

export default Header;