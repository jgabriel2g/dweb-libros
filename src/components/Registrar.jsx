import React from 'react';
import './App2.css';


function Registrar() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="left-section">
          <span className="login-text">Registro de usuarios</span>
        </div>
        <div className="right-section">
          <span className="menu-option">Inicio</span>
          <span className="menu-option">Login</span>
        </div>
      </div>
      <div className="content">
        <h2>Registro de usuarios</h2>
        <input type="text" placeholder="Ingrese su email" className="textbox" />
        <input type="password" placeholder="Contraseña" className="textbox" />
        <button className="register-button">Registrarse</button>
        <button className="login-button">¿Ya está registrado?</button>
      </div>
      <footer className="footer">
        <p>© Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Registrar;
