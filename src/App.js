import React from 'react';
import Board from './Board'
import Controller from './Controller'
import './App.css';

function App() {
  return (
    <div id="container">
      <h1>Game of Life</h1>
        <Board />
        <Controller/>
      <footer>
        <p>Built by Mercedes and Jing at <a href="http://www.fullstackacademy.com/">Fullstack Academy</a></p>
      </footer>
  </div>
  );
}

export default App;
