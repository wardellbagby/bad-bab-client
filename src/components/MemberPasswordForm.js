import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelCreatingMember} from "../actions";
import MemberSelect from "../components/MemberSelect";

export default function MemberPasswordForm({member}) {
    const dispatch = useDispatch();

    let displayName = member.isNew ? `Create password for: "${member.name}"` : member.name;

    const handleCancel = () => dispatch(cancelCreatingMember());

    return (
        <div>
            <MemberSelect member={member} key={member._id} selected={true}/>
            <button type="button" className="btn btn-danger" onClick={handleCancel}>Cancel</button>
        </div>
    )
}