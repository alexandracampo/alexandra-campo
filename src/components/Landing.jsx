import '../styles/Landing.scss';
import { Link } from 'react-router-dom'
import welcomeImg from '../images/welcome2.png'

function Landing() {


    return (
        <div className="landing">

            <img className="landing__img" src={welcomeImg} />
            <button className="landing__button">
                <Link to="/Principal">{'This is the way'}</Link>
            </button>

        </div>
    );
};

export default Landing; 