import '../styles/App.scss';
import Header from './Header';
import Introduction from './Introduction';
import Projects from './Projects';
import Contacto from './Contacto';
import Footer from './Footer';



function App() {


  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Projects />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
};

export default App;