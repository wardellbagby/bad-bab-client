import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelCreatingMember} from "../actions";
import PasswordSelector from "../containers/PasswordSelector";
import Card from "../containers/Card";

export default function MemberPasswordForm({member}) {
    const dispatch = useDispatch();

    const handleCancel = () => dispatch(cancelCreatingMember());

    return (
        <Card title="Members" header={`Members > ${member.name}`}>
            <PasswordSelector/>
            <div className="d-flex flex-row-reverse">
                <button type="button" className="btn btn-danger mt-1"
                        onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </Card>
    )
}