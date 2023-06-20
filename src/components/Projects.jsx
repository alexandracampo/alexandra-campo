import '../styles/Projects.scss';
import proyecto1 from '../images/proyecto1.JPG';
import proyecto2 from '../images/proyecto2.JPG';
import proyecto3 from '../images/proyecto3.JPG';
import proyecto4 from '../images/proyecto4.JPG';
import proyecto5 from '../images/proyecto5.JPG';
import iconWeb from '../images/icon-web1.png';
import iconGit from '../images/icon-git.png'
import adivina from '../images/adivina.JPG'
import memory from '../images/memory.JPG'


function Projects(props) {
    return (
        <div id="projectId" className={`projects ${props.theme}`}>
            <h1 className='projects__title'>
                {"Proyectos"}
            </h1>
            <ul className='projects__list' >

                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>TARJETAS DE VISITA</p>
                    <img className="card-img" src={proyecto2} alt="captura pantalla de la web"></img>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/web-tarjetas-de-visita/"><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/web-tarjetas-de-visita"><img src={iconGit} className="icon-git" alt="enlace a git" />
                        </a>
                    </div>
                </li>

                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>MEMORY GAME</p>
                    <img className="card-img" src={memory} alt="captura pantalla de la web"></img>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/web-de-proyectos/"><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/web-de-proyectos"><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>

                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>WEB DE PROYECTOS</p>
                    <img className="card-img" src={proyecto3} alt="captura pantalla de la web"></img>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                        <p className='tech'>React</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/memory/"><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/memory"><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>

                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>ADIVINA EL NÚMERO</p>
                    <img className="card-img" src={adivina} alt="captura pantalla de la web"></img>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/adivina-el-numero/"><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/adivina-el-numero"><img src={iconGit} className="icon-git" alt="enlace a git" />
                        </a>
                    </div>
                </li>

                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>API HOGWARTS</p>
                    <img className="card-img" src={proyecto4} alt="captura pantalla de la web"></img>

                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                        <p className='tech'>React</p>
                    </div>
                    <div className='card-links' >
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/harry-potter-react/"><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/harry-potter-react"><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>

                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>DRINKING API COCKTAILS</p>
                    <img className="card-img" src={proyecto5} alt="captura pantalla de la web"></img>

                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Javascript</p>
                    </div>

                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/buscador-cocteles/"><img src={iconWeb} className="icon-web" alt="enlace la web" /></a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/buscador-cocteles"><img src={iconGit} className="icon-git" alt="enlace a git" /></a>
                    </div>
                </li>
                <li className={`projects-li ${props.theme}`}>
                    <p className='title-project'>MY FIRST LAYOUT</p>
                    <img className="card-img" src={proyecto1} alt="captura pantalla de la web"></img>
                    <div className='project-techologies'>
                        <p className='tech'>HTML5</p>
                        <p className='tech' >CSS3</p>
                        <p className='tech'>Sass</p>
                    </div>
                    <div className='card-links'>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://alexandracampo.github.io/my-first-layout-web/"><img src={iconWeb} className="icon-web" alt="enlace la web" />
                        </a>
                        <a className='links-projects' target="_blank" rel="noopener noreferrer" href="https://github.com/alexandracampo/my-first-layout-web"><img src={iconGit} className="icon-git" alt="enlace a git" />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Projects; 