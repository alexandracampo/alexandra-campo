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

function Technologies(props) {


    return (
        <div id="technologiesId" className={`technologies ${props.theme}`}>

            <h2 className='title-tech'>/Herramientas</h2>

            <ul className='icons-list'>
                <li ><img className='icon' src={html} alt="icono html " /></li>
                <li ><img className='icon' src={css} alt="icono css " /></li>
                <li ><img className='icon' src={sass} alt="icono sass " /></li>
                <li ><img className='icon' src={javascript} alt="icono javascript " /></li>
                <li ><img className='icon' src={react} alt="icono react " /></li>
                <li ><img className='icon' src={mysql} alt="icono mysql " /></li>
                <li ><img className='icon' src={node} alt="icono node " /></li>
                <li ><img className='icon' src={npm} alt="icono npm " /></li>
                <li ><img className='icon' src={express} alt="icono express " /></li>
                <li ><img className='icon' src={mongo} alt="icono mongo " /></li>
                <li ><img className='icon' src={git} alt="icono git " /></li>
                <li ><img className='icon' src={github} alt="icono github " /></li>
                <li ><img className='icon' src={vsc} alt="icono vsc " /></li>
                <li ><img className='icon' src={slack} alt="icono slack " /></li>
                <li ><img className='icon' src={scrum} alt="icono scrum " /></li>

            </ul>
        </div>
    );
};

export default Technologies;