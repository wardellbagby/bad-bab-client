import React, {useState} from 'react';
import _ from 'lodash';
import {IonCard, IonCardSubtitle, IonItem} from "@ionic/react";

export default function Court({court}) {
    const [paneIsVisible, setPaneVisibility] = useState(true);

    const updatePaneVisibility = () => setPaneVisibility(!paneIsVisible);

    const caretDirection = paneIsVisible ? "down" : "left";

    const collapseClass = paneIsVisible ? "collapse show" : "collapse";

    return (
        <IonCard>
            <IonItem onClick={updatePaneVisibility}>
                <IonCardSubtitle>Court {court.id}</IonCardSubtitle>
                <i className={`fas fa-caret-${caretDirection}`} slot="end"/>
            </IonItem>

            <div className={collapseClass}>
                <div className="card-body py-3">
                    {court.reservations.map(reservation => (
                        <div>
                            {reservation.randoms ? "Random people" : _.join(reservation.players, " ")}
                        </div>
                    ))}
                </div>
            </div>
        </IonCard>
    )
}

