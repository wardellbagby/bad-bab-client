import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestPlayers } from "../actions";

function MemberList() {
  const players = useSelector(state => state.people.players);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(requestPlayers());
  }, []);

  return (
    <div className="Memberlist">
      {players.map(player => (
        <div key={player.slackId}>
          {player.name} : {player.password}
        </div>
      ))}
    </div>
  );
}

export default MemberList;
