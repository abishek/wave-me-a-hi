import React from 'react';
import './App.css';

function App() {
  function waveHi() {
    console.log("👋");
  }
  return (
    <div className='App'>
      <p>Wave me a hi!</p>
      <button className="wave-btn" onClick={waveHi}>Hi <span role="img" aria-label="hi">👋</span></button>
    </div>
  );
}

export default App;
