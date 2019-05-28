import React from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';
import MemberList from '../containers/MemberList';
import PlayerSelector from '../containers/PlayerSelector';
import SelectedPlayerList from '../containers/SelectedPlayerList';

function App() {
  return (
    <div className="App bg-dark flex">
        <SelectedPlayerList />
        <PlayerSelector />
    </div>
  );
}

export default App;
