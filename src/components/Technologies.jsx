import '../styles/Technologies.scss';
import html from '../images/html.png';
import css from '../images/css.png';
import sass from '../images/sass.png';
import javascript from '../images/js.png';
import react from '../images/react.png';
import mysql from '../images/mysql.png';
import node from '../images/node.png';
import npm from '../images/npm.png';
import express from '../images/express.png';
import mongo from '../images/mongo.png';
import git from '../images/git.png';
import github from '../images/github.png';
import vsc from '../images/vsc.png';
import slack from '../images/slack.png';
import scrum from '../images/scrum.png';
import window from '../images/window-img.png';

function Technologies(props) {


    return (
        <div id="technologiesId" className={`technologies ${props.theme}`}>

            <h2 className='title-tech'>Herramientas</h2>

            <p className='tech-text'>Mis proyectos están hechos con <span className='text-color'>HTML, CSS, Javascript (ES6) y React.</span></p>
            <p className='tech-text'><span className='text-color'>Maquetación:</span> HTML5, CSS3, Flexbox, CSS Grid, Sass.</p>
            <p className='tech-text'>Uso de servicios web: <span className='text-color'>APIs de terceros</span>.</p>
            <p className='tech-text'>Control de versiones con <span>Git</span>.</p>
            <p className='tech-text'>Creación de SPAs con React</p>
            <p className='tech-text'><span className='text-color'>Fundamentos básicos</span> sobre construcción de APIs y programación <span className='text-color'>back-end</span>: Aplicaciones con Node JS, Express, MongoDB y SQL.</p>
            <p className='tech-text'><span className='text-color'>Otras herramientas</span>: Slack, GitHub, VSCode, Terminal Ubuntu, Zeplin.</p>

            <div className='container-circle'>
                <div className='circle'> </div>
            </div>

            <ul className='icons-list'>
                <li className='li-icon' ><img className='icon' src={html} alt="icono html " /></li>
                <li className='li-icon' ><img className='icon' src={css} alt="icono css " /></li>
                <li className='li-icon' ><img className='icon' src={sass} alt="icono sass " /></li>
                <li className='li-icon' ><img className='icon' src={javascript} alt="icono javascript " /></li>
                <li className='li-icon' ><img className='icon' src={react} alt="icono react " /></li>
                <li className='li-icon' ><img className='icon' src={mysql} alt="icono mysql " /></li>
                <li className='li-icon' ><img className='icon' src={node} alt="icono node " /></li>
                <li className='li-icon' ><img className='icon' src={npm} alt="icono npm " /></li>
                <li className='li-icon' ><img className='icon' src={express} alt="icono express " /></li>
                <li className='li-icon' ><img className='icon' src={mongo} alt="icono mongo " /></li>
                <li className='li-icon' ><img className='icon' src={git} alt="icono git " /></li>
                <li className='li-icon' ><img className='icon' src={github} alt="icono github " /></li>
                <li className='li-icon' ><img className='icon' src={vsc} alt="icono vsc " /></li>
                <li className='li-icon' ><img className='icon' src={slack} alt="icono slack " /></li>
                <li className='li-icon' ><img className='icon' src={scrum} alt="icono scrum " /></li>
            </ul>


        </div>
    );
};

export default Technologies;