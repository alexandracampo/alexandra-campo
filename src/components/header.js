import nombre from '../images/nombre.png';
import '../styles/Header.scss';
import menu from '../images/menu.svg'


function Header() {

    const setDarkMode = () => {
        document.getElementsByClassName("body").setAttribute("data-theme", "dark")
    }

    const setLightMode = () => {
        document.getElementsByClassName("body").setAttribute("data-theme", "light")
    }

    const toggleTheme = (ev) => {
        if (ev.target.checked) {
            setDarkMode()
        } else {
            setLightMode()
        }
    }

    return (
        <div className="header">
            <a className='link-name' href='/'>
                <img className="nombre-logo" src={nombre} alt='imagen nombre wev' />
            </a>

            <div className="switch-button">
                <input
                    type="checkbox"
                    name="switch-button"
                    id="switch-label" className="switch-button__checkbox"
                    onChange={toggleTheme}
                />
                <label htmlFor="switch-label" className="switch-button__label"></label>
            </div>

            <a className='menu-header' href='/'>
                <img src={menu} alt="logo menú" />
            </a>


            {/*   <ul className="navbar">
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
            </ul> */}

        </div>
    );
};

export default Header;