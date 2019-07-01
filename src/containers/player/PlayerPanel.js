import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestPlayers} from "../../actions";
import PlayerSlider from "../../components/player/PlayerSlider";

import {IonLabel, IonList, IonListHeader} from '@ionic/react';
import PlayerEditModal from "../../components/player/PlayerEditModal";
import PlayerCreateModal from "../../components/player/PlayerCreateModal";
import Refresher from "../../components/Refresher";

export {PlayerPanelFooter} from "../../components/player/PlayerPanelFooter";


export default function PlayerPanel() {
    const [reservedPlayers, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const dispatch = useDispatch();

    function updateScreenInformation() {
        return dispatch(requestPlayers());
    }

    useEffect(() => {
        updateScreenInformation()
    }, []);

    return (
        <>
            <Refresher updateScreenInfoCallBack={updateScreenInformation}/>

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

            <PlayerEditModal/>
            <PlayerCreateModal/>
        </>
    );
}
