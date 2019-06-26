import {useDispatch} from "react-redux";
import {cancelPlayerUpdate, updatePlayer} from "../../actions";
import React, {useState} from "react";
import {IonCardHeader, IonCardTitle, IonInput, IonItem, IonItemDivider, IonLabel} from "@ionic/react";
import PasswordSelector from "../../containers/PasswordSelector";
import {ModalFooter} from "../Modal";

export default function PlayerEditModal({ player }) {
    const dispatch = useDispatch();

    const [newPlayerPassword, updateNewPlayerPassword] = useState(player.password);
    const [newPlayerName, updateNewPlayerName] = useState(player.name);

    const handleCancel = () => dispatch(cancelPlayerUpdate());
    const handlePlayerUpdate = () => dispatch(updatePlayer(player, newPlayerName, newPlayerPassword));
    const handleNameChange = (e) => updateNewPlayerName(e.target.value);

    return (
        <>
            <IonCardHeader className="mb-2">
                <IonCardTitle>{player.name} : {player.password}</IonCardTitle>
            </IonCardHeader>

            <IonItem lines="none">
                <span className="mr-2 text-muted">Name:</span>
                <IonInput placeholder="Enter Name"
                          value={newPlayerName}
                          onIonChange={handleNameChange}/>
            </IonItem>

            <PasswordSelector selectedPassword={newPlayerPassword}
                              updatePassword={updateNewPlayerPassword}/>

            <IonItemDivider/>

            <IonItem lines="full">
                <IonLabel><span className="text-muted">Is this correct?</span> {newPlayerName} : {newPlayerPassword}
                </IonLabel>
            </IonItem>


            <ModalFooter
                onCancel={handleCancel}
                onSuccess={handlePlayerUpdate}/>
        </>
    );

}