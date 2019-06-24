import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removePlayer, selectPlayer, startUpdatingPlayer} from "../actions";
import _ from 'lodash';
import {IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from '@ionic/react';

export default function PlayerSlider({player}) {
    const selectedPlayers = useSelector(state => state.selected.players);
    const dispatch = useDispatch();

    const handleSelectPlayer = () => dispatch(selectPlayer(player));
    const handleEditButton = () => dispatch(startUpdatingPlayer(player));
    const handleRemoveButton = () => dispatch(removePlayer(player));

    const selectedColor = _.has(selectedPlayers, player._id) ? "success" : "dark";

    return (
        <IonItemSliding value={player._id}>
            <IonItem onClick={handleSelectPlayer}>
                <IonLabel color={selectedColor}>{player.name}</IonLabel>
                <span slot="end" className="text-muted">{player.password}</span>
            </IonItem>

            <IonItemOptions side="end">
                <IonItemOption color="light" onClick={handleEditButton}>
                    <IonIcon slot="icon-only" name="create"/>
                </IonItemOption>

                <IonItemOption color="danger" onClick={handleRemoveButton}>
                    <IonIcon slot="icon-only" name="close"/>
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
}