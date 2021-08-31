import styled from 'styled-components';
import H3 from '../H3';
import P from '../P';

const Input = styled.input`

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectLabel = styled.div`
`;

const Options = styled.div`
  display: flex;
`;

const UserLogo = styled.div`
  background-image: url(${props =>  process.env.PUBLIC_URL + props['professional'] ? '/icons/professional_user_icon.svg' : '/icons/user_standard_icon.svg'});
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
        <div className="margin-5">
          <Input type="checkbox" name="Professional Users"/>
          <UserLogo professional/>
          <label>Professional Users</label>
        </div>
        <div className="margin-5">
          <Input type="checkbox" name="End Users"/>
          <UserLogo/>
          <label>End Users</label>
        </div>
      </Options>
    </Wrapper>
  );
}

export default UsersTypeSelect;
