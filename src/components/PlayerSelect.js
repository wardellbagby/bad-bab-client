import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPlayer} from "../actions";
import _ from 'lodash';
import {IonItem, IonLabel} from '@ionic/react';

export default function PlayerSelect({player}) {
    const selectedPlayers = useSelector(state => state.selected.players)
    const dispatch = useDispatch();

    const handleSelectPlayer = () => dispatch(selectPlayer(player));

    const selectedColor = _.has(selectedPlayers, player._id) ? "success" : "dark";

    return (
        <IonItem
            value={player._id}
            onClick={handleSelectPlayer}
        >
            <IonLabel color={selectedColor}>{player.name}</IonLabel>
            <span slot="end" className="text-muted">{player.password}</span>
        </IonItem>
    )
}