import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestPlayers} from "../actions";
import PlayerSelect from "../components/PlayerSelect";

import {IonLabel, IonList, IonListHeader} from '@ionic/react';

export default function PlayerSelector() {
    const [_, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
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
                <PlayerSelect player={player} key={player._id}/>
            ))}
        </IonList>
    );
}
