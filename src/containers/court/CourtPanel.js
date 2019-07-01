import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCourts, requestPlayers} from "../../actions";
import Court from "../../components/court/Court";
import {IonLabel, IonList, IonListHeader} from "@ionic/react";

import {CourtCreateModal} from '../../components/court/CourtCreateModal';
import Refresher from "../../components/Refresher";

const twoMinutesMillis = 120000;

export default function CourtPanel() {
    const { current, upcoming } = useSelector(state => state.courts);
    const dispatch = useDispatch();

    function updateScreenInformation() {
        return dispatch(requestCourts()).then(() => dispatch(requestPlayers()));
    }

    useEffect(() => {
        updateScreenInformation()
    }, []);

    useEffect(() => {
        const interval = setInterval(updateScreenInformation, twoMinutesMillis);
        return () => clearInterval(interval);
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
            <Refresher updateScreenInfoCallBack={updateScreenInformation}/>

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

            <CourtCreateModal/>
        </>
    );
}
