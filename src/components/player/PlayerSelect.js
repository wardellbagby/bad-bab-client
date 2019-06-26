import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPlayer} from "../../actions";
import _ from 'lodash';
import {IonCheckbox, IonItem, IonLabel} from '@ionic/react';

export default function PlayerSelect({player, ignoreEdit}) {
    const selectedPlayers = useSelector(state => state.selected.players);
    const dispatch = useDispatch();

    const isSelected = _.has(selectedPlayers, player._id);

    const handleSelectPlayer = () => dispatch(selectPlayer(player));

    const selectedColor = isSelected ? "success" : "dark";

    return (
        <IonItem onClick={handleSelectPlayer}>
            <IonCheckbox className="mr-1" checked={isSelected}/>
            <IonLabel color={selectedColor}>{player.name}</IonLabel>
            <span slot="end" className="text-muted">{player.password}</span>
        </IonItem>
    )
}