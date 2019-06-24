import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deselectPlayers, requestCourts} from "../actions";
import Court from "../components/Court";
import PlayerSelector from '../containers/PlayerSelector';
import {Modal, ModalBody, ModalFooter, ModalHeader} from '../components/Modal';
import {IonButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";

export default function Courts() {
    const {current, upcoming} = useSelector(state => state.courts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCourts());
    }, []);

    const courtsFor = (courtList, isCurrentCourt) => {
        return (
            <>
                {courtList.map(court => (
                    <Court court={court}
                           isCurrentCourt={isCurrentCourt}
                           key={court.id}/>
                ))}
            </>
        );
    };

    return (
        <>
            <IonList>
                <IonListHeader>
                    <IonLabel>Current Courts</IonLabel>
                </IonListHeader>

                {courtsFor(current, true)}

                <IonListHeader>
                    <IonLabel>Upcoming Courts</IonLabel>
                </IonListHeader>

                {courtsFor(upcoming, false)}
            </IonList>
        </>
    );
}

export function CourtAddModal() {
    const dispatch = useDispatch();

    let [courtNumber, setCourtNumber] = useState(0);
    let [delay, setDelay] = useState(0);
    const handleCancel = () => dispatch(deselectPlayers());
    const handleCreateCourt = () => {
        // TODO: send server request
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
                              onIonChange={(e) => setCourtNumber(e.target.value)}/>
                </IonItem>

                <IonItem lines="none">
                    <span className="mr-2 text-muted">Delay:</span>
                    <IonInput placeholder="Enter Delay"
                              type="number"
                              value={delay}
                              onIonChange={(e) => setDelay(e.target.value)}/>
                </IonItem>
            </ModalHeader>

            <ModalBody>
                <PlayerSelector availablePlayersOnly/>
            </ModalBody>

            <ModalFooter>
                <IonItem className="w-100" lines="none">
                    <IonButton color="danger"
                               onClick={handleCancel}
                               slot="start"
                               size="medium"
                               data-dismiss="modal"
                    >
                        <IonIcon slot="icon-only" name="remove-circle"/>
                    </IonButton>

                    <IonButton color="success"
                               onClick={handleCreateCourt}
                               slot="end"
                               data-dismiss="modal"
                               size="medium"
                    >
                        <IonIcon slot="icon-only" name="checkmark-circle"/>
                    </IonButton>
                </IonItem>

            </ModalFooter>

        </Modal>
    );
}