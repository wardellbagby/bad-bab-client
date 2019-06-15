import React, {useState} from 'react';
import '../style/App.css';
import MemberSelector from '../containers/MemberSelector';
import PlayerSelector, {PlayerSelectorFooter} from '../containers/PlayerSelector';
import Courts from "../containers/Courts";
import {IonApp, IonContent, IonHeader, IonLabel, IonSegment, IonSegmentButton, IonToolbar} from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const PLAYER_PANE = "PLAYER_PANE";
const COURT_PANE = "COURT_PANE";
const MEMBER_PANE = "MEMBER_PANE";

export default function App() {
    const [selectedPane, setSelectedPane] = useState(PLAYER_PANE);

    let customFooter = null;
    const body = (() => {
        switch (selectedPane) {
            case PLAYER_PANE:
                customFooter = <PlayerSelectorFooter/>;
                return <PlayerSelector/>;

            case COURT_PANE:
                return <Courts/>;

            case MEMBER_PANE:
                return <MemberSelector/>;
        }
    })();

    const header = (
        <IonHeader>
            <IonToolbar class="header">
                <IonSegment onIonChange={(e) => setSelectedPane(e.detail.value)} value={selectedPane}>
                    <IonSegmentButton value={PLAYER_PANE}>
                        <IonLabel>Players</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value={COURT_PANE}>
                        <IonLabel>Courts</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value={MEMBER_PANE}>
                        <IonLabel>Members</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
        </IonHeader>
    );


    return (
        <IonApp>
            {header}

            <IonContent fullScreen>
                {body}
            </IonContent>

            {customFooter}
        </IonApp>
    );
}
