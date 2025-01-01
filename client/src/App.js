import React, { useState } from 'react';
import './App.css';

import Counter from './incDecCounter';
import BgChanger from './BgChanger';
import PasswordGenerator from './PasswordGenerator';

function App() {
  const [activeComponent, setActiveComponent] = useState('counter'); 

  return (
    <div className="App">
      <nav className="navbar">
        <button 
          className={`nav-button ${activeComponent === 'counter' ? 'active' : ''}`} 
          onClick={() => setActiveComponent('counter')}
        >
          Counter
        </button>
        <button 
          className={`nav-button ${activeComponent === 'bgChanger' ? 'active' : ''}`} 
          onClick={() => setActiveComponent('bgChanger')}
        >
          Background Changer
        </button>
        <button 
          className={`nav-button ${activeComponent === 'passwordGenerator' ? 'active' : ''}`} 
          onClick={() => setActiveComponent('passwordGenerator')}
        >
          Password Generator
        </button>
      </nav>
      <br />
      {activeComponent === 'counter' && <Counter />}
      {activeComponent === 'bgChanger' && <BgChanger />}
      {activeComponent === 'passwordGenerator' && <PasswordGenerator />}
    </div>
  );
}

export default App;
