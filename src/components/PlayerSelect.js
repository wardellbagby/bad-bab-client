import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlayer, deletePlayer } from "../actions";

export default function PlayerSelect({ player }) {
    const dispatch = useDispatch();

    const handleSelectPlayer = () => {
        dispatch(selectPlayer(player));
        dispatch(deletePlayer(player));
    }

    console.log(player.playerName + " : " + player.checked)

    return (
        <span>
            <input type="checkbox" name="playerSelect" value={player.id} onChange={handleSelectPlayer} checked={player.checked} />
            {player.playerName}
            <br />
        </span>
    )
}