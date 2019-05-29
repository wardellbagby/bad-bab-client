import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestMembers, memberFilterChanged} from "../actions";
import MemberSelect from "../components/MemberSelect";
import Card from "./Card";

export default function MemberSelector() {
    const members = useSelector(state => state.people.filteredMembers || state.people.members);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestMembers());
    }, []);

    const updateFilter = (event) => dispatch(memberFilterChanged(event.target.value));

    return (
        <Card title="Members">
            {members.map(member => (
                <MemberSelect member={member} key={member._id}/>
            ))}

            <input type="text"
                   className="form-control bg-dark text-light mt-2"
                   onChange={updateFilter}
                   placeholder="Member filter"/>
        </Card>
    );
}
