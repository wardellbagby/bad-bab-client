import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectMember} from "../actions";
import _ from 'lodash';

export default function MemberSelect({member, selected}) {
    const dispatch = useDispatch();

    const handleSelectMember = () => {
        if (!selected) {
            dispatch(selectMember(member));
        }
    };

    const btnStyle = (selected || member.isNew) ? "btn-secondary" : "btn-outline-secondary";

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