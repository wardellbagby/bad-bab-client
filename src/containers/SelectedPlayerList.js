import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function SelectedPlayerList() {
  const players = useSelector(state => state.selected.players);

  return (
    <div className="SelectedPlayerList">
      {players.map(player => (
        <div key={player.slackId}>
          Deleted ({player.playerName} : {player.password} : {player.checked ? "hi" : "ho"})
        </div>
      ))}
    </div>
  );
}
