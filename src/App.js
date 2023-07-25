import React from 'react';
import './App.css';
import BFS from './BFS/BFS';

function App() {
  return (
    <div className="App">
      <div className="bio-container">
        <header>
          <h1 className="title">Breadth-First Search Algorithm Visualizer</h1>
          <div className="bio">
            <p className="bio-text">
              Hello! My name is Mark. Welcome to this interactive application designed to help you explore the Breadth-First-Search (BFS) algorithm.
            </p>
            <p className="bio-text">Go ahead and start clicking on different areas on the board below to see how BFS efficiently finds the shortest path between nodes.</p>
          </div>
        </header>
      </div> {}
      <BFS />
    </div>
  );
}

export default App;
