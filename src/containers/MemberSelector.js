import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {memberFilterChanged, requestMembers} from "../actions";
import MemberSelect from "../components/MemberSelect";
import Card from "./Card";
import MemberPasswordForm from "../components/MemberPasswordForm";

export default function MemberSelector() {
    const members = useSelector(state => state.people.filteredMembers || state.people.members);
    const memberToCreate = useSelector(state => state.selected.memberToCreate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestMembers());
    }, []);

    const updateFilter = (event) => dispatch(memberFilterChanged(event.target.value));

    if (memberToCreate) {
        return <MemberPasswordForm member={memberToCreate}/>;
    }


    return (
        <div title="Members">
            <div className={"flex-wrap d-flex justify-content-between"}>
                {members.map(member => (
                    <MemberSelect member={member} key={member._id} isNewMember={member.isNew}/>
                ))}
            </div>

            <input type="text"
                   className="form-control bg-dark text-light mt-2"
                   onChange={updateFilter}
                   placeholder="Filter or add Member"/>
        </div>
    );
}
