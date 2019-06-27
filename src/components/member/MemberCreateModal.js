import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal, ModalBody, ModalFooter} from '../../components/Modal';
import {IonCardHeader, IonCardTitle} from "@ionic/react";
import {cancelCreatingMember, createPlayer} from "../../actions";
import PasswordSelector from "../../containers/PasswordSelector";

export function MemberCreateModal() {
    const dispatch = useDispatch();

    const member = useSelector(state => state.selected.memberToCreate);
    const [memberPassword, updateMemberPassword] = useState("");

    const handleCancel = () => dispatch(cancelCreatingMember());
    const handlePlayerCreate = () => dispatch(createPlayer({ name: member.name, password: memberPassword }));

    return (
        <Modal>
            <ModalBody>
                <IonCardHeader>
                    <IonCardTitle>{member.name}</IonCardTitle>
                </IonCardHeader>


                <PasswordSelector selectedPassword={memberPassword}
                                  updatePassword={updateMemberPassword}/>

                <ModalFooter
                    onCancel={handleCancel}
                    onSuccess={handlePlayerCreate}/>
            </ModalBody>
        </Modal>
    );
}
