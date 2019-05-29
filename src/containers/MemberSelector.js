import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestMembers, memberFilterChanged} from "../actions";
import MemberSelect from "../components/MemberSelect";

export default function MemberSelector() {
  const members = useSelector(state => state.people.filteredMembers || state.people.members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMembers());
  }, []);

  const updateFilter = (event) => dispatch(memberFilterChanged(event.target.value));

  return (
      <div className="member-selector bg-dark card btn-group border-secondary">
        <div className="card-header bg-secondary text-light">
          <h5 class="mb-0">Members</h5>
        </div>

        <div className="card-body">
          {members.map(member => (
              <MemberSelect member={member} key={member._id}/>
          ))}

          <input type="text"
                 className="form-control bg-dark text-light mt-2"
                 onChange={updateFilter}
                 placeholder="Member filter"/>
        </div>
      </div>
  );
}
