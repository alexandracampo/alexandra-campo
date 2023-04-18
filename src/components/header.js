import '../styles/Header.scss';
import menu from '../images/menu4.png'


function Header() {

    const setDarkMode = () => {
        document.querySelector(".header").setAttribute("data-theme", "dark")
    }

    const setLightMode = () => {
        document.querySelector(".header").setAttribute("data-theme", "light")
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
            <div className='header-box-title'>
                <p className="header-name">{"{ Alexandra Campo }"}</p>
                <div className="switch-button">
                    <input
                        type="checkbox"
                        name="switch-button"
                        id="switch-label" className="switch-button__checkbox"
                        onChange={toggleTheme}
                    />
                    <label htmlFor="switch-label" className="switch-button__label"></label>
                </div>
            </div>
            <a className='header-menu-link' href='/'>
                <img className='header-menu-img' src={menu} alt="logo menú" />
            </a>
        </div>
    );
};

export default Header;