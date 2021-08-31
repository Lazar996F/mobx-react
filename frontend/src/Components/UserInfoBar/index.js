import styled from 'styled-components';
import Avatar from './Avatar';
import H3 from '../H3';
import {getInitials} from '../../Utils/helpers';

const Wrapper = styled.div`
  margin-top: auto;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

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
