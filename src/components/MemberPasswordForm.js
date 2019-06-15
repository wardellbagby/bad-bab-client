import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelCreatingMember} from "../actions";
import PasswordSelector from "../containers/PasswordSelector";
import {IonButton, IonCardHeader, IonCardTitle} from "@ionic/react";

export default function MemberPasswordForm({member}) {
    const dispatch = useDispatch();

    const handleCancel = () => dispatch(cancelCreatingMember());

    return (
        <>
            <IonCardHeader>
                <IonCardTitle>{member.name}</IonCardTitle>
            </IonCardHeader>

            <PasswordSelector/>

            <div className="d-flex flex-row-reverse">
                <IonButton color="danger"
                           className="mt-1 mr-2"
                           onClick={handleCancel}
                >
                    Cancel
                </IonButton>
            </div>
        </>
    )
}