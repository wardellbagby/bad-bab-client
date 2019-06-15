import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {playerFilterChanged, requestPlayers} from "../actions";
import PlayerSelect from "../components/PlayerSelect";

import {IonFooter, IonList, IonSearchbar, IonToolbar} from '@ionic/react';

export default function PlayerSelector() {
    const players = useSelector(state => state.people.filteredPlayers || state.people.players);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPlayers());
    }, []);

    return (
        <IonList>
            {players.map(player => (
                <PlayerSelect player={player} key={player._id}/>
            ))}
        </IonList>
    );
}

export function PlayerSelectorFooter() {
    const dispatch = useDispatch();

    const updateFilter = (event) => dispatch(playerFilterChanged(event.target.value));

    return (
        <IonFooter>
            <IonToolbar>
                <IonSearchbar style={{'--placeholder-color': 'red'}}
                              placeholder="Player filter"
                              onIonInput={updateFilter}/>
            </IonToolbar>
        </IonFooter>
    );
}
