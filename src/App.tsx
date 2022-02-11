import React, { HTMLFactory } from 'react';
import logo from './logo.svg';
import Graph  from './graph/Graph';
import EqSidebar from './sidebar/EqSidebar';
import './App.css';

function App() {
  return <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <main className="flex-container">
        <EqSidebar />
        <div id="eq-graph-border" onDrag={() => {}} draggable="true"></div>
        <Graph />
      </main>
    </div>
  </>;
}

export default App;
