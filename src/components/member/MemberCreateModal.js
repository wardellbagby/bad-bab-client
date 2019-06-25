import React from 'react';
import {useSelector} from 'react-redux';
import MemberPasswordForm from "./MemberPasswordForm";
import {Modal, ModalBody} from '../../components/Modal';

export function MemberCreateModal() {
    const memberToCreate = useSelector(state => state.selected.memberToCreate);
    let body = null;

    if (memberToCreate) {
        body = (
            <MemberPasswordForm member={memberToCreate}/>
        );
    }

    return (
        <Modal>
            <ModalBody>
                {body}
            </ModalBody>
        </Modal>
    );
}
