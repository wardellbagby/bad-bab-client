import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

export default function SelectedPlayerList() {
  const players = useSelector(state => _.values(state.selected.players));

  return (
    <div className="SelectedPlayerList">
      {players.map(player => (
        <div key={player.slackId}>
          Selected ({player.playerName} : {player.password})
        </div>
      ))}
    </div>
  );
}
