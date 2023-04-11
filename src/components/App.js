import '../styles/App.scss';
import './header.js';
import logo from '../images/logo.svg';

function App() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} ></img>
        <ul>
          <li>About me</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
};

export default App;