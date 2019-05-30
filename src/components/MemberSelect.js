import React from 'react';
import {useDispatch} from 'react-redux';
import {selectMember} from "../actions";

export default function MemberSelect({member, highlighted}) {
    const dispatch = useDispatch();

    const handleSelectMember = () => {
        if (!highlighted) {
            dispatch(selectMember(member));
        }
    };

    const btnStyle = highlighted ? "btn-secondary" : "btn-outline-secondary";

    let displayName = member.isNew ? `Create password for: "${member.name}"` : member.name;

    return (
        <button
            type="button"
            value={member._id}
            onClick={handleSelectMember}
            className={`mr-1 mb-1 btn ${btnStyle}`}
        >
            {displayName}
        </button>
    )
}