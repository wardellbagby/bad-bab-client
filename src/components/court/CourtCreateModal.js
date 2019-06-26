import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCourt, deselectPlayers } from "../../actions";
import PlayerSelector from '../../containers/player/PlayerSelector';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../Modal';
import { IonInput, IonItem } from "@ionic/react";

export function CourtCreateModal() {
    const dispatch = useDispatch();

    const [courtNumber, setCourtNumber] = useState(0);
    const [delay, setDelay] = useState(0);
    const names = useSelector(state => state.selected.playerNames);

    const handleCancel = () => dispatch(deselectPlayers());
    const handleCreateCourt = () => {
        dispatch(createCourt({ courtNumber, names, delay }));
        dispatch(deselectPlayers());
    };

    return (
        <Modal>
            <ModalHeader>
                <IonItem lines="none">
                    <span className="mr-2 text-muted">Court Number:</span>
                    <IonInput placeholder="Enter Court Number"
                        type="number"
                        value={courtNumber}
                        onIonChange={(e) => setCourtNumber(e.target.value)} />
                </IonItem>

                <IonItem lines="none">
                    <span className="mr-2 text-muted">Delay:</span>
                    <IonInput placeholder="Enter Delay"
                        type="number"
                        value={delay}
                        onIonChange={(e) => setDelay(e.target.value)} />
                </IonItem>
            </ModalHeader>

            <ModalBody>
                <PlayerSelector />
            </ModalBody>

            <ModalFooter onCancel={handleCancel} onSuccess={handleCreateCourt} />

        </Modal>
    );
}
