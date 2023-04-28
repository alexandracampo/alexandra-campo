import Header from './Header';
import Introduction from './Introduction';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Technologies from './Technologies';
import '../styles/Principal.scss'
import { useState, useEffect } from 'react';


function Principal() {

    const [theme, setTheme] = useState('');

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => {
        document.body.className = theme
    },
        [theme]);




    return (
        <div>

            <Header
                prop1={toggleTheme}
                theme={`${theme}`}
            />
            <Introduction theme={`${theme}`} />
            <Projects theme={`${theme}`} />
            <Technologies theme={`${theme}`} />
            <Contact theme={`${theme}`} />
            <Footer theme={`${theme}`} />
        </div>
    );
};

export default Principal;