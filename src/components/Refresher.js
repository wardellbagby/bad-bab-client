import React from 'react';
import {IonRefresher, IonRefresherContent} from "@ionic/react";

export default function Refresher({ updateScreenInfoCallBack }) {
    const handleRefresh = (event) => {
        updateScreenInfoCallBack().then(() => event.detail.complete());
    };

    return (
        <IonRefresher slot="fixed"
                      onIonRefresh={handleRefresh}>
            <IonRefresherContent/>
        </IonRefresher>
    )
}