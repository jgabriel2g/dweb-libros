import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import CreateBook from "./components/createBook.jsx";



function App() {
  return (
      <div className="App">
          <Routes>
              <Route exact path="/" element={ <Login/> }/>
              <Route exact path="/home" element={ <Home/> }/>
              <Route exact path="/create-book" element={ <CreateBook/> }/>
          </Routes>
      </div>
  );
}

export default App;
