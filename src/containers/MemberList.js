import React, {useEffect, useState} from 'react';
import axios from  'axios';
import '../style/App.css';

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(async () => {
    // const result = await axios(
    //   'https://bab.moepas.com/api/members'
    // );
    const result = {"members":[{"_id":"5cce90df785cdd0004972bac","slackId":"U48KN3G3C","playerName":"mattp"},{"_id":"5ccf0636785cdd0004972bad","slackId":"UFG9SDVCL","playerName":"conica"},{"_id":"5ccf33bb785cdd0004972bae","slackId":"U7TNP566A","playerName":"eric"},{"_id":"5ccf5dc7785cdd0004972bb3","slackId":"U02FFKR85","playerName":"connk"},{"_id":"5cd05a4c997d380004a43e67","slackId":"U0ZP8UURH","playerName":"chrih"},{"_id":"5cd07401997d380004a43e68","slackId":"U04UBTXTH","playerName":"brianw"},{"_id":"5cd07fb1853f6e0004bcf432","slackId":"U6LTAE2UX","playerName":"jonchay"},{"_id":"5cd24069a271c50004b02e2c","slackId":"U1QPCRYHW","playerName":"yiyiz"},{"_id":"5cd4d0121f673600044e6da4","slackId":"U5NDP62LR","playerName":"james"},{"_id":"5cd4d0241f673600044e6da6","slackId":"UCG1SBW2W","playerName":"dj"},{"_id":"5cd4d0351f673600044e6da8","slackId":"UH3TCPT8F","playerName":"jenny"},{"_id":"5cd4d0411f673600044e6da9","slackId":"UD04THUFL","playerName":"jen"},{"_id":"5cd4d2ee1f673600044e6daf","slackId":"U26429LJF","playerName":"winnw"},{"_id":"5cd4d41d1f673600044e6db1","slackId":"U2BAY5HC2","playerName":"ryanpo"},{"_id":"5cd4d6211f673600044e6db5","slackId":"U26JWFPCZ","playerName":"mil"},{"_id":"5cd707abb19f860004b43a63","slackId":"U02FMB0M2","playerName":"alok"},{"_id":"5cdb70a67d15b700045c6618","slackId":"U1JLEPA31","playerName":"xiaozh"},{"_id":"5cde10e82d08300004827770","slackId":"U0DMSU7FX","playerName":"jazz"},{"_id":"5cde12b32d08300004827775","slackId":"U4M2V9GH0","playerName":"cren"}]};

    console.log("finished")

    setMembers(result.members);
  }, []);

  return (
    <div className="Memberlist">
      {members.map(member => (
        <div key={member.slackId}>
          {member.playerName}
        </div>
      ))}
    </div>
  );
}

export default MemberList;
