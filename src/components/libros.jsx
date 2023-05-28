import React from 'react';
import './App2.css';



function Libros() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="left-section">
        </div>
        <div className="right-section">
          <span className="menu-option">Inicio</span>
          <span className="menu-option">Login</span>
          <button className="register-button">Registrar</button>
        </div>
      </div>
      <div className="content-container">
        <div className="content" style={{ textAlign: 'center' }}>

        <h1 style={{ marginTop: '20px' }}>Formulario de Libros</h1>
          <div className="search-bar">
            <div className="search-input">
              <input type="text" placeholder="Buscar" className="textbox" style={{ width: '400px' }} />
              <button className="search-button" style={{ fontSize: '20px', padding: '8px' }}>
                <i className="fa fa-search" /> Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>© Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Libros;
