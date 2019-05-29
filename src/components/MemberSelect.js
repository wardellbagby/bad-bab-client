import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectMember} from "../actions";
import _ from 'lodash';

export default function MemberSelect({member}) {
    const selectedMembers = useSelector(state => state.selected.member)
    const dispatch = useDispatch();

    const handleSelectMember = () => dispatch(selectMember(member));

    const btnStyle = _.has(selectedMembers, member._id) ? "btn-secondary" : "btn-outline-secondary";

    return (
        <button
            type="button"
            value={member._id}
            onClick={handleSelectMember}
            className={`mr-1 mb-1 btn ${btnStyle}`}
        >
            {member.name}
        </button>
    )
}