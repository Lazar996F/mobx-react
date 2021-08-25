import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import H3 from '../H3';

const Wrapper = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 30px;
`;

const makeInitials = (username) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  let initials = [...username.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();
  return initials;
}

function UserInfoBar({username}) {
  const label = makeInitials(username);
  return (
    <Wrapper>
      <Avatar label={label}/>
      <H3>{username}</H3>
    </Wrapper>
  );
}

export default UserInfoBar;
