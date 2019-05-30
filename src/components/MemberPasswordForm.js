import React from 'react';
import {useDispatch} from 'react-redux';
import {cancelCreatingMember} from "../actions";
import PasswordSelector from "../containers/PasswordSelector";

export default function MemberPasswordForm({member}) {
    const dispatch = useDispatch();

    const handleCancel = () => dispatch(cancelCreatingMember());

    return (
        <div className="card bg-secondary">
            <h5 className="card-header mb-0 d-flex">
                {member.name}
            </h5>

            <div className="card-body">
                <PasswordSelector/>
                <div className="d-flex flex-row-reverse">
                    <button type="button" className="btn btn-danger mt-1"
                            onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}