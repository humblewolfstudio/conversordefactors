import React from 'react';
import logo from './logo.svg';
import './App.css';
import MOTD from './components/MOTD/MOTD';
import Conversion from './components/Conversion/Conversion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MOTD />
        <Conversion />
      </header>
    </div>
  );
}

export default App;
