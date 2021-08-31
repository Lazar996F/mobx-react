import styled from 'styled-components';
import H3 from '../H3';
import P from '../P';

const Input = styled.input`
  input[type=checkbox] {
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectItem = styled.div`
  margin: 5px;
  display: flex;

  > * {
    margin: 0 5px;
  }
`;

const Options = styled.div`
  display: flex;
`;

const UserLogo = styled.div`
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
          <Input type="checkbox" name="Professional Users"/>
          <UserLogo professional/>
          <label>Professional Users</label>
        </SelectItem>
        <SelectItem>
          <Input type="checkbox" name="End Users"/>
          <UserLogo/>
          <label>End Users</label>
        </SelectItem>
      </Options>
    </Wrapper>
  );
}

export default UsersTypeSelect;
