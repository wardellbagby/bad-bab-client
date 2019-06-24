import {useDispatch} from "react-redux";
import {cancelPlayerUpdate, createPlayer} from "../../actions";
import React, {useState} from "react";
import {IonCardHeader, IonCardTitle, IonInput, IonItem, IonItemDivider, IonLabel} from "@ionic/react";
import PasswordSelector from "../../containers/PasswordSelector";
import {ModalFooter} from "../Modal";

export default function PlayerAddModal() {
    const dispatch = useDispatch();

    const [password, updatePassword] = useState("");
    const [name, updateName] = useState("");

    const handleCancel = () => dispatch(cancelPlayerUpdate());
    const handlePlayerCreate = () => dispatch(createPlayer({name, password}));
    const handleNameChange = (e) => updateName(e.target.value);

    return (
        <>
            <IonCardHeader className="mb-2">
                <IonCardTitle>Create new Player</IonCardTitle>
            </IonCardHeader>

            <IonItem lines="none">
                <span className="mr-2 text-muted">Name:</span>
                <IonInput placeholder="Enter Name"
                          value={name}
                          onIonChange={handleNameChange}/>
            </IonItem>

            <PasswordSelector selectedPassword={password}
                              updatePassword={updatePassword}/>

            <IonItemDivider/>

            <IonItem lines="full">
                <IonLabel><span className="text-muted">Is this correct?</span> {name} : {password}
                </IonLabel>
            </IonItem>


            <ModalFooter
                onCancel={handleCancel}
                onSuccess={handlePlayerCreate}/>
        </>
    );

}