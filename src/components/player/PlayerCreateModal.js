import {useDispatch} from "react-redux";
import {createPlayer} from "../../actions";
import React, {useState} from "react";
import {IonCardHeader, IonCardTitle, IonInput, IonItem, IonItemDivider, IonLabel} from "@ionic/react";
import PasswordSelector from "../../containers/PasswordSelector";
import {Modal, ModalBody, ModalFooter} from "../Modal";

export default function PlayerAddModal() {
    const dispatch = useDispatch();

    const [password, updatePassword] = useState("");
    const [name, updateName] = useState("");

    const clearChanges = () => {
        updatePassword("");
        updateName("");
    };
    const handlePlayerCreate = () => {
        dispatch(createPlayer({ name, password }));
        clearChanges();
    };
    const handleNameChange = (e) => updateName(e.target.value);
    const playerCreatable = name && password;

    return (
        <Modal>
            <ModalBody>
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
            </ModalBody>


            <ModalFooter
                onCancel={clearChanges}
                onSuccess={handlePlayerCreate}
                successEnabled={playerCreatable}/>
        </Modal>
    );

}