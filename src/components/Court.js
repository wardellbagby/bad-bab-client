import React from 'react';
import {IonCard, IonCardSubtitle, IonItem} from "@ionic/react";

export default function Court({court}) {
    return (
        <IonCard>
            <IonItem>
                <IonCardSubtitle>Court {court.courtNumber}</IonCardSubtitle>
            </IonItem>

                <div className="card-body py-3">
                    {court.time}
                </div>
        </IonCard>
    )
}