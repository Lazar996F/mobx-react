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

const getInitials = (name) => {
  let initials = name.split(' ');

  if(initials.length > 1) {
    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
  } else {
    initials = name.substring(0, 2);
  }

  return initials.toUpperCase();
}

function UserInfoBar({username}) {
  const initials = getInitials(username);
  return (
    <Wrapper>
      <Avatar label={initials}/>
      <H3>{username}</H3>
    </Wrapper>
  );
}

export default UserInfoBar;
