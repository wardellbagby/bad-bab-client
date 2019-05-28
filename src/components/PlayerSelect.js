import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlayer, deletePlayer } from "../actions";
import _ from 'lodash';

export default function PlayerSelect({ player }) {
    const selectedPlayers = useSelector(state => state.selected.players)
    const dispatch = useDispatch();

    const handleSelectPlayer = () => dispatch(selectPlayer(player));

    const checked = _.has(selectedPlayers, player._id);

    return (
        <span>
            <input type="checkbox" name="playerSelect" value={player.id} onChange={handleSelectPlayer} checked={checked} />
            {player.playerName}
            <br />
        </span>
    )
}