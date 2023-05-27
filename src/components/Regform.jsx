import React from 'react';
import './App2.css';


function Regform() {
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
      <h2 style={{ textAlign: 'center', fontSize: '45px' }}>Formulario de Registro de usuarios</h2>

      <div className="content">
     
        <h1 style={{ fontSize: '15px' }}>Nombre*</h1>
        <input type="text" placeholder="Ingrese su nombre" className="textbox" required />
        <h1 style={{ fontSize: '15px' }}>Apellido*</h1>
        <input type="text" placeholder="Ingrese su apellido" className="textbox" required/>
        <h1 style={{ fontSize: '15px' }}>Correo electronico*</h1>
        <input type="password" placeholder="Ingrese su correo electronico" className="textbox" required/>
        <h1 style={{ fontSize: '15px' }}>Contraseña*</h1>
        <input type="password" placeholder="Contraseña" className="password" required/>

        <br></br>

        <button className="register-button">Registrar</button>
        
      </div>
      <footer className="footer">
        <p>© Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};


export default Regform;
