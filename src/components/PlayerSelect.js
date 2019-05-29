import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectPlayer} from "../actions";
import _ from 'lodash';

export default function PlayerSelect({player}) {
    const selectedPlayers = useSelector(state => state.selected.players)
    const dispatch = useDispatch();

    const handleSelectPlayer = () => dispatch(selectPlayer(player));

    const btnStyle = _.has(selectedPlayers, player._id) ? "btn-secondary" : "btn-outline-secondary";

    return (
        <button
            type="button"
            value={player._id}
            onClick={handleSelectPlayer}
            className={`mr-1 mb-1 btn ${btnStyle}`}
        >
            {player.name}
        </button>
    )
}