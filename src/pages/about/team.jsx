import React from 'react';
import { team_info } from '../../data';
import Person from './person';
import styled from 'styled-components';

const TeamWrapper = styled.div``;

const TeamMembers = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
`;

const Header = styled.div`
  text-align: center;
  h2 {
    text-transform: capitalize;
  }
`;

function Team() {
  const team_elements = team_info.map((worker) => <Person {...worker} />);
  return (
    <TeamWrapper className="mt_80">
      <Header className="mb_32">
        <h2>Our awesome team</h2>
      </Header>
      <TeamMembers className="g_6">{team_elements}</TeamMembers>;
    </TeamWrapper>
  );
}

export default Team;
