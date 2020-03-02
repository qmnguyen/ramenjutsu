import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Experience">
      <header className="Experience-header">
        <h1>Choose Your Experience</h1>
      </header>
      <div className="Experience-select-wrapper">
        <div className="Experience-select-region">
          <a
          className="Experience-link"
          href="https://thelastdown.ramenjutsu.com"
          target="_blank"
          rel="noopener noreferrer"
          >
            <h3>The Last Down</h3>
            <p>When just watching football isn't enough. The Last Down will keep you engaged in the game all the way through the last down!</p>
          </a>
        </div>
        <div className="Experience-select-region">
          <a
          className="Experience-link"
          href="https://abvrpg.ramenjutsu.com"
          target="_blank"
          rel="noopener noreferrer"
          >
            <h3>ABV RPG</h3>
            <p>Grow your Hop when you're drinking your favorite hops!</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
