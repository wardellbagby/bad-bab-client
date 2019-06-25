import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createCourt, deselectPlayers, requestCourts} from "../actions";
import Court from "../components/Court";
import PlayerSelector from '../containers/PlayerSelector';
import {Modal, ModalBody, ModalFooter, ModalHeader} from '../components/Modal';
import {IonInput, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";

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

    const [courtNumber, setCourtNumber] = useState(0);
    const [delay, setDelay] = useState(0);
    const names = useSelector(state => state.selected.playerNames);

    const handleCancel = () => dispatch(deselectPlayers());
    const handleCreateCourt = () => {
        createCourt({courtNumber, names});
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
                <PlayerSelector/>
            </ModalBody>

            <ModalFooter onCancel={handleCancel} onSuccess={handleCreateCourt}/>

        </Modal>
    );
}