import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {playerFilterChanged, requestPlayers} from "../actions";
import PlayerSelect from "../components/PlayerSelect";

import {IonFooter, IonLabel, IonList, IonListHeader, IonSearchbar, IonToolbar} from '@ionic/react';
import PlayerPasswordForm from "../components/PlayerPasswordForm";

export default function PlayerSelector() {
    const [reservedPlayers, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const playerToUpdate = useSelector(state => state.selected.playerToUpdate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPlayers());
    }, []);

    if (playerToUpdate) {
        return <PlayerPasswordForm player={playerToUpdate}/>;
    }

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>Available players</IonLabel>
            </IonListHeader>
            {availablePlayers.map(player => (
                <PlayerSelect player={player} key={player._id}/>
            ))}
            <IonListHeader>
                <IonLabel>Players in use</IonLabel>
            </IonListHeader>
            {reservedPlayers.map(player => (
                <PlayerSelect player={player} key={player._id}/>
            ))}
        </IonList>
    );
}

export function PlayerSelectorFooter() {
    const dispatch = useDispatch();
    const playerToUpdate = useSelector(state => state.selected.playerToUpdate);
    const playerNameFilter = useSelector(state => state.selected.playerNameFilter);

    if (playerToUpdate) {
        return <span/>;
    }

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
