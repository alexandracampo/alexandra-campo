import '../styles/Projects.scss';
import proyecto1 from '../images/proyecto1.JPG'


function Projects(props) {
    return (
        <div id="projectId" className={`projects ${props.theme}`}>
            <h1 className='projects__title'>
                {"/Proyectos"}
            </h1>
            <ul >
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto1}></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>

                </li>
                <li className="projects__list ">
                    <img className='projects__list--card' src={proyecto1}></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto1}></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto1}></img>
                    <div>
                        <a href=""><img src="" alt="" /></a>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                </li>
                <li className="projects__list">
                    <img className='projects__list--card' src={proyecto1}></img>
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