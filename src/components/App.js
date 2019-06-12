import React from 'react';
import '../style/App.css';
import MemberSelector from '../containers/MemberSelector';
import PlayerSelector from '../containers/PlayerSelector';
import SelectedPlayerList from '../containers/SelectedPlayerList';
import Courts from "../containers/Courts";

function App() {
  return (
    <div className="App">
        <ul className="nav nav-pills bg-dark mt-1 justify-content-around" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="players-pills" data-toggle="pill" href="#players" role="tab"
                   aria-controls="players" aria-selected="true">Players</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="profile-pills" data-toggle="pill" href="#courts" role="tab"
                   aria-controls="courts" aria-selected="false">Courts</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="contact-pills" data-toggle="pill" href="#members" role="tab"
                   aria-controls="members" aria-selected="false">Members</a>
            </li>
        </ul>

        <div className="tab-content">
            <div className="tab-pane fade show active border border-secondary rounded mt-1 mb-1" id="players" role="tabpanel">
                <SelectedPlayerList/>
                <PlayerSelector/>
            </div>
            <div className="tab-pane fade" id="courts" role="tabpanel">
                <Courts/>
            </div>
            <div className="tab-pane fade" id="members" role="tabpanel">
                <MemberSelector/>
            </div>
        </div>
    </div>
  );
}

export default App;
