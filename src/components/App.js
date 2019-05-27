import React from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';
import MemberList from '../containers/MemberList';
import PlayerSelector from '../containers/PlayerSelector';
import SelectedPlayerList from '../containers/SelectedPlayerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and then cry deeply.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <MemberList /> */}
        <SelectedPlayerList />
        <PlayerSelector />
      </header>
    </div>
  );
}

export default App;
