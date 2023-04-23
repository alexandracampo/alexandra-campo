import Header from './Header';
import Introduction from './Introduction';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/Principal.scss'


function Principal() {


    return (


        <>
            <Header />
            <Introduction />
            <Projects></Projects>
            <Contact></Contact>
            <Footer />

        </>


    );
};

export default Principal;