import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestMembers } from "../actions";

function MemberList() {
  const members = useSelector(state => state.people.members);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(requestMembers());
  }, []);

  return (
    <div className="Memberlist">
      {members.map(member => (
        <div key={member.slackId}>
          {member.name}
        </div>
      ))}
    </div>
  );
}

export default MemberList;
