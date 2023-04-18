import '../styles/App.scss';
import Header from './Header';
import Introduction from './Introduction';
import Projects from './Projects';
import Tools from './Tools';
import Footer from './Footer';


function App() {

  return (
    <div>
      <Header />
      <main className='main' >
        <Introduction />
        <Projects />
        <Tools />
      </main>
      <Footer />
    </div>
  );
};

export default App;