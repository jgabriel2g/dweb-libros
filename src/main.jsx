import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Registrar from './components/Registrar';
import Regform from './components/Regform.JSX';
import Libros from './components/libros';

ReactDOM.render(
  <React.StrictMode>
    <Libros />
  </React.StrictMode>,
  document.getElementById('root')
);
