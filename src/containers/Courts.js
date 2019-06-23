import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCourts} from "../actions";
import Court from "../components/Court";
import {IonLabel, IonList, IonListHeader} from "@ionic/react";

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
