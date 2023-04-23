import '../styles/Landing.scss';
import { Link } from 'react-router-dom'

function Landing() {


    return (
        <div className="landing">

            <section className="landing__name">
                {'hola soy el landing'}
            </section>
            <Link to="/Principal">{'soy el link del landing'}</Link>
        </div>
    );
};

export default Landing; 