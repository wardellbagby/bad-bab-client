import {useDispatch, useSelector} from "react-redux";
import {playerFilterChanged} from "../../actions";
import {IonFooter, IonSearchbar, IonToolbar} from "@ionic/react";
import React from "react";


export function PlayerPanelFooter() {
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