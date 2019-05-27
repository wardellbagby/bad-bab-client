import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestMembers } from "../actions";
import PlayerSelect from "../components/PlayerSelect";

export default function PlayerSelector() {
  const players = useSelector(state => state.people.members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMembers());
    console.log("useEffect PlayerSelector: " + players)
    
  }, []);

  return (
    <div className="playerSelector">
      {players.map(player => (
        <PlayerSelect player={player} />
      ))}
    </div>
  );
}
