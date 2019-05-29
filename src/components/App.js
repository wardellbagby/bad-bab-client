import React from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';
import MemberList from '../containers/MemberList';
import PlayerSelector from '../containers/PlayerSelector';
import SelectedPlayerList from '../containers/SelectedPlayerList';
import Courts from "../containers/Courts";

function App() {
  return (
    <div className="App">
        <SelectedPlayerList />
        <PlayerSelector />
        <Courts />
    </div>
  );
}

export default App;
