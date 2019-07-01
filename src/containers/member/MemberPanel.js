import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {memberFilterChanged, requestMembers} from "../../actions";
import MemberSelect from "../../components/member/MemberSelect";
import {IonCol, IonFooter, IonGrid, IonRow, IonSearchbar, IonToolbar} from "@ionic/react";

import {MemberCreateModal} from '../../components/member/MemberCreateModal';
import Refresher from "../../components/Refresher";

export default function MemberSelector() {
    const memberChunks = useSelector(state => state.people.filteredMembers || state.people.chunkedMembers);
    const dispatch = useDispatch();

    function updateScreenInformation() {
        return dispatch(requestMembers());
    }

    useEffect(() => {
        updateScreenInformation()
    }, []);

    const createRow = (memberChunk) => (
        <IonRow>
            {memberChunk.map(member => (
                <IonCol>
                    {createColElement(member)}
                </IonCol>
            ))}
        </IonRow>
    );

    function createColElement(member) {
        if (member) {
            return <MemberSelect member={member} key={member._id} isNewMember={member.isNew}/>
        }

        return <span/>
    }

    return (
        <>
            <Refresher updateScreenInfoCallBack={updateScreenInformation}/>

            <IonGrid title="Members">
                {memberChunks.map(createRow)}
            </IonGrid>

            <MemberCreateModal/>
        </>
    );
}


export function MemberSelectorFooter() {
    const dispatch = useDispatch();
    const memberNameFilter = useSelector(state => state.selected.memberNameFilter);

    const updateFilter = (event) => dispatch(memberFilterChanged(event.target.value));

    return (
        <IonFooter>
            <IonToolbar>
                <IonSearchbar style={{ '--placeholder-color': 'blue' }}
                              placeholder="Filter or add Member"
                              value={memberNameFilter}
                              onIonInput={updateFilter}/>
            </IonToolbar>
        </IonFooter>
    );
}
