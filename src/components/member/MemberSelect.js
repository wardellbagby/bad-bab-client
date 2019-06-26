import React from 'react';
import {useDispatch} from 'react-redux';
import {selectMember} from "../../actions";
import {IonLabel} from "@ionic/react";

export default function MemberSelect({ member, highlighted: isNewMember }) {
    const dispatch = useDispatch();

    const handleSelectMember = () => {
        if (!isNewMember) {
            dispatch(selectMember(member));
        }
    };

    let displayName = member.isNew ? `Create password for: "${member.name}"` : member.name;

    return (
        <IonLabel
            onClick={handleSelectMember}
            data-toggle="modal" data-target="#pageModal"
        >
            {displayName}
        </IonLabel>
    )
}
