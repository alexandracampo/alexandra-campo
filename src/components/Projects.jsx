import '../styles/Projects.scss';

function Projects(props) {
    return (
        <div className={`projects ${props.theme}`}>
            <h1 className='projects__title'>
                {"/Proyectos"}
            </h1>
            <ul className="projects__list">
                <li className="projects__list--card"></li>
                <li className="projects__list--card"></li>
                <li className="projects__list--card"></li>
                <li className="projects__list--card"></li>
                <li className="projects__list--card"></li>
            </ul>
        </div>
    );
};

export default Projects; 