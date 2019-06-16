import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {playerFilterChanged, requestPlayers} from "../actions";
import PlayerSelect from "../components/PlayerSelect";

import {IonFooter, IonList, IonSearchbar, IonToolbar} from '@ionic/react';
import PlayerPasswordForm from "../components/PlayerPasswordForm";

export default function PlayerSelector() {
    const players = useSelector(state => state.people.filteredPlayers || state.people.players);
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
            {players.map(player => (
                <PlayerSelect player={player} key={player._id}/>
            ))}
        </IonList>
    );
}

export function PlayerSelectorFooter() {
    const dispatch = useDispatch();
    const playerToUpdate = useSelector(state => state.selected.playerToUpdate);

    if (playerToUpdate) {
        return <span/>;
    }

    const updateFilter = (event) => dispatch(playerFilterChanged(event.target.value));

    return (
        <IonFooter>
            <IonToolbar>
                <IonSearchbar style={{'--placeholder-color': 'red'}}
                              placeholder="Filter or add Player"
                              onIonInput={updateFilter}/>
            </IonToolbar>
        </IonFooter>
    );
}
