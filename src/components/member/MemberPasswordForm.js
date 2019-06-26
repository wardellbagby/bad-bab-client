import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {cancelCreatingMember, createPlayer} from "../../actions";
import PasswordSelector from "../../containers/PasswordSelector";
import {IonCardHeader, IonCardTitle} from "@ionic/react";
import {ModalFooter} from "../Modal";

export default function MemberPasswordForm({ member }) {
    const dispatch = useDispatch();

    const handleCancel = () => dispatch(cancelCreatingMember());
    const handlePlayerCreate = () => dispatch(createPlayer({ name: member.name, password: memberPassword }));
    const [memberPassword, updateMemberPassword] = useState("");

    return (
        <>
            <IonCardHeader>
                <IonCardTitle>{member.name}</IonCardTitle>
            </IonCardHeader>


            <PasswordSelector selectedPassword={memberPassword}
                              updatePassword={updateMemberPassword}/>

            <ModalFooter
                onCancel={handleCancel}
                onSuccess={handlePlayerCreate}/>
        </>
    )
}
