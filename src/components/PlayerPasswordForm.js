import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {cancelPlayerUpdate, updatePlayer} from "../actions";
import PasswordSelector from "../containers/PasswordSelector";
import {
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonInput,
    IonItem,
    IonItemDivider,
    IonLabel
} from "@ionic/react";

export default function PlayerPasswordForm({player}) {
    const dispatch = useDispatch();
    const [newPlayerPassword, updateNewPlayerPassword] = useState(player.password);
    const [newPlayerName, updateNewPlayerName] = useState(player.name);

    const handleCancel = () => dispatch(cancelPlayerUpdate());
    const handlePlayerUpdate = () => dispatch(updatePlayer(player, newPlayerName, newPlayerPassword));
    const handleNameUpdate = (e) => updateNewPlayerName(e.target.value);

    return (
        <>
            <IonCardHeader className="mb-2">
                <IonCardTitle>{player.name} : {player.password}</IonCardTitle>
            </IonCardHeader>

            <IonItem lines="none">
                <span className="mr-2 text-muted">Name:</span>
                <IonInput placeholder="Enter Input"
                          value={newPlayerName}
                          onIonChange={handleNameUpdate}/>
            </IonItem>

            <PasswordSelector selectedPassword={newPlayerPassword}
                              updatePassword={updateNewPlayerPassword}/>

            <IonItemDivider/>

            <IonItem lines="full">
                <IonLabel><span className="text-muted">Is this correct?</span> {newPlayerName} : {newPlayerPassword}
                </IonLabel>
            </IonItem>

            <IonItem lines="none" className="mt-3">
                <IonButton color="danger"
                           onClick={handleCancel}
                           slot="start"
                           size="medium"
                >
                    <IonIcon slot="icon-only" name="remove-circle"/>
                </IonButton>

                <IonButton color="success"
                           onClick={handlePlayerUpdate}
                           slot="end"
                           size="medium"
                >
                    <IonIcon slot="icon-only" name="checkmark-circle"/>
                </IonButton>
            </IonItem>
        </>
    )
}