import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestPlayers, playerFilterChanged} from "../actions";
import PlayerSelect from "../components/PlayerSelect";
import '../style/PlayerSelector.css';

export default function PlayerSelector() {
    const players = useSelector(state => state.people.filteredPlayers || state.people.players);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPlayers());
    }, []);

    const updateFilter = (event) => dispatch(playerFilterChanged(event.target.value));

    return (
        <div className="player-selector bg-dark card btn-group border-secondary">
            <div className="card-header bg-secondary text-light">
                Players
            </div>

            <div className="card-body">
                {players.map(player => (
                    <PlayerSelect player={player} key={player._id}/>
                ))}

                <input type="text"
                       className="form-control bg-dark text-light mt-2"
                       id="playerFilterText"
                       onChange={updateFilter}
                       placeholder="Player filter"/>
            </div>
        </div>
    );
}
