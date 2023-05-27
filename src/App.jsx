import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Registrar from './components/Registrar';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="top-bar">
          <div className="left-section">
            <span className="login-text">Login</span>
          </div>
          <div className="right-section">
            <span className="menu-option">Inicio</span>
            <span className="menu-option">Login</span>
          </div>
        </div>
        <div className="content">
          <h2>LOGIN</h2>
          <input type="text" placeholder="Ingrese su email" className="textbox" />
          <input type="password" placeholder="Contraseña" className="textbox" />
          <button className="register-button">Acceder</button>
          <Link to="./components/registrar" className="login-button">
            ¿No tiene cuenta?
          </Link>

        </div>
        <footer className="footer">
          <p>© Mi Sitio Web. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}





export default App;
