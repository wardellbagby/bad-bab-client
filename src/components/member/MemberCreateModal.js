import React from 'react';
import {useSelector} from 'react-redux';
import MemberPasswordForm from "./MemberPasswordForm";
import {Modal, ModalBody} from '../../components/Modal';

export function MemberCreateModal() {
    const memberToCreate = useSelector(state => state.selected.memberToCreate);

    if (memberToCreate === null) {
        return <span/>;
    }

    return (
        <Modal>
            <ModalBody>
                <MemberPasswordForm member={memberToCreate}/>
            </ModalBody>
        </Modal>
    );
}
