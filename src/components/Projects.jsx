import '../styles/Projects.scss';
import proyecto1 from '../images/proyecto1.JPG';
import proyecto2 from '../images/proyecto2.JPG';
import proyecto3 from '../images/proyecto3.JPG';
import proyecto4 from '../images/proyecto4.JPG';
import proyecto5 from '../images/proyecto5.JPG';
import iconWeb from '../images/icon-web.png';
import iconGit from '../images/icon-github.png'




function Projects(props) {
    return (
        <div id="projectId" className={`projects ${props.theme}`}>
            <h1 className='projects__title'>
                {"/Proyectos"}
            </h1>
            <ul className='projects__list' >
                <li>
                    <img className="card-img" src={proyecto1} alt="captura pantalla de la web"></img>
                    <div className={`card-info ${props.theme}`}>
                        <a className='links-projects' href=""><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' href=""><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>

                </li>
                <li>
                    <img className="card-img" src={proyecto2} alt="captura pantalla de la web"></img>
                    <div className={`card-info ${props.theme}`}>
                        <a className='links-projects' href=""><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' href=""><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>
                <li>
                    <img className="card-img" src={proyecto3} alt="captura pantalla de la web"></img>
                    <div className={`card-info ${props.theme}`}>
                        <a className='links-projects' href=""><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' href=""><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>
                <li>
                    <img className="card-img" src={proyecto4} alt="captura pantalla de la web"></img>
                    <div className={`card-info ${props.theme}`}>
                        <a className='links-projects' href=""><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' href=""><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>
                <li>
                    <img className="card-img" src={proyecto5} alt="captura pantalla de la web"></img>
                    <div className={`card-info ${props.theme}`}>
                        <a className='links-projects' href=""><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' href=""><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Projects; 