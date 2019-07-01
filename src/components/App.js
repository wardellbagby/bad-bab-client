/* eslint-disable default-case */
import React, {useState} from 'react';
import '../style/App.css';
import MemberPane, {MemberSelectorFooter} from '../containers/member/MemberPanel';
import PlayerPanel, {PlayerPanelFooter} from '../containers/player/PlayerPanel';
import CourtPanel from '../containers/court/CourtPanel';
import {
    IonApp,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonToolbar
} from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import Toast from "./Toast";

const PLAYER_PANE = "PLAYER_PANE";
const COURT_PANE = "COURT_PANE";
const MEMBER_PANE = "MEMBER_PANE";

export default function App() {
    const [selectedPane, setSelectedPane] = useState(COURT_PANE);

    const handlePanelSelection = (e) => setSelectedPane(e.detail.value);

    let customFooter = null;
    let pane = null;

    let floatingActionButton = (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton data-toggle="modal" data-target="#pageModal">
                <IonIcon name="add"/>
            </IonFabButton>
        </IonFab>
    );

    switch (selectedPane) {
        case PLAYER_PANE:
            pane = <PlayerPanel/>;
            customFooter = <PlayerPanelFooter/>;
            break;

        case COURT_PANE:
            pane = <CourtPanel/>;
            break;

        case MEMBER_PANE:
            customFooter = <MemberSelectorFooter/>;
            pane = <MemberPane/>;
            floatingActionButton = null;
    }

    const header = (
        <IonHeader>
            <IonToolbar class="header">
                <IonSegment onIonChange={handlePanelSelection} value={selectedPane}>
                    <IonSegmentButton value={COURT_PANE}>
                        <IonLabel>Courts</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value={PLAYER_PANE}>
                        <IonLabel>Players</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value={MEMBER_PANE}>
                        <IonLabel>Members</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
        </IonHeader>
    );

    const body = (
        <IonContent fullScreen>
            {pane}

            {floatingActionButton}

            <Toast/>
        </IonContent>
    );

    return (
        <IonApp>
            {header}

            {body}

            {customFooter}
        </IonApp>
    );
}
