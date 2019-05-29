import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestMembers} from "../actions";
import PlayerSelect from "../components/PlayerSelect";
import '../style/PlayerSelector.css';

export default function PlayerSelector() {
    const players = useSelector(state => state.people.members);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestMembers());
        console.log("useEffect PlayerSelector: " + players)

    }, []);

    return (
        <div className="player-selector bg-dark card btn-group">
            <div className="card-header bg-secondary text-light">
                Players
            </div>
            <div className="card-body">
                {players.map(player => (
                    <PlayerSelect player={player} key={player._id}/>
                ))}
            </div>
        </div>
    );
}
