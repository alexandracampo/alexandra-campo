import '../styles/Projects.scss';
import proyecto1 from '../images/proyecto1.JPG'
import proyecto2 from '../images/proyecto2.JPG'
import proyecto3 from '../images/proyecto3.JPG'
import proyecto4 from '../images/proyecto4.JPG'
import proyecto5 from '../images/proyecto5.JPG'



function Projects(props) {
    return (
        <div id="projectId" className={`projects ${props.theme}`}>
            <h1 className='projects__title'>
                {"/Proyectos"}
            </h1>
            <ul className='box-projects' >
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto1} alt="captura pantalla de la web"></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>

                </li>
                <li className="projects__list ">
                    <img className='projects__list--card' src={proyecto2} alt="captura pantalla de la web"></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto3} alt="captura pantalla de la web"></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto4} alt="captura pantalla de la web"></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto5} alt="captura pantalla de la web"></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Projects; 