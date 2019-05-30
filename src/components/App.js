import React from 'react';
import '../style/App.css';
import MemberSelector from '../containers/MemberSelector';
import PlayerSelector from '../containers/PlayerSelector';
import SelectedPlayerList from '../containers/SelectedPlayerList';
import Courts from "../containers/Courts";

function App() {
  return (
    <div className="App">
        <SelectedPlayerList />
        <MemberSelector />
        <PlayerSelector />
        <Courts />
    </div>
  );
}

export default App;
