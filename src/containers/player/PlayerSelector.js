import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deselectPlayers, requestPlayers, selectCourtRandoms} from "../../actions";
import PlayerSelect from "../../components/player/PlayerSelect";

import {IonButton, IonLabel, IonList, IonListHeader} from '@ionic/react';

export default function PlayerSelector() {
    const [_, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const useCourtRandoms = useSelector(state => state.selected.useCourtRandoms);
    const dispatch = useDispatch();

    const handleRansomsChecked = () => {
        const futureUsingRandoms = !useCourtRandoms;
        if (futureUsingRandoms) {
            dispatch(deselectPlayers());
        }

        dispatch(selectCourtRandoms());
    };

    useEffect(() => {
        dispatch(requestPlayers());
    }, []);

    const randomsText = useCourtRandoms ? "Randoms" : <strike>Randoms</strike>;

    return (
        <IonList>
            <IonListHeader lines="none">
                Use Randoms?
                <IonButton checked={useCourtRandoms}
                           onclick={handleRansomsChecked}
                           size="small"
                           children={randomsText}/>
            </IonListHeader>

            <IonListHeader>
                <IonLabel>Available players</IonLabel>
            </IonListHeader>

            {availablePlayers.map(player => (
                <PlayerSelect player={player} key={player._id}/>
            ))}
        </IonList>
    );
}
