import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";


function App() {
  return (
      <div className="App">
          <Routes>
              <Route exact path="/" element={ <Login/> }/>
              <Route exact path="/home" element={ <Home/> }/>
          </Routes>
      </div>
  );
}

export default App;
