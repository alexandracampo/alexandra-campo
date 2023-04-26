import '../styles/Landing.scss';
import { Link } from 'react-router-dom'
import imageLanding from '../images/image-mobile.png'

function Landing() {


    return (
        <div className="landing">

            <img className="landing__img" src={imageLanding} />
            <button className="landing__button">
                <Link to="/Principal">{'This is the way'}</Link>
            </button>

        </div>
    );
};

export default Landing; 