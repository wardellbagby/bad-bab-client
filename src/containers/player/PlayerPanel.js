import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {playerFilterChanged, requestPlayers} from "../../actions";
import PlayerSlider from "../../components/player/PlayerSlider";
import {Modal, ModalBody} from '../../components/Modal';

import {IonFooter, IonLabel, IonList, IonListHeader, IonSearchbar, IonToolbar} from '@ionic/react';
import PlayerEditModal from "../../components/player/PlayerEditModal";
import PlayerCreateModal from "../../components/player/PlayerCreateModal";

export default function PlayerPanel() {
    const [reservedPlayers, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPlayers());
    }, []);

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>Available players</IonLabel>
            </IonListHeader>
            {availablePlayers.map(player => (
                <PlayerSlider player={player} key={player._id}/>
            ))}

            <IonListHeader>
                <IonLabel>Players in use</IonLabel>
            </IonListHeader>
            {reservedPlayers.map(player => (
                <PlayerSlider player={player} key={player._id}/>
            ))}
        </IonList>
    );
}

export function PlayerSelectorFooter() {
    const dispatch = useDispatch();
    const playerNameFilter = useSelector(state => state.selected.playerNameFilter);

    const updateFilter = (event) => dispatch(playerFilterChanged(event.target.value));

    return (
        <IonFooter>
            <IonToolbar>
                <IonSearchbar style={{'--placeholder-color': 'red'}}
                              placeholder="Filter or add Player"
                              value={playerNameFilter}
                              onIonInput={updateFilter}/>
            </IonToolbar>
        </IonFooter>
    );
}

export function PlayerAddModal() {

    const playerToUpdate = useSelector(state => state.selected.playerToUpdate);
    let body = null;

    if (playerToUpdate) {
        body = <PlayerEditModal player={playerToUpdate}/>;

    } else {
        body = <PlayerCreateModal/>;
    }

    return (
        <Modal>
            <ModalBody>
                {body}
            </ModalBody>
        </Modal>
    );
}
