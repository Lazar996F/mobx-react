import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import H3 from '../H3';
import P from '../P';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectItem = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin: 0 5px;
  }
`;

const Options = styled.div`
  display: flex;
`;

const UserLogo = styled.div`
  margin-top: 2px;
  background-image: url(${ props => props['professional'] ? process.env.PUBLIC_URL + '/icons/professional_user_icon.svg' : process.env.PUBLIC_URL + '/icons/user_standard_icon.svg' });
  background-repeat: no-repeat;
  width: 16px;
  height: 18px;
`;

function UsersTypeSelect() {
  return (
    <Wrapper>
      <H3 light>Select type of users</H3>
      <P variant="subtext">All changes must be accepted by the selected user or users</P>
      <Options>
        <SelectItem>
          <Checkbox
          />
          <UserLogo professional/>
          <label>Professional Users</label>
        </SelectItem>
        <SelectItem>
          <Checkbox/>
          <UserLogo/>
          <label>End Users</label>
        </SelectItem>
      </Options>
    </Wrapper>
  );
}

export default UsersTypeSelect;
