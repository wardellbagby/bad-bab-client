import React, {useEffect, useState} from 'react';
import axios from  'axios';
import '../style/App.css';

function SessionSetup() {
  const [isSessionLive, setSessionLive] = useState(false);

  useEffect(async () => {
    try {
      await axios(
        'https://bab.moepas.com/api/sessions'
      );
      setSessionLive(true);
    } catch (error) {
      setSessionLive(false);
    }
  }, []);

  return (
    <div className="SessionSetup">
      {members.map(member => (
        <div key={member.slackId}>
          {member.playerName}
        </div>
      ))}
    </div>
  );
}

export default MemberList;
