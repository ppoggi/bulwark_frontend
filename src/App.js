import React from 'react';
import logo from './bulwark_logo.png';
import './App.css';
import Pixi from './pixi/index.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} style={{width: 750}} className="logo" alt="logo" />
      </header>
        <div>
            <Pixi/>
        </div>
    </div>
  );
}

export default App;
