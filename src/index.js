/* 
Antes era así, pero modificamos este fichero para gestionar las rutas con React Router DOM

Fichero src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */



// Le decimos al proyecto de React que queremos gestionar las rutas con React Router DOM:
// Fichero src/index.js (código nuevo)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { HashRouter } from 'react-router-dom'; //indicamos que vamos a usar las rutas con Browser

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);


