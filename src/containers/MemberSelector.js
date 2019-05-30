import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestMembers, memberFilterChanged} from "../actions";
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
        return (
            <Card title="Members">
                <MemberPasswordForm member={memberToCreate}/>
            </Card>
        );
    }

    return (
        <Card title="Members">
            {members.map(member => (
                <MemberSelect member={member} key={member._id}/>
            ))}

            <input type="text"
                   className="form-control bg-dark text-light mt-2"
                   onChange={updateFilter}
                   placeholder="Filter or add Member"/>
        </Card>
    );
}
