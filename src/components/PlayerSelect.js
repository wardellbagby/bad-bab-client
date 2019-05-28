import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlayer, deletePlayer } from "../actions";
import _ from 'lodash';

export default function PlayerSelect({ player }) {
    const selectedPlayers = useSelector(state => state.selected.players)
    const dispatch = useDispatch();

    const handleSelectPlayer = () => dispatch(selectPlayer(player));

    const selected = _.has(selectedPlayers, player._id);

    return (
        <span>
            <button
                type="button"
                value={player._id}
                onClick={handleSelectPlayer}
                className={"mr-1 shadow-sm btn btn-" + (selected ? "" : "outline-") + "secondary"}
            >
                {player.playerName}
            </button>
        </span>
    )
}