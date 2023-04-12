import '../styles/SectionOne.scss';
import ring1 from '../images/ring2.png';
import ring4 from '../images/ring4.png';
import ring5 from '../images/ring5.png';

function SectionOne() {
    return (
        <div className="section-one">
            <div className='box-rings'>
                <img src={ring1} alt='Anillo azul de carga' className='ring'></img>
                <img src={ring4} alt='Anillo rosa de carga' className='ring'></img>
                <img src={ring5} alt='Anillo morado de carga' className='ring'></img>
            </div>
            <div className='box-text'>
                <p className='tech'>Front</p>
                <p className='tech'>Back</p>
                <p className='tech'>Herramientas</p>
            </div>

        </div>
    );
};

export default SectionOne; 