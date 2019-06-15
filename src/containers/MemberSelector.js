import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {memberFilterChanged, requestMembers} from "../actions";
import MemberSelect from "../components/MemberSelect";
import MemberPasswordForm from "../components/MemberPasswordForm";
import {IonCol, IonFooter, IonGrid, IonRow, IonSearchbar, IonToolbar} from "@ionic/react";

export default function MemberSelector() {
    const memberChunks = useSelector(state => state.people.filteredMembers || state.people.chunkedMembers);
    const memberToCreate = useSelector(state => state.selected.memberToCreate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestMembers());
    }, []);

    if (memberToCreate) {
        return <MemberPasswordForm member={memberToCreate}/>;
    }

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
        <IonGrid title="Members">
            {memberChunks.map(createRow)}
        </IonGrid>
    );
}


export function MemberSelectorFooter() {
    const dispatch = useDispatch();

    const updateFilter = (event) => dispatch(memberFilterChanged(event.target.value));

    return (
        <IonFooter>
            <IonToolbar>
                <IonSearchbar style={{'--placeholder-color': 'blue'}}
                              placeholder="Filter or add Member"
                              onIonInput={updateFilter}/>
            </IonToolbar>
        </IonFooter>
    );
}