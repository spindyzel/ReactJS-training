import React from 'react';
import logo from './logo.svg';
import './App.css';

function Panggil(props){
  return <h1>Hai {props.nama}</h1>
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.nama}
        </a>
      </header>
    </div>
  );
}

export default App;